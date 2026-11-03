import { useEffect, useState } from "react";

import resume from "../assets/Resume vitor dev.pdf";

import { resumeSteps } from "./content";

const FILE_NAME = "Vitor_CV_FINAL_final_v3(1).pdf";

export function ResumeDownload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (progress === null || progress >= 100) return;
    const delay = progress >= 99 ? 2400 : 90;
    const timer = window.setTimeout(() => {
      setProgress((p) =>
        p === null ? p : p >= 99 ? 100 : Math.min(99, p + 3),
      );
      setStep((s) =>
        progress % 15 === 0 ? Math.min(s + 1, resumeSteps.length - 1) : s,
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [progress]);

  const done = progress === 100;

  return (
    <div className="mx-auto max-w-xl text-center">
      {progress === null && (
        <button
          className="fn-btn fn-btn-hot text-xl"
          onClick={() => setProgress(0)}
        >
          💾 DOWNLAOD CV (100% virus free)
        </button>
      )}

      {progress !== null && !done && (
        <div className="fn-window p-4 text-left">
          <p className="fn-mono text-sm">Downloading {FILE_NAME}</p>
          <div className="mt-2 h-6 border-2 border-gray-700 bg-white">
            <div
              className="h-full bg-[#12b5a8] transition-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="fn-mono mt-2 text-sm">
            {progress}% · {resumeSteps[step]}
          </p>
        </div>
      )}

      {done && (
        <a
          className="fn-btn fn-btn-hot fn-pop text-lg"
          href={resume}
          rel="noreferrer"
          target="_blank"
        >
          ✅ DONE!!! click to open {FILE_NAME}
        </a>
      )}

      <p className="mt-3 text-xs">
        <a className="underline" href={resume} rel="noreferrer" target="_blank">
          skip the animation (I&apos;m a busy recruiter)
        </a>
      </p>
    </div>
  );
}
