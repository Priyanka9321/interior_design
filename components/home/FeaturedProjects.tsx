"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function FeaturedProjects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Minimalist Penthouse",
      category: "Residential",
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      description:
        "Contemporary luxury living space with refined aesthetics",
    },
    {
      id: 2,
      title: "Executive Boardroom",
      category: "Commercial",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      description:
        "Sophisticated corporate environment blending comfort and prestige",
    },
    {
      id: 3,
      title: "Boutique Wellness Spa",
      category: "Hospitality",
      image:
        "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      description:
        "Serene sanctuary designed for ultimate relaxation and luxury",
    },
  ]);

  return (
    <section className="py-20 bg-[var(--background)] border-b border-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}  // ⬅ repeat everytime on scroll
          className="mb-16"
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-12 h-px bg-accent mr-3" />
            <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
              Our Creations
            </p>
          </div>

          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            Featured Projects
          </h2>
          <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl leading-relaxed font-[var(--font-body)]">
            Each project that we undertake has a story to tell. One that is actualised by our expertise, aesthetics, and attention to detail.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.2 }}  // ⬅ repeat animation
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden mb-6 h-80 rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* INFO */}
              <div className="space-y-3">
                <p className="text-[var(--accent)] font-body text-xs uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="font-heading text-2xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-[var(--foreground)] opacity-70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center pt-8">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)] font-body font-medium tracking-wide hover:bg-transparent hover:border-[var(--accent)] border border-transparent transition-all duration-300"
            >
              See All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
