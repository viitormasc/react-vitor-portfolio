import { useEffect, useRef, useState } from "react";

import { errorDialogs, virusList } from "./content";
import { RetroModal, RetroWindow } from "./RetroWindow";

import { siteConfig } from "@/config/site";

type ModalId = "million" | "exit" | "hire" | "virus";

interface FloatingError {
  id: number;
  dialog: (typeof errorDialogs)[number];
  x: number;
  y: number;
}

const seenKey = (id: ModalId) => `fn-popup-${id}`;

const hireMail = (subject: string) =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;

const openLinkedIn = () =>
  window.open(siteConfig.links.linkedin, "_blank", "noopener,noreferrer");

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function FunnyPopups() {
  const [modal, setModal] = useState<ModalId | null>(null);
  const [errors, setErrors] = useState<FloatingError[]>([]);
  const modalRef = useRef<ModalId | null>(null);
  const nextErrorId = useRef(0);

  modalRef.current = modal;

  useEffect(() => {
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) =>
      timers.push(window.setTimeout(fn, ms));

    const tryOpen = (id: ModalId, oncePerSession: boolean) => {
      if (modalRef.current) return false;
      if (oncePerSession) {
        if (sessionStorage.getItem(seenKey(id)) === "1") return false;
        sessionStorage.setItem(seenKey(id), "1");
      }
      modalRef.current = id;
      setModal(id);

      return true;
    };

    const spawnError = () => {
      setErrors((list) => {
        if (list.length >= 3) return list;
        const dialog =
          errorDialogs[Math.floor(Math.random() * errorDialogs.length)];

        return [
          ...list,
          {
            id: nextErrorId.current++,
            dialog,
            x: rand(8, Math.max(8, window.innerWidth - 330)),
            y: rand(90, Math.max(90, window.innerHeight - 260)),
          },
        ];
      });
      later(spawnError, rand(9000, 17000));
    };

    const askToHire = () => {
      if (!tryOpen("hire", false)) {
        later(askToHire, 8000);

        return;
      }
      later(askToHire, rand(45000, 65000));
    };

    const retryOnce = (id: ModalId) => {
      const attempt = () => {
        if (sessionStorage.getItem(seenKey(id)) === "1") return;
        if (!tryOpen(id, true)) later(attempt, 6000);
      };

      return attempt;
    };

    later(spawnError, 6000);
    later(retryOnce("million"), 12000);
    later(askToHire, 24000);
    later(retryOnce("virus"), 38000);

    let armed = false;

    later(() => (armed = true), 5000);
    const onMouseOut = (e: MouseEvent) => {
      if (armed && !e.relatedTarget && e.clientY <= 0) tryOpen("exit", true);
    };

    document.addEventListener("mouseout", onMouseOut);

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  const close = () => setModal(null);
  const dismissError = (id: number) =>
    setErrors((list) => list.filter((e) => e.id !== id));

  return (
    <>
      {errors.map((e) => (
        <ErrorDialog key={e.id} error={e} onClose={() => dismissError(e.id)} />
      ))}
      {modal === "million" && <MillionVisitor onClose={close} />}
      {modal === "exit" && <ExitIntent onClose={close} />}
      {modal === "hire" && <HireQuestion onClose={close} />}
      {modal === "virus" && <Antivirus onClose={close} />}
    </>
  );
}

function ErrorDialog({
  error,
  onClose,
}: {
  error: FloatingError;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed z-[1300] w-[min(20rem,calc(100vw-1rem))] fn-pop"
      role="alertdialog"
      style={{ left: error.x, top: error.y }}
    >
      <RetroWindow title={error.dialog.title} onClose={onClose}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{error.dialog.icon}</span>
          <p className="text-base">{error.dialog.text}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="fn-btn fn-times px-8" onClick={onClose}>
            OK
          </button>
        </div>
      </RetroWindow>
    </div>
  );
}

function MillionVisitor({ onClose }: { onClose: () => void }) {
  return (
    <RetroModal title="🎉 YOU ARE A WINER!!! 🎉" onClose={onClose}>
      <p className="fn-impact fn-headline text-center text-4xl">
        CONGRATULATONS!!!
      </p>
      <p className="mt-3 text-center">
        You are the <b className="fn-blink">1,000,000th</b> visiter!!!
      </p>
      <p className="mt-3 text-center text-sm">
        PRIZE: one (1) backend software enginer. Claim it before someone else
        hires him.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          className="fn-btn fn-btn-hot"
          href={hireMail("I won you as a prize, let's talk")}
          onClick={onClose}
        >
          🏆 CLAIM PRIZE
        </a>
        <button className="fn-btn" onClick={onClose}>
          no thanks, I hate prizes
        </button>
      </div>
    </RetroModal>
  );
}

function ExitIntent({ onClose }: { onClose: () => void }) {
  return (
    <RetroModal title="⚠️ WAIT!!! DONT GO!!!" onClose={onClose}>
      <p className="fn-impact text-center text-3xl text-red-600">
        LEAVING SO SOON?? 😭
      </p>
      <p className="mt-3 text-center">
        Hire Vitor now and get <b>0% OFF</b>!!!
      </p>
      <p className="mt-1 text-center text-xs">
        Limited time offer. (The time is unlimted.)
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          className="fn-btn fn-btn-hot"
          href={hireMail("I saw the 0% off deal")}
          onClick={onClose}
        >
          OK FINE, LETS TALK
        </a>
        <button className="fn-btn" onClick={onClose}>
          I&apos;ll think about it 🤔
        </button>
      </div>
    </RetroModal>
  );
}

const NO_LABELS = [
  "No",
  "nope",
  "try again",
  "nice try",
  "u cant",
  "too slow",
  "NO is not an opton",
  "lol",
  "just click yes",
];

function HireQuestion({ onClose }: { onClose: () => void }) {
  const [pos, setPos] = useState({ left: 62, top: 55 });
  const [tries, setTries] = useState(0);

  const flee = () => {
    setTries((t) => t + 1);
    setPos({ left: rand(2, 72), top: rand(2, 80) });
  };

  return (
    <RetroModal title="VitorOS · Importent Question" onClose={onClose}>
      <div className="flex items-center gap-4">
        <span className="text-5xl">❓</span>
        <p className="fn-impact text-4xl">Hire Vitor?</p>
      </div>
      <div className="relative mt-4 h-36 border-2 border-dashed border-gray-500">
        <button
          className="fn-btn fn-btn-hot absolute left-[8%] top-[40%] px-6 text-lg"
          onClick={() => {
            openLinkedIn();
            onClose();
          }}
        >
          YES!!!
        </button>
        <button
          className="fn-btn absolute whitespace-nowrap transition-all duration-150"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          onClick={(e) => {
            e.preventDefault();
            flee();
          }}
          onFocus={flee}
          onPointerDown={(e) => {
            e.preventDefault();
            flee();
          }}
          onPointerEnter={flee}
        >
          {NO_LABELS[tries % NO_LABELS.length]}
        </button>
      </div>
      <p className="mt-2 text-center text-xs">
        {tries > 0
          ? `attempts to click No: ${tries}. impressive dedication. still no.`
          : "(this question will come back)"}
      </p>
    </RetroModal>
  );
}

function Antivirus({ onClose }: { onClose: () => void }) {
  const [found, setFound] = useState(0);
  const done = found >= virusList.length;

  useEffect(() => {
    if (done) return;
    const t = window.setTimeout(() => setFound((f) => f + 1), 450);

    return () => window.clearTimeout(t);
  }, [found, done]);

  return (
    <RetroModal title="🛡️ VitorShield Antivirus 98" onClose={onClose}>
      <p className="font-bold">
        {done
          ? `⚠️ ${virusList.length} THREATS FOUND!!!`
          : "Scaning ur computer..."}
      </p>
      <div className="mt-2 h-6 border-2 border-gray-700 bg-white">
        <div
          className="h-full bg-red-600 transition-[width] duration-300"
          style={{ width: `${(found / virusList.length) * 97}%` }}
        />
      </div>
      <ul className="fn-mono mt-3 h-40 overflow-y-auto bg-black p-2 text-sm text-[var(--fn-lime)]">
        {virusList.slice(0, found).map((v) => (
          <li key={v} className="fn-pop">
            🦠 {v}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-col items-center gap-2">
        <a
          className="fn-chunky fn-impact bg-red-600 text-center text-xl text-white"
          href={hireMail("Please remove all my viruses")}
          onClick={onClose}
        >
          HIRE VITOR TO REMOVE ALL ($0.00)
        </a>
        <button className="text-xs underline" onClick={onClose}>
          ignore threats (not recomended)
        </button>
      </div>
    </RetroModal>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(
    () => sessionStorage.getItem("fn-cookies") !== "1",
  );
  const [dodges, setDodges] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState<string | null>(null);

  const dismiss = (text: string) => {
    sessionStorage.setItem("fn-cookies", "1");
    setMessage(text);
    window.setTimeout(() => setVisible(false), 1600);
  };

  const dodge = () => {
    if (dodges >= 6) return;
    setDodges((d) => d + 1);
    setOffset({
      x: Math.round(rand(-220, 120)),
      y: -Math.round(rand(0, 70)),
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1200] p-2">
      <div className="mx-auto max-w-5xl border-4 border-dashed border-[#ffd23f] bg-[#7a4a1e] px-4 py-4 text-white shadow-[0_0_0_4px_#111]">
        {message ? (
          <p className="fn-pop text-center text-lg">{message}</p>
        ) : (
          <>
            <p className="text-center text-base md:text-lg">
              🍪 To improve ur expereince this website uses cookies, ur webcam
              and fylesistem access. (not a scam)
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                className="fn-btn px-5"
                onClick={() =>
                  dismiss("✅ Accepted. Webcam is on. (it is not)")
                }
              >
                accept
              </button>
              <button
                className="fn-chunky fn-impact fn-wobble bg-gradient-to-b from-[#ff3b3b] to-[#c40000] px-8 py-3 text-2xl leading-tight text-white [text-shadow:2px_2px_0_#111] md:text-4xl"
                onClick={() =>
                  dismiss(
                    "💥 ACCEPTED EVEN MORE. Cookies: maximum. Fylesistem: borrowed.",
                  )
                }
              >
                NOT NOT ACCEPT
                <span className="block text-base md:text-lg">
                  (accept more)
                </span>
              </button>
              <button
                className="fn-times rounded-sm border border-black bg-[#2ecc40] px-1 text-[9px] leading-tight text-black transition-transform duration-150"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
                onClick={() =>
                  dismiss("Rejected. Bold move. 😤 Crumbs remain.")
                }
                onPointerEnter={dodge}
              >
                {dodges >= 6 ? "fine. reject 😤" : "reject"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
