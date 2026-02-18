"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  id: number;
  image: string;
  location: string;
  title: string;
}

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Mumbai, Maharashtra",
    title: "The White House",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Kolkata, West Bengal",
    title: "Luxe in the City",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Delhi, NCR",
    title: "The Dark Dining",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Bangalore, Karnataka",
    title: "Clean Canvas",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Hyderabad, Telangana",
    title: "Spa Serenity",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2",
    location: "Pune, Maharashtra",
    title: "Warm Embrace",
  },
];

// Individual project card — clip-path scroll reveal + parallax drift
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Tracks full card scroll for parallax drift
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Tracks image entering viewport for the reveal clip — triggers quickly
  const { scrollYProgress: revealProgress } = useScroll({
    target: imageRef,
    offset: ["start 95%", "start 30%"],
  });

  // Parallax: image starts centered, travels strongly up and down
  // Large range means even small scroll moves the image noticeably
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  // Clip-path: wipes from bottom → image uncovers top to bottom on scroll
  const clipPath = useTransform(
    revealProgress,
    [0, 1],
    ["inset(0% 0% 100% 0% round 6px)", "inset(0% 0% 0% 0% round 6px)"]
  );

  return (
    <div ref={cardRef} className="group">
      {/* REVEAL TRIGGER */}
      <div ref={imageRef}>
        {/* CLIP-PATH REVEAL CONTAINER */}
        <motion.div
          style={{
            clipPath,
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderRadius: "6px",
            aspectRatio: "5 / 4",
          }}
        >
          {/* PARALLAX INNER — 150% tall, centered (-25% top), drifts ±12% */}
          <motion.div
            style={{
              y,
              position: "absolute",
              top: "-25%",
              left: 0,
              right: 0,
              height: "150%",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </motion.div>

          {/* Hover tint */}
          <div
            className="absolute inset-0 z-10 transition-all duration-500"
            style={{ background: "rgba(0,0,0,0)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "rgba(0,0,0,0.06)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "rgba(0,0,0,0)")
            }
          />
        </motion.div>
      </div>

      {/* TEXT — fades in after image reveals */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.25 + (index % 2) * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="pt-6"
      >
        <p className="text-[var(--foreground)]/60 text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[var(--font-body)]">
          {project.location}
        </p>
        <h3 className="font-[Playfair_Display] text-[1.75rem] md:text-[2.1rem] leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-6">
          {project.title}
        </h3>
        <div className="w-full h-px bg-[var(--foreground)]/15" />
      </motion.div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-[var(--background)] border-b border-accent">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
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
            Each project that we undertake has a story to tell. One that is
            actualised by our expertise, aesthetics, and attention to detail.
          </p>
        </motion.div>
      </div>

      {/* 2-COLUMN GRID */}
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-44">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center pt-16">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)] font-[var(--font-body)] font-medium tracking-wide hover:bg-transparent hover:border-[var(--accent)] border border-transparent transition-all duration-300"
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

/*
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// COMMENTED OUT - Old project interface with categories and descriptions
// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   description: string;
// }

// New simplified project interface - just image URLs
interface Project {
  id: number;
  image: string;
}

export default function FeaturedProjects() {

  // COMMENTED OUT - Old projects with detailed info
  // const [projects] = useState<Project[]>([ ... ]);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    },
  ]);

  return (
    <section className="py-20 bg-[var(--background)] border-b border-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div className="mb-16">
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
            Each project that we undertake has a story to tell.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/projects">
            <button className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)]">
              See All Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
*/