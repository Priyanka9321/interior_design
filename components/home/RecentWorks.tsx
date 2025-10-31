'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Residence",
    category: "Residential",
    description: "A serene downtown penthouse featuring clean lines and neutral palettes with bespoke furniture curation.",
    imageUrl: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2023
  },
  {
    id: 2,
    title: "Luxury Boutique Hotel Lobby",
    category: "Commercial",
    description: "An elegant five-star hotel entrance showcasing marble elegance and contemporary art installations.",
    imageUrl: "https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2023
  },
  {
    id: 3,
    title: "Executive Office Suite",
    category: "Commercial",
    description: "Corporate workspace designed for sophisticated professionals with ergonomic luxury and timeless aesthetics.",
    imageUrl: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2024
  },
  {
    id: 4,
    title: "Coastal Villa Renovation",
    category: "Residential",
    description: "Breathtaking oceanfront residence reimagined with modern coastal elegance and sustainable materials.",
    imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2024
  },
  {
    id: 5,
    title: "Fine Dining Restaurant",
    category: "Commercial",
    description: "Intimate dining establishment with curated ambiance blending artisanal craftsmanship and fine aesthetics.",
    imageUrl: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2024
  },
  {
    id: 6,
    title: "Art Deco Apartment",
    category: "Residential",
    description: "Classic art deco revival apartment featuring geometric patterns and vintage-modern fusion design.",
    imageUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
    year: 2023
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-background py-24 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
         <h2 className="text-4xl font-[var(--font-heading)] font-semibold mb-4 text-[var(--foreground)]">
          Our Projects
        </h2>
        <p className="text-[var(--foreground)]/70 text-base sm:text-lg max-w-3xl leading-relaxed font-[var(--font-body)]">
          Discover our portfolio of curated interior design projects that blend timeless elegance with contemporary sophistication.
        </p>
      </div>

      {/* Filter Categories */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-foreground'
                  : 'bg-transparent text-foreground border border-accent hover:bg-accent hover:text-foreground'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 aspect-square mb-6">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-foreground transition-opacity duration-500 ${
                    hoveredId === project.id ? 'opacity-10' : 'opacity-0'
                  }`}
                />

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 text-sm">
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 
                    className="text-2xl text-foreground group-hover:text-accent transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p 
                  className="text-sm text-accent uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {project.category}
                </p>

                <p 
                  className="text-foreground opacity-70 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {project.description}
                </p>

                {/* View Details Link */}
                <a 
                  href={`/projects/${project.id}`}
                  className="inline-block text-foreground opacity-60 hover:opacity-100 group-hover:text-accent transition-all duration-300 mt-4"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
