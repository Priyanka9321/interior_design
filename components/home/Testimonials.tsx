"use client";

import React, { useState } from "react";
import { Play, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  videoId: string;
  thumbnail: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rajesh Mehta",
    role: "Homeowners",
    location: "Mumbai",
    text: "The transformation of our penthouse exceeded every expectation. Every corner tells a story.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    rating: 5,
    project: "Luxury Penthouse Redesign",
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    role: "CEO, Tech Innovations",
    location: "Bangalore",
    text: "They understood our vision for a modern workspace that inspires creativity.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    rating: 5,
    project: "Corporate Office Transformation",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Hotel Owner",
    location: "Jaipur",
    text: "Heritage design + modern luxury — guests can't stop appreciating it.",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    rating: 5,
    project: "Heritage Hotel Restoration",
  },
];

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setActiveVideo(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setActiveVideo(null);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[var(--background)] py-24 px-6 relative overflow-hidden border-b border-accent">
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-2">
            Testimonials
          </p>

          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold">
            Client Experiences
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ✅ VIDEO BLOCK */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 120 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video max-w-[85%] mx-auto overflow-hidden"
            >
              {activeVideo === currentTestimonial.id ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentTestimonial.videoId}?autoplay=1`}
                  title="Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setActiveVideo(currentTestimonial.id)}
                  className="relative w-full h-full"
                >
                  <img
                    src={currentTestimonial.thumbnail}
                    alt={currentTestimonial.project}
                    className="w-full h-full object-cover"
                  />

                  {/* Just play icon, no bg overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                      <Play className="w-7 h-7 text-black" fill="currentColor" />
                    </div>
                  </div>
                </button>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ✅ TEXT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentTestimonial.id}`}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <Quote className="w-12 h-12 text-[var(--accent)]/30" />

              <blockquote className="font-[Playfair_Display] text-xl sm:text-2xl md:text-3xl italic leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-heading">{currentTestimonial.name}</h4>
                <p className="text-[var(--foreground)]/70 font-[var(--font-body)] text-sm tracking-wide">
                  {currentTestimonial.role} • {currentTestimonial.location}
                </p>
              </div>

              {/* Outline Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 border border-[var(--accent)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white rounded-none"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 border border-[var(--accent)] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white rounded-none"
                >
                  <ChevronRight />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
