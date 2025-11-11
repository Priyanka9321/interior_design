"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  Cpu,
  BadgeCheck,
  Briefcase,
  Repeat,
  Users,
} from "lucide-react";

const items = [
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

  // ✅ UPDATED POINT 1
  {
    icon: Cpu,
    title: "PURPOSE-BUILT FACILITY",
    desc: "Dedicated design and production setup.",
  },

  // ✅ UPDATED POINT 2
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

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-heading font-bold tracking-wide"
        >
          Why <span className="text-accent">Naval Srijan?</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="
                w-28 h-28
                rounded-full 
                border-4 border-accent
                flex items-center justify-center
                hover:scale-110 
                hover:shadow-[0_0_25px_var(--accent)]
                transition-all duration-300
              "
            >
              <item.icon size={48} className="text-accent" />
            </div>

            <h3 className="mt-6 text-xl font-heading text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70 font-body max-w-[220px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
