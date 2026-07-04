"use client";

import { useState } from "react";
import { slides } from "./slides";

export default function ModernWebApisPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center justify-center px-16 py-32">
        <CurrentSlide />
      </main>
      <footer className="flex w-full items-center justify-between px-16 py-8">
        {!isFirstSlide ? (
          <button
            type="button"
            onClick={() => setCurrentSlide((slide) => slide - 1)}
            aria-label="Previous slide"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 text-base font-medium text-black transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
          >
            &larr; Previous
          </button>
        ) : (
          <span />
        )}
        {!isLastSlide ? (
          <button
            type="button"
            onClick={() => setCurrentSlide((slide) => slide + 1)}
            aria-label="Next slide"
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 text-base font-medium text-black transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
          >
            Next &rarr;
          </button>
        ) : (
          <span />
        )}
      </footer>
    </div>
  );
}
