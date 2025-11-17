"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Building2, PenTool, Home } from "lucide-react";

// Services Data
const services = [
  {
    title: "Construction",
    description:
      "We deliver top-quality construction services, ensuring durability, precision, and timely project completion. Our expertise transforms your vision into reality with impeccable craftsmanship.",
    icon: Building2,
  },
  {
    title: "Interior",
    description:
      "We specialize in crafting elegant and functional interiors, blending creativity and practicality to enhance your living and working spaces with stunning designs.",
    icon: Home,
  },
  {
    title: "Architecture",
    description:
      "Our architectural designs combine functionality and aesthetics, creating innovative and sustainable spaces that reflect your unique style and needs.",
    icon: PenTool,
  },
];

// Smooth variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }, // <-- string easing (TypeScript-friendly)
  },
};
export default function WhatWeOffer() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={headerVariants}
          className="mb-16 md:mb-20"
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
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="group relative overflow-hidden">
                  <div className="relative p-8 md:p-10 bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-accent/20">
                    <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-12 h-12 text-accent" />
                    </div>

                    <h3 className="text-2xl md:text-2xl font-heading font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>

                    <div className="w-12 h-1 bg-accent mb-6 transition-all duration-500 group-hover:w-20" />

                    <p className="text-foreground/70 leading-relaxed text-base md:text-lg font-body line-clamp-4 transition-all duration-300 group-hover:line-clamp-none">
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center text-accent font-semibold text-sm tracking-wider group/link transition-all duration-300"
                    >
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
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
