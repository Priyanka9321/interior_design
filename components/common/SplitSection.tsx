"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

export default function SplitSection({
  title,
  description,
  imageUrl,
  reverse = false,
}: Props) {
  return (
    <section
      className={`relative left-0 top-0 -mx-[calc((100vw-100%)/2)] w-screen 
      min-h-[80vh] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } overflow-hidden`}
    >
      {/* ✅ Content Block Animation */}
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        viewport={{ amount: 0.3 }} // 🎯 triggers every scroll
        className="md:w-1/2 w-full flex items-center justify-center p-8 relative z-10 text-center"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="max-w-xl">
          <h2
            className="relative inline-block text-3xl md:text-4xl font-medium mb-8"
            style={{ color: "var(--foreground)" }}
          >
            {title}
            {/* ✅ Accent underline */}
            <span
              className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-16 h-[2px] rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </h2>

          <p
            className="text-base md:text-lg leading-relaxed opacity-70"
            style={{ color: "var(--foreground)" }}
          >
            {description}
          </p>
        </div>
      </motion.div>

      {/* ✅ Image Smooth Zoom inside container */}
      <div className="md:w-1/2 w-full relative h-[55vh] md:h-auto overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          viewport={{ amount: 0.3 }} // ✅ Animation triggers again on scroll
          className="h-full w-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
