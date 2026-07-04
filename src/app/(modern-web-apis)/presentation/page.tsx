"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { slides } from "./slides";

const SWIPE_THRESHOLD = 60;

export default function ModernWebApisPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const directionRef = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef<number | null>(null);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;
  const CurrentSlide = slides[currentSlide];

  const goToSlide = useCallback((delta: number, direction: number) => {
    setCurrentSlide((current) => {
      const next = current + delta;
      if (next < 0 || next >= slides.length) return current;
      directionRef.current = direction;
      return next;
    });
  }, []);

  const goPrevious = useCallback(() => goToSlide(-1, -1), [goToSlide]);
  const goNext = useCallback(() => goToSlide(1, 1), [goToSlide]);

  useEffect(() => {
    if (!slideRef.current) return;
    gsap.fromTo(
      slideRef.current,
      { xPercent: directionRef.current * 40, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [currentSlide]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let locked = false;
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      if (locked) return;

      if (event.deltaX > SWIPE_THRESHOLD) {
        goNext();
        locked = true;
      } else if (event.deltaX < -SWIPE_THRESHOLD) {
        goPrevious();
        locked = true;
      }

      if (locked) {
        window.setTimeout(() => {
          locked = false;
        }, 500);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrevious]);

  const handleMouseDown = (event: React.MouseEvent) => {
    dragStartXRef.current = event.clientX;
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    if (dragStartXRef.current === null) return;
    const deltaX = event.clientX - dragStartXRef.current;
    dragStartXRef.current = null;

    if (deltaX < -SWIPE_THRESHOLD) {
      goNext();
    } else if (deltaX > SWIPE_THRESHOLD) {
      goPrevious();
    }
  };

  const handleMouseLeave = () => {
    dragStartXRef.current = null;
  };

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main
        ref={containerRef}
        className="flex flex-1 w-full max-w-3xl mx-auto flex-col items-center justify-center overflow-hidden px-16 py-32 cursor-grab select-none active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={slideRef}>
          <CurrentSlide />
        </div>
      </main>
      <footer className="flex w-full items-center justify-between px-16 py-8">
        {!isFirstSlide ? (
          <button
            type="button"
            onClick={goPrevious}
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
            onClick={goNext}
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
