"use client";

import React from "react";
import { Sparkles, Award, Clock, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Classic Elegance",
      description: "Timeless designs that define sophistication and charm in every detail.",
    },
    {
      icon: Award,
      title: "Superior Craftsmanship",
      description: "Expert artistry and precision in every project for lasting beauty.",
    },
    {
      icon: Clock,
      title: "Enduring Appeal",
      description: "Designs that age gracefully, staying elegant through time.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Personalized guidance to bring your design vision to life.",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[var(--background)] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-[var(--font-heading)] font-semibold mb-4 text-[var(--foreground)]">
            Why Choose Us?
          </h2>
          <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
            Discover what sets us apart — where artistry, passion, and precision meet to craft
            extraordinary interiors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 p-5 rounded-full border border-[var(--accent)]/50 bg-[var(--background)] group-hover:bg-[var(--accent)]/10 transition-all duration-300">
                  <IconComponent
                    size={48}
                    className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--foreground)]/70 max-w-[250px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
