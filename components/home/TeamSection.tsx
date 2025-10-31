'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alexandra Sterling',
    role: 'Lead Designer',
    bio: 'With over 12 years of expertise, Alexandra brings visionary design concepts to life with meticulous attention to detail.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Residential Design'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Senior Architect',
    bio: 'Specializing in sustainable luxury, Marcus seamlessly blends modern aesthetics with timeless elegance.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Commercial Spaces'
  },
  {
    id: 3,
    name: 'Isabella Romano',
    role: 'Design Consultant',
    bio: 'Creative force behind our material curation, Isabella transforms spaces through exceptional styling and color theory.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Styling & Curation'
  },
  {
    id: 4,
    name: 'James Mitchell',
    role: 'Project Manager',
    bio: 'Ensuring flawless execution from concept to completion, James orchestrates every detail with precision.',
    image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Project Coordination'
  }
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-accent font-body text-sm tracking-widest mb-4 uppercase">
          Our Expertise
        </p>
        <h2 className="text-[var(--accent)] text-4xl font-[var(--font-heading)] font-semibold mb-4">
          Meet Our Team
        </h2>
        <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
          Crafted by passionate professionals dedicated to transforming your space into an extraordinary sanctuary of elegance and comfort.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            <div className="relative h-80 md:h-96 mb-6 overflow-hidden bg-gray-100l">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-foreground transition-opacity duration-500 ${
                  hoveredId === member.id ? 'opacity-20' : 'opacity-0'
                }`}
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-medium text-foreground">
                {member.name}
              </h3>
              <p className="text-accent font-body text-sm tracking-wider uppercase font-medium">
                {member.role}
              </p>
              
              {/* Bio */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  hoveredId === member.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                } md:opacity-0 md:max-h-0`}
              >
                <p className="text-foreground text-sm font-body opacity-75 leading-relaxed mb-3">
                  {member.bio}
                </p>
                <p className="text-accent text-xs font-body tracking-wide uppercase">
                  {member.specialty}
                </p>
              </div>

              {/* Divider Line */}
              <div
                className={`h-0.5 transition-all duration-500 ${
                  hoveredId === member.id
                    ? 'w-12 bg-accent'
                    : 'w-0 bg-transparent'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
