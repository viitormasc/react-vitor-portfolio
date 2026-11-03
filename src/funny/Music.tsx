import { useEffect, useRef, useState } from "react";

const BPM = 150;
const STEP = 60 / BPM / 2;

const LEAD: (number | null)[] = [
  [72, 76, 79, 76, 72, 76, 79, 84],
  [74, 77, 81, 77, 74, 77, 81, 86],
  [84, 79, 76, 79, 84, null, 83, 84],
  [83, 79, 74, 79, 83, 86, 83, null],
  [81, 76, 72, 76, 81, 84, 81, 76],
  [77, 81, 84, 81, 77, 72, 77, 81],
  [79, 83, 86, 83, 79, null, 74, 71],
  [72, null, 76, null, 79, null, 84, null],
].flat();

const BASS_ROOTS = [48, 50, 48, 43, 45, 41, 43, 48];

const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);

function tone(
  ctx: AudioContext,
  dest: AudioNode,
  midi: number,
  time: number,
  duration: number,
  type: OscillatorType,
  volume: number,
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = hz(midi);
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  osc.connect(gain).connect(dest);
  osc.start(time);
  osc.stop(time + duration + 0.02);
}

function scheduleStep(
  ctx: AudioContext,
  dest: AudioNode,
  step: number,
  time: number,
) {
  const lead = LEAD[step];

  if (lead !== null) tone(ctx, dest, lead, time, STEP * 0.9, "square", 0.07);
  const root = BASS_ROOTS[Math.floor(step / 8)];

  tone(
    ctx,
    dest,
    step % 2 ? root + 12 : root,
    time,
    STEP * 0.8,
    "triangle",
    0.2,
  );
}

const PREF_KEY = "fn-music";

export function MusicPlayer() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const [wanted, setWanted] = useState(
    () => sessionStorage.getItem(PREF_KEY) !== "off",
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const ctx = new AudioContext();
    const master = ctx.createGain();

    master.gain.value = 0.3;
    master.connect(ctx.destination);
    ctxRef.current = ctx;
    masterRef.current = master;
    ctx.onstatechange = () => setRunning(ctx.state === "running");

    let step = 0;
    let next = ctx.currentTime + 0.05;
    const timer = window.setInterval(() => {
      if (ctx.state !== "running") return;
      if (next < ctx.currentTime) next = ctx.currentTime + 0.05;
      while (next < ctx.currentTime + 0.12) {
        scheduleStep(ctx, master, step, next);
        next += STEP;
        step = (step + 1) % LEAD.length;
      }
    }, 25);

    return () => {
      window.clearInterval(timer);
      ctx.onstatechange = null;
      void ctx.close();
      ctxRef.current = null;
    };
  }, []);

  useEffect(() => {
    const ctx = ctxRef.current;

    if (!ctx) return;
    sessionStorage.setItem(PREF_KEY, wanted ? "on" : "off");
    if (!wanted) {
      void ctx.suspend();

      return;
    }
    void ctx.resume();
    const unlock = () => void ctxRef.current?.resume();

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [wanted]);

  const playing = wanted && running;

  return (
    <button
      aria-label={playing ? "Stop music" : "Play music"}
      className="fn-chunky fixed bottom-28 left-4 z-[1100] bg-[var(--fn-orange)] text-sm text-black md:bottom-24"
      onClick={() => {
        if (wanted && !running) {
          void ctxRef.current?.resume();

          return;
        }
        setWanted((w) => !w);
      }}
    >
      {playing ? "🔇 STOP MUSIC" : "🎵 PLAY MUSIC"}
      {playing && <span className="fn-blink ml-1">♪♫</span>}
    </button>
  );
}
