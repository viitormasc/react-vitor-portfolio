import clsx from "clsx";

import { useMode } from "@/context/mode";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();
  const funny = mode === "funny";

  return (
    <button
      aria-checked={funny}
      aria-label="Toggle between serious and funny portfolio"
      className={clsx(
        "fixed right-3 top-20 lg:top-3 z-[1000] flex items-center gap-2 rounded-full px-3 py-2",
        "text-sm font-bold shadow-xl transition-colors select-none cursor-pointer",
        funny
          ? "bg-[#ff7a1a] text-black border-4 border-dashed border-black shadow-[4px_4px_0_#111]"
          : "bg-white/90 text-black border border-black/15 backdrop-blur dark:bg-black/80 dark:text-white dark:border-white/20",
      )}
      role="switch"
      onClick={toggleMode}
    >
      <span className={clsx("transition-opacity", funny && "opacity-50")}>
        👔 Serious
      </span>
      <span
        className={clsx(
          "relative h-7 w-14 rounded-full transition-colors",
          funny
            ? "bg-[#c6f432] border-2 border-black"
            : "bg-black/15 dark:bg-white/20",
        )}
      >
        <span
          className={clsx(
            "absolute top-1 left-1 h-5 w-5 rounded-full transition-transform duration-300",
            funny
              ? "translate-x-7 bg-[#ff4fa3] rotate-[360deg]"
              : "bg-blue-600",
          )}
        />
      </span>
      <span className={clsx("transition-opacity", !funny && "opacity-60")}>
        🤡 Funny
      </span>
    </button>
  );
}
