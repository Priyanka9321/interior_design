"use client";

import Image from "next/image";
import { Mail, Linkedin, Instagram } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
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
    bio: "With over 12 years of experience, Alexandra specializes in luxury residential and commercial spaces with a focus on sustainable design.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "alexandra@interiordesign.com",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Design Strategist",
    bio: "Marcus brings innovative vision to every project, transforming spaces into curated experiences that reflect client personalities.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "marcus@interiordesign.com",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Project Manager",
    bio: "Sophia ensures seamless execution of every design project, maintaining excellence from concept through completion.",
    image:
      "https://images.pexels.com/photos/3775533/pexels-photo-3775533.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "sophia@interiordesign.com",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "James Mitchell",
    role: "Color & Materials Specialist",
    bio: "James has an eye for the perfect palette and texture combinations that elevate every interior space.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    email: "james@interiordesign.com",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background border-b border-accent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="mb-8">
            <p className="text-[#E2C18C] text-xl tracking-widest font-medium mb-4">
              Team Member
            </p>
            <h1 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
              Meet Our Visionary Designers
            </h1>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6 aspect-square bg-foreground/5 rounded-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4 pb-6">
                    {/* LinkedIn */}
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-foreground border border-accent hover:bg-transparent hover:text-accent transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>

                    {/* Instagram */}
                    <a
                      href={member.social.instagram}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-foreground border border-accent hover:bg-transparent hover:text-accent transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-foreground border border-accent hover:bg-transparent hover:text-accent transition-all"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member Info */}
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm uppercase tracking-wide mb-3 font-body">
                  {member.role}
                </p>
                <p className="font-body text-foreground/65 text-sm leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
