"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Luxury Home Owner, Manhattan",
    quote:
      "The attention to detail and understanding of our vision was exceptional. Our living space has transformed into a sanctuary of elegance and comfort.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2",
    rating: 5,
  },
  {
    id: 2,
    name: "Victoria Chen",
    role: "Art Collector & Philanthropist",
    quote:
      "They understood the balance between modern aesthetics and timeless luxury. The space now reflects both our personality and refined taste.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2",
    rating: 5,
  },
  {
    id: 3,
    name: "Alexander Laurent",
    role: "Fashion Designer",
    quote:
      "A collaborative journey that resulted in an extraordinary interior. The craftsmanship and vision are unparalleled in the industry.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const testimonial = testimonials[current];

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--accent)] text-4xl font-[var(--font-heading)] font-semibold mb-4">
            Stories of Transformation
          </h2>
        </div>

        {/* Testimonial Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Quote Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-current"
                  style={{ color: "var(--accent)" }}
                />
              ))}
            </div>

            <blockquote className="space-y-6">
              <p
                className="font-body text-lg sm:text-xl md:text-xl leading-relaxed italic"
                style={{ color: "var(--foreground)" }}
              >
                {testimonial.quote}
              </p>

              <div className="pt-6 border-t border-gray-300 border-opacity-30">
                <p
                  className="font-heading text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="font-body text-sm mt-1"
                  style={{ color: "var(--foreground)", opacity: 0.7 }}
                >
                  {testimonial.role}
                </p>
              </div>
            </blockquote>

           
          </div>

          {/* Right: Image & Controls */}
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* High-quality Image */}
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-6">
              <button
                onClick={prev}
                className="p-4 transition-all duration-300 hover:scale-110 shadow-md"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--foreground)",
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="p-4 transition-all duration-300 hover:scale-110 shadow-md"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--foreground)",
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
