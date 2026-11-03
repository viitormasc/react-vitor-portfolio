import { ReactNode } from "react";
import clsx from "clsx";

interface RetroWindowProps {
  title: string;
  onClose?: () => void;
  className?: string;
  children: ReactNode;
}

export function RetroWindow({
  title,
  onClose,
  className,
  children,
}: RetroWindowProps) {
  return (
    <div className={clsx("fn-window", className)}>
      <div className="fn-window-title">
        <span className="truncate">{title}</span>
        {onClose && (
          <button
            aria-label="Close"
            className="fn-window-close"
            onClick={onClose}
          >
            ×
          </button>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function RetroModal({
  title,
  onClose,
  children,
}: Required<Pick<RetroWindowProps, "title" | "onClose" | "children">>) {
  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[1500] flex items-center justify-center bg-black/40 p-4"
      role="dialog"
    >
      <RetroWindow
        className="fn-pop w-full max-w-md"
        title={title}
        onClose={onClose}
      >
        {children}
      </RetroWindow>
    </div>
  );
}
