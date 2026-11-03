import { useEffect } from "react";

const SPARKLES = ["✨", "⭐", "💖", "🐛", "🚀", "🌈"];

export function CursorTrail() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");

    if (reduced.matches || coarse.matches) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();

      if (now - last < 45) return;
      last = now;
      const el = document.createElement("span");

      el.className = "fn-trail";
      el.textContent = SPARKLES[Math.floor(Math.random() * SPARKLES.length)];
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);
      window.setTimeout(() => el.remove(), 700);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.querySelectorAll(".fn-trail").forEach((n) => n.remove());
    };
  }, []);

  return null;
}
