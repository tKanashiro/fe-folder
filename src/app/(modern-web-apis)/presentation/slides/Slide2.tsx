"use client";

import { useRef } from "react";
import type { ToggleEvent } from "react";
import gsap from "gsap";
import DemoSlide from "./DemoSlide";

const code = `<details>
  <summary>Do I need an accordion library?</summary>
  <p>No — <details> is built in.</p>
</details>`;

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const contentRef = useRef<HTMLParagraphElement>(null);

  const handleToggle = (event: ToggleEvent<HTMLDetailsElement>) => {
    if (event.newState !== "open" || !contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    );
  };

  return (
    <details
      onToggle={handleToggle}
      className="w-full rounded-lg border border-black/8 px-4 py-3 text-left dark:border-white/[.145]"
    >
      <summary className="cursor-pointer font-medium text-black dark:text-zinc-50">
        {question}
      </summary>
      <p
        ref={contentRef}
        className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"
      >
        {answer}
      </p>
    </details>
  );
}

export default function Slide2() {
  return (
    <DemoSlide
      title="Accordions"
      why="Accordion library ✗ → native disclosure ✓ — free keyboard support and ARIA semantics."
      demo={
        <div className="flex w-full flex-col gap-3">
          <AccordionItem
            question="Do I need an accordion library?"
            answer="No — <details> handles open/close, keyboard, and accessibility for free."
          />
          <AccordionItem
            question="Can I still animate it?"
            answer="Yes — listen for the toggle event and animate the reveal with GSAP."
          />
        </div>
      }
      code={code}
    />
  );
}
