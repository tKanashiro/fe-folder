"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Slide5() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <h1
        ref={headingRef}
        className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50"
      >
        Thank You
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Details. Dialog. Popover. Zero dependencies.
      </p>
    </div>
  );
}
