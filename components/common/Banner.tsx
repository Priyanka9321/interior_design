"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

interface Props {
  slides?: Slide[];
  autoPlayInterval?: number;
}

export default function PageHero({ slides = [], autoPlayInterval = 3000 }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides, autoPlayInterval, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <>
      {(!slides || slides.length === 0) ? null : (
        <section
          className="relative group -mx-[calc((100vw-100%)/2)] 
          w-screen 
          h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]
          overflow-hidden flex items-center justify-center text-center mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence>
            {slides.map((slide, index) =>
              index === currentSlide ? (
                <motion.div
                  key={index}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src={slide.backgroundImage}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30 z-10" />

                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
                    <p className="text-[#F5F5F5] text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl tracking-wide">
                      {slide.title}
                    </p>

                    {slide.subtitle && (
                      <p className="text-[#e6e6e6] text-xl md:text-2xl max-w-3xl drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* LEFT (original) */}
          {slides.length > 1 && (
            <button
              onClick={prevSlide}
              className="opacity-0 group-hover:opacity-100 absolute left-6 z-30 border-2 border-white text-white p-2 hover:bg-white hover:text-black transition-all"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* RIGHT (original) */}
          {slides.length > 1 && (
            <button
              onClick={nextSlide}
              className="opacity-0 group-hover:opacity-100 absolute right-6 z-30 border-2 border-white text-white p-2 hover:bg-white hover:text-black transition-all"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </section>
      )}
    </>
  );
}