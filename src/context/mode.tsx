import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type Mode = "serious" | "funny";

const STORAGE_KEY = "portfolio-mode";

interface ModeContextValue {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);

function readInitialMode(): Mode {
  if (typeof window === "undefined") return "funny";
  const param = new URLSearchParams(window.location.search).get("mode");

  if (param === "funny" || param === "serious") return param;

  return window.localStorage.getItem(STORAGE_KEY) === "serious"
    ? "serious"
    : "funny";
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readInitialMode);
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }
    window.scrollTo({ top: 0 });
  }, [mode]);

  const toggleMode = useCallback(
    () => setMode((m) => (m === "funny" ? "serious" : "funny")),
    [],
  );

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);

  if (!ctx) throw new Error("useMode must be used inside ModeProvider");

  return ctx;
}
