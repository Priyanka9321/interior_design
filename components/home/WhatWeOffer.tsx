"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Services Data with images
const services = [
  {
    title: "Construction",
    description:
      "We deliver reliable and detail-driven construction services, ensuring durability, technical precision, and seamless project execution from foundation to finish.",
    image: "https://images.pexels.com/photos/8961025/pexels-photo-8961025.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "01",
  },
  {
    title: "Interior",
    description:
      "We create interiors that blend elegance with intelligent functionality tailoring layouts, materials and design details to enhance the way you live and experience your space. Every element is curated with purpose, comfort and timeless aesthetics in mind.",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "02",
  },
  {
    title: "Architecture",
    description:
      "Our architectural solutions balance form, function and clarity—uniting thoughtful planning, refined aesthetics and practical efficiency. We craft spaces that are structurally sound, visually harmonious and uniquely aligned with your lifestyle, while maximising every square foot with purpose.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "03",
  },
];

export default function WhatWeOfferStylish() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-[#C4A574]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 border border-[#C4A574]/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#C4A574]" />
            <p className="text-[#C4A574] font-semibold text-xs md:text-sm tracking-[0.3em] uppercase">
              Our Premium Services
            </p>
            <div className="w-2 h-2 rounded-full bg-[#C4A574]" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
            Why Naval Design{" "}
            <span className="text-[#C4A574]">Process</span>
          </h2>

          <p className="text-[#1a1a1a]/60 text-lg md:text-xl font-body leading-relaxed max-w-3xl mx-auto">
            We offer personalized, design-driven solutions that blend aesthetics, functionality and precision,
            ensuring every space is crafted with care and delivered with excellence.
          </p>
        </motion.div>

        {/* Services Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group flex"
            >
              <div className="relative w-full flex flex-col bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-[#C4A574]/10 hover:border-[#C4A574]/40">
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-transparent border-r-[#C4A574]/10 group-hover:border-r-[#C4A574]/30 transition-all duration-500" />
                </div>

                {/* Number Badge - Rounded */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  className="absolute top-6 left-6 z-20 w-12 h-12 bg-[#C4A574] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <span className="text-white font-bold text-lg">{service.number}</span>
                </motion.div>

                {/* Image container with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/20 to-transparent" />
                  
                  {/* Animated shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: hoveredIndex === index ? "100%" : "-100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Content - Flex grow to push button to bottom */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-[#1a1a1a] mb-3 group-hover:text-[#C4A574] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Decorative line with animation */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#C4A574] to-[#C4A574]/40 mb-4"
                    initial={{ width: "2rem" }}
                    whileInView={{ width: "3rem" }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  />

                  {/* Description - Fixed height for alignment */}
                  <p className="text-[#1a1a1a]/70 leading-relaxed text-sm font-body mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA Link - Aligned at bottom */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-[#1a1a1a] font-semibold text-sm tracking-wider group/link relative mt-auto w-fit"
                  >
                    <span className="relative z-10">DISCOVER MORE</span>
                    <motion.svg
                      className="w-5 h-5 ml-2 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#C4A574]"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === index ? "calc(100% - 1.75rem)" : 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </div>

                {/* Hover border glow effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#C4A574] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(196, 165, 116, 0.2)"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-10 py-4 bg-[#C4A574] text-white font-semibold tracking-wider hover:bg-[#B39564] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-sm group/cta relative overflow-hidden"
          >
            <span className="relative z-10">VIEW ALL SERVICES</span>
            <svg
              className="w-5 h-5 ml-3 relative z-10 group-hover/cta:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </motion.div>

        {/* Golden Thread Line Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4A574] to-transparent mt-16 md:mt-20" />
      </div>
    </section>
  );
}