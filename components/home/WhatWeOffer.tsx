"use client";

import { useEffect, useState } from "react";
import { Building2, PenTool, Home } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Construction",
    description:
      "We deliver top-quality construction services, ensuring durability, precision, and timely project completion. Our expertise transforms your vision into reality with impeccable craftsmanship.",
    icon: Building2,
  },
  {
    title: "Architecture",
    description:
      "Our architectural designs combine functionality and aesthetics, creating innovative and sustainable spaces that reflect your unique style and needs.",
    icon: PenTool,
  },
  {
    title: "Interior",
    description:
      "We specialize in crafting elegant and functional interiors, blending creativity and practicality to enhance your living and working spaces with stunning designs.",
    icon: Home,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden">
      {/* Background Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-transparent transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0" />

      {/* Card Body */}
      <div className="relative p-8 md:p-10 bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-accent/20">
        
        {/* Icon */}
        <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
          <Icon className="w-12 h-12 text-accent" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-2xl font-heading font-semibold text-foreground mb-4">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-accent mb-6 transition-all duration-500 group-hover:w-20" />

        {/* Description */}
        <p className="text-foreground/70 leading-relaxed text-base md:text-lg font-body line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {service.description}
        </p>

        {/* Read More Link */}
        <div className="mt-6 inline-flex items-center text-accent font-semibold text-sm tracking-wider cursor-pointer group/link transition-all duration-300">
          <span>DISCOVER MORE</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
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
        </div>
      </div>
    </div>
  );
};

export default function WhatWeOffer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-12 h-px bg-accent mr-3" />
            <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
              Our Premium Services
            </p>
          </div>

          <h2 className="text-4xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-tight">
            What We Offer To Our Clients
          </h2>

          <p className="text-foreground text-lg font-body opacity-70 leading-relaxed">
            We are extremely passionate about eco-friendly systems and
            sustainable design. <br />
            Every project reflects our commitment to creating beautiful,
            responsible spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
