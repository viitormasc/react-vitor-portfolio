import clsx from "clsx";

type Direction = "left" | "right" | "up" | "down";

const LAYOUT: Record<Direction, string> = {
  right: "flex-row",
  left: "flex-row-reverse",
  down: "flex-col",
  up: "flex-col-reverse",
};

const ARROW_TRANSFORM: Record<Direction, string> = {
  right: "none",
  left: "scaleX(-1)",
  down: "rotate(90deg)",
  up: "rotate(-90deg)",
};

export function RedArrow({
  direction = "right",
  size = 90,
}: {
  direction?: Direction;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      height={size / 2}
      style={{ transform: ARROW_TRANSFORM[direction] }}
      viewBox="0 0 120 60"
      width={size}
    >
      <path
        d="M6 46 C 30 4, 78 2, 108 30"
        fill="none"
        stroke="#e60000"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M90 12 L110 32 L84 40"
        fill="none"
        stroke="#e60000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
    </svg>
  );
}

export function WrongFact({
  text,
  direction = "right",
  className,
  tilt = -4,
  mobile = false,
}: {
  text: string;
  direction?: Direction;
  className?: string;
  tilt?: number;
  mobile?: boolean;
}) {
  return (
    <div
      className={clsx(
        "fn-fact fn-hand absolute z-20 items-center gap-1",
        LAYOUT[direction],
        mobile ? "flex" : "hidden lg:flex",
        className,
      )}
      style={{ rotate: `${tilt}deg` }}
    >
      <span className="max-w-[11rem] text-center text-lg">{text}</span>
      <RedArrow direction={direction} />
    </div>
  );
}

export function AlertBanner({ text }: { text: string }) {
  return (
    <div className="fn-alert fn-impact mx-auto my-2 max-w-5xl px-4 py-3 text-center text-xl md:text-2xl">
      <span className="fn-blink">{text}</span>
    </div>
  );
}
