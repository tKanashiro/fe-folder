"use client";

import { useRef } from "react";
import type { ToggleEvent } from "react";
import gsap from "gsap";
import DemoSlide from "./DemoSlide";

const code = `<button popoverTarget="tip">Show popover</button>

<div id="tip" popover="auto">
  Native tooltip — dismisses on outside click or Escape.
</div>`;

export default function Slide4() {
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleToggle = (event: ToggleEvent<HTMLDivElement>) => {
    if (event.newState !== "open" || !popoverRef.current) return;
    gsap.fromTo(
      popoverRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" },
    );
  };

  return (
    <DemoSlide
      title="Dropdowns & Tooltips"
      why="Dropdown/tooltip library ✗ → Popover API ✓ — free light-dismiss and positioning."
      demo={
        <div className="relative flex flex-col items-center">
          <button
            type="button"
            popoverTarget="demo-tip"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 text-base font-medium text-black transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
          >
            Show popover
          </button>
          <div
            id="demo-tip"
            popover="auto"
            ref={popoverRef}
            onToggle={handleToggle}
            className="absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-xl border border-black/8 bg-white px-4 py-3 text-sm text-zinc-700 shadow-lg dark:border-white/[.145] dark:bg-zinc-900 dark:text-zinc-300"
          >
            Native tooltip — dismisses on outside click or Escape.
          </div>
        </div>
      }
      code={code}
    />
  );
}
