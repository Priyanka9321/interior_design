"use client";

import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

// Slide data with different before/after images
const slides = [
  {
    id: 1,
    beforeImage: "https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg",
    afterImage: "https://images.pexels.com/photos/11018250/pexels-photo-11018250.jpeg",
    title: "Modern Living Room"
  },
  {
    id: 2,
    beforeImage: "https://images.pexels.com/photos/7340583/pexels-photo-7340583.jpeg",
    afterImage: "https://images.pexels.com/photos/5393438/pexels-photo-5393438.jpeg",
    title: "Contemporary Kitchen"
  },
  {
    id: 3,
    beforeImage: "https://images.pexels.com/photos/5461565/pexels-photo-5461565.jpeg",
    afterImage: "https://images.pexels.com/photos/15798784/pexels-photo-15798784.jpeg",
    title: "Elegant Bedroom"
  }
];

export default function TransformationShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const firstImage = { imageUrl: slides[currentSlide].beforeImage };
  const secondImage = { imageUrl: slides[currentSlide].afterImage };

  return (
    <section className="bg-[var(--background)] py-20 px-6 md:px-12 border-y border-[var(--accent)] border-opacity-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-2">
            Transformation
          </p>
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            A Seamless Experience
          </h2>
          <p className="text-[var(--foreground)]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
            With Naval Design Process, transforming your space is as smooth an
            experience as sliding this bar.
          </p>
        </div>

        {/* Before / After Slider with Navigation */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden shadow-lg w-full max-w-4xl group">
            {/* Labels */}
            <span className="absolute top-4 left-4 z-20 bg-[var(--foreground)]/80 text-white px-4 py-1 text-xs md:text-sm font-body uppercase tracking-wider">
              Before
            </span>
            <span className="absolute top-4 right-4 z-20 bg-[var(--accent)]/90 text-[var(--foreground)] px-4 py-1 text-xs md:text-sm font-body uppercase tracking-wider">
              After
            </span>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[var(--foreground)] p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[var(--foreground)] p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slider */}
            <div className="relative h-[250px] sm:h-[340px] md:h-[520px] w-full overflow-hidden">
              <ReactBeforeSliderComponent
                firstImage={firstImage}
                secondImage={secondImage}
              />

              <style jsx global>{`
                .before-after-slider {
                  height: 100% !important;
                  width: 100% !important;
                  display: block !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  line-height: 0 !important;
                  font-size: 0 !important;
                  vertical-align: top !important;
                }

                .before-after-slider__first-image-container,
                .before-after-slider__second-image-container {
                  height: 100% !important;
                  width: 100% !important;
                  display: block !important;
                  margin: 0 !important;
                  padding: 0 !important;
                }

                .before-after-slider__first-image-container img,
                .before-after-slider__second-image-container img {
                  height: 100% !important;
                  width: 100% !important;
                  object-fit: cover !important;
                  display: block !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  line-height: 0 !important;
                  vertical-align: top !important;
                }

                .before-after-slider__separator {
                  top: 50% !important;
                  transform: translateY(-50%) !important;
                }

                .before-after-slider__separator-button {
                  background-color: var(--accent) !important;
                  border: 2px solid var(--foreground) !important;
                  width: 38px !important;
                  height: 38px !important;
                  top: 50% !important;
                  transform: translate(-50%, -50%) !important;
                }

                .before-after-slider__separator-line {
                  width: 2px !important;
                  background-color: var(--foreground) !important;
                }

                /* ✅ Mobile fix for extra 5px white space */
                @media (max-width: 640px) {
                  .before-after-slider,
                  .before-after-slider__first-image-container,
                  .before-after-slider__second-image-container {
                    height: 250px !important;
                  }
                  .before-after-slider img {
                    height: 250px !important;
                    object-fit: cover !important;
                    display: block !important;
                    margin-bottom: 0 !important;
                    vertical-align: top !important;
                  }

                  /* Remove any inline gaps completely */
                  .before-after-slider * {
                    line-height: 0 !important;
                    font-size: 0 !important;
                  }
                }
              `}</style>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[var(--accent)] w-8"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <p className="text-[var(--foreground)]/60 text-sm font-body">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>

        {/* Description */}
        <div className="text-center mt-10">
          <p className="text-[var(--foreground)]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-[var(--font-body)]">
            While we do the heavy lifting, all you need to do is walk into your
            brand new space.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)] font-body font-medium tracking-wide hover:bg-transparent hover:border-[var(--accent)] border transition-all duration-300">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
}