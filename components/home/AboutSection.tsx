"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PenTool, Building2, Store, Home } from "lucide-react";

const AboutUsSection = () => {
  const services = [
    {
      title: "Project Planning",
      description: "Strategic planning for every design project",
      icon: PenTool,
    },
    {
      title: "Exterior & Interior",
      description: "Complete design solutions for all spaces",
      icon: Building2,
    },
    {
      title: "Residential Design",
      description: "Beautiful homes designed for modern living",
      icon: Home,
    },
    {
      title: "Commercial Design",
      description: "Professional spaces tailored to your business",
      icon: Store,
    },
  ];

  // FIXED VARIANTS
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-accent bg-background">
      <div className="max-w-6xl mx-auto">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}  
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Section */}
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center mb-6">
              <div className="w-12 h-px bg-accent mr-3" />
              <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
                Learn About Us
              </p>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl font-heading font-semibold text-foreground leading-tight">
              Spaces That Reflect You
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg opacity-80 font-body text-foreground">
              Naval Srijan is a multidisciplinary design firm offering integrated solutions in architecture, interiors, construction, and turnkey projects. With a focus on refined aesthetics, technical excellence, and seamless execution, we create spaces that are functional, timeless, and deeply personal — from concept to completion.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/about">
                <button className="px-8 py-3 bg-accent text-foreground border border-accent 
                font-medium font-body transition-all duration-300 hover:shadow-lg hover:bg-accent/90">
                  Know More
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Cards */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardAnimation}
                  className="p-6 rounded-lg bg-accent/10 transition-all duration-300 hover:shadow-xl group cursor-pointer hover:-translate-y-1"
                >
                  <Icon className="w-10 h-10 mb-4 stroke-accent transition-all duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-medium font-heading mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-75 font-body text-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
