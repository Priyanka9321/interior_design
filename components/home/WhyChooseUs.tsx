"use client";

import { motion, Variants } from "framer-motion";
import {
  DollarSign,
  Clock,
  Cpu,
  BadgeCheck,
  Briefcase,
  Repeat,
  Users,
} from "lucide-react";

interface ItemType {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const items: ItemType[] = [
  {
    icon: DollarSign,
    title: "COST & TIME",
    desc: "35-40% More Economical Than In-house Production",
  },
  {
    icon: Clock,
    title: "FLEXIBILITY",
    desc: "35 Architects, Engineers & Designers",
  },
  {
    icon: Cpu,
    title: "PURPOSE-BUILT FACILITY",
    desc: "Dedicated design and production setup.",
  },
  {
    icon: BadgeCheck,
    title: "GLOBAL QUALITY",
    desc: "International quality compliance & precision output.",
  },
  {
    icon: Briefcase,
    title: "EXPERIENCE",
    desc: "Over 35 Large Scale Projects Delivered",
  },
  {
    icon: Users,
    title: "PROCESS EXCELLENCE",
    desc: "Unmatched Business Value",
  },
  {
    icon: Repeat,
    title: "REPEAT CLIENTELE",
    desc: "Near-100% Client Retention Rate Since Inception",
  },
];

// ⭐ Scroll-trigger animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }, // smooth animation
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      {/* TITLE - scroll trigger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        className="text-center mb-20"
      >
        <motion.h2 variants={cardVariants} className="text-4xl font-heading font-bold">
          Why <span className="text-accent">Naval Srijan?</span>
        </motion.h2>
      </motion.div>

      {/* GRID ITEMS - scroll trigger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}  
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16"
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={cardVariants} className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{
                scale: 1.12,
                boxShadow: "0px 0px 25px var(--accent)",
              }}
              transition={{ duration: 0.3 }}
              className="w-28 h-28 rounded-full border-4 border-accent flex items-center justify-center"
            >
              <item.icon size={48} className="text-accent" />
            </motion.div>

            <h3 className="mt-6 text-xl font-heading text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground/70 max-w-[220px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
