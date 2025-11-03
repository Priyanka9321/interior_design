'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
      title: 'Minimalist Penthouse',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Contemporary luxury living space with refined aesthetics',
    },
    {
      id: 2,
      title: 'Executive Boardroom',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Sophisticated corporate environment blending comfort and prestige',
    },
    {
      id: 3,
      title: 'Boutique Wellness Spa',
      category: 'Hospitality',
      image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Serene sanctuary designed for ultimate relaxation and luxury',
    },
  ]);

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-4">
            Our Creations
          </p>
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            Featured Projects
          </h2>
          <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl leading-relaxed font-[var(--font-body)]">
            Each project that we undertake has a story to tell. One that is
            actualised by our expertise, aesthetics, and attention to detail.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6 h-80 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
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
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center pt-8">
          <button className="group flex items-center gap-3 px-8 py-3 bg-[var(--accent)] text-[var(--foreground)] font-body font-medium tracking-wide hover:bg-transparent hover:border-[var(--accent)] border border-transparent transition-all duration-300">
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 pt-12 border-t border-[var(--accent)] border-opacity-20">
          <p className="font-body text-[var(--foreground)] opacity-70 max-w-3xl">
            While each project has the inimitable EA signature, they are all
            distinctive in their inception, design, and execution, all bearing a
            version of luxury that unique to that space.
          </p>
        </div>
      </div>
    </section>
  );
}
