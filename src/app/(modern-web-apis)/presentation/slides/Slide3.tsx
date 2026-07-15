"use client";

import { useRef } from "react";
import gsap from "gsap";
import DemoSlide from "./DemoSlide";

const code = `<dialog ref={dialogRef}>
  <p>Native modal — focus trap, Escape, and backdrop included.</p>
  <button onClick={() => dialogRef.current?.close()}>Close</button>
</dialog>

<button onClick={() => dialogRef.current?.showModal()}>
  Open dialog
</button>`;

export default function Slide3() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    gsap.fromTo(
      dialog,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" },
    );
  };

  return (
    <DemoSlide
      title="Modals"
      why="Modal library ✗ → <dialog> ✓ — free focus trap, Escape-to-close, and backdrop."
      demo={
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={openDialog}
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 text-base font-medium text-black transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
          >
            Open dialog
          </button>
          <dialog
            ref={dialogRef}
            className="rounded-2xl border border-black/8 bg-white p-6 text-center dark:border-white/[.145] dark:bg-zinc-900 dark:text-zinc-50"
          >
            <p className="mb-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              This is a native &lt;dialog&gt;. No modal library required.
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="flex h-10 items-center justify-center rounded-full border border-solid border-black/8 px-4 text-sm font-medium text-black transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
            >
              Close
            </button>
          </dialog>
        </div>
      }
      code={code}
    />
  );
}
