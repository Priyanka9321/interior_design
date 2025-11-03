"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-[var(--background)] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout: Image Left, Content Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image */}
          <div className="relative group overflow-hidden rounded-lg h-96 md:h-full min-h-[500px]">
            <Image
              src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2"
              alt="Minimalist Interior Design"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-transparent to-transparent opacity-20"></div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Section Label (similar to FeaturedProjects “Our Creations”) */}
            <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-2">
              About Us
            </p>

            {/* Main Heading (matching FeaturedProjects heading style) */}
            <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
              Naval Shrijan
            </h2>

            <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl leading-relaxed font-[var(--font-body)]">
              Luxury Interior Design
            </p>

            {/* About Description */}
            <div className="space-y-6">
              <p className="text-[var(--foreground)]/80 font-body leading-relaxed text-base sm:text-lg">
                Naval Shrijan is a global design company offering end-to-end
                services in the realm of luxury interiors. We pride ourselves on
                our unmatched aesthetic and attention to detail, which we bring
                in at every stage – from planning to handovers.
              </p>

              <p className="text-[var(--foreground)]/80 font-body leading-relaxed text-base sm:text-lg">
                We take on a select number of clients; we see ourselves as your
                partners right from the beginning and craft all our projects
                from scratch. Every space is a masterpiece, every detail
                intentional, and every vision realized with precision.
              </p>
            </div>

            
            {/* Know More Button (same hover and typography as “See All Projects”) */}
            <div>
              <button className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)] font-body font-medium tracking-wide hover:bg-transparent hover:border-[var(--accent)] border border-transparent transition-all duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
