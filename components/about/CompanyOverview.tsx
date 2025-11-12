"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "10", label: "years", sublabel: "experience" },
    { value: "2014", label: "established", sublabel: "year" },
    { value: "35", label: "team", sublabel: "members" },
    { value: "100", label: "projects", sublabel: "completed" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const statFromRight = {
    hidden: { opacity: 0, x: 80 }, // comes from right
    show: { opacity: 1, x: 0 },
  };

  const staggerParent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#FAF8F6] text-[#14263E] py-12 px-6 md:px-12">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-[#E2C18C] text-sm tracking-widest font-medium mb-4">
          ABOUT US
        </p>

        <h1 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
          Defining Luxury Through Design Excellence
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-['Spectral'] text-lg leading-relaxed text-[#14263E]">
            Essajees Atelier is a global interior design company offering
            end-to-end services in the realm of luxury interiors.
          </p>

          <p className="font-['Spectral'] text-base leading-relaxed text-[#14263E] opacity-85">
            Since our inception in 2014, we have been committed to transforming
            spaces into extraordinary experiences. Our portfolio spans over 60
            meticulously crafted interior design projects, with more than
            200,000 sqft under development.
          </p>

          <p className="font-['Spectral'] text-base leading-relaxed text-[#14263E] opacity-85">
            Our reach extends across 11 major cities, allowing us to bring
            bespoke luxury design solutions to clients nationwide and
            internationally.
          </p>

          <motion.div
            className="pt-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="px-8 py-3 bg-[#E2C18C] text-[#14263E] font-['Spectral'] font-500 hover:bg-transparent hover:border hover:border-[#E2C18C] transition-all duration-300">
              Explore Our Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Right Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="border border-[#E2C18C] border-opacity-30 p-8 rounded-md"
              variants={statFromRight}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3">
                <p className="text-4xl font-['Playfair_Display'] font-700 text-[#E2C18C] mb-2">
                  {stat.value}
                </p>
                <p className="font-['Spectral'] text-sm text-[#14263E] opacity-70 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
              <p className="text-xs text-[#14263E] opacity-60 font-['Spectral']">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
