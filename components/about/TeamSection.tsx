"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  education: string;
  image: string;
  email: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Lead Interior Designer",
    education: "M.Des — IIT Kanpur",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "alexandra@interiordesign.com",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Design Strategist",
    education: "M.Arch — Harvard University",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "marcus@interiordesign.com",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Project Manager",
    education: "MBA — Stanford University",
    image:
      "https://images.pexels.com/photos/3775533/pexels-photo-3775533.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "sophia@interiordesign.com",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "James Mitchell",
    role: "Color & Materials Specialist",
    education: "M.Des — IIT Bombay",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "james@interiordesign.com",
    social: { linkedin: "#", instagram: "#" },
  },
];

export default function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}         // ✅ Start hidden and below
      whileInView={{ opacity: 1, y: 0 }}      // ✅ Animate when visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}               // ✅ Animation only once
      className="py-24 px-4 md:px-10 lg:px-16 bg-background border-y border-accent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#E2C18C] text-xl tracking-widest font-medium mb-2">
            OUR TEAM
          </p>
          <h1 className="font-[Playfair_Display] text-4xl font-semibold">
            Meet Our Visionary Members
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center md:items-center"
            >
              <div className="relative w-[220px] h-[350px] overflow-hidden shadow-lg shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="space-y-2 flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl text-foreground">
                  {member.name}
                </h3>

                <p className="text-accent uppercase tracking-wider text-sm">
                  {member.role}
                </p>

                <p className="text-sm tracking-wide text-foreground/70">
                  {member.education}
                </p>

                <div className="flex justify-center md:justify-start gap-4 pt-4">
                  <Link
                    href={member.social.linkedin || "#"}
                    target="_blank"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-accent text-foreground transition-all"
                  >
                    <Linkedin size={18} />
                  </Link>

                  <Link
                    href={member.social.instagram || "#"}
                    target="_blank"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-accent text-foreground transition-all"
                  >
                    <Instagram size={18} />
                  </Link>

                  <Link
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-accent text-foreground transition-all"
                  >
                    <Mail size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
