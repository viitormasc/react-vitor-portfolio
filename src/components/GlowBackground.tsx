import { ReactNode, useState } from "react";

export default function GlowBackground({ children }: { children?: ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            200px circle at ${pos.x}px ${pos.y}px,
            rgba(0,122,255,0.15),
            transparent 60%
          )`,
        }}
      />

      {children}
    </div>
  );
}
