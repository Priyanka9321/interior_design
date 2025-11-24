"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ItemType {
  icon: string; // ⬅ changed to string
  title: string;
  desc: string;
}

const items: ItemType[] = [
  {
    icon: "/images/home/icons/cost&time.svg",
    title: "COST & TIME",
    desc: "35-40% More Economical Than In-house Production",
  },
  {
    icon: "/images/home/icons/flexibility.svg",
    title: "FLEXIBILITY",
    desc: "35 Architects, Engineers & Designers",
  },
  {
    icon: "/images/home/icons/infrastructure.svg",
    title: "PURPOSE-BUILT FACILITY",
    desc: "Dedicated design and production setup.",
  },
  {
    icon: "/images/home/icons/standards.svg",
    title: "GLOBAL QUALITY",
    desc: "International quality compliance & precision output.",
  },
  {
    icon: "/images/home/icons/expert.svg",
    title: "EXPERIENCE",
    desc: "Over 35 Large Scale Projects Delivered",
  },
  {
    icon: "/images/home/icons/efficacy.svg",
    title: "PROCESS EXCELLENCE",
    desc: "Unmatched Business Value",
  },
  {
    icon: "/images/home/icons/employee.svg",
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
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      {/* TITLE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-20"
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl font-heading font-bold"
        >
          Why <span className="text-accent">Naval Srijan?</span>
        </motion.h2>
      </motion.div>

      {/* GRID ITEMS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
      max-w-6xl 
      mx-auto 
      flex 
      flex-wrap
      justify-center 
      gap-10
  "
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px var(--accent)",
              }}
              transition={{ duration: 0.3 }}
              className="
          w-32 h-32             
          rounded-full 
          border-4 border-accent 
          flex items-center justify-center
        "
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={85} // ⬅ icon thoda bada
                height={85}
                className="text-accent"
              />
            </motion.div>

            <h3 className="mt-5 text-lg font-heading text-foreground font-semibold">
              {item.title}
            </h3>

            <p className="mt-1.5 text-sm text-foreground/70 max-w-[220px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
