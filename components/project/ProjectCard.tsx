"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Grid3X3, List } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: number;
  description: string;
  location: string;
  featured?: boolean;
}

const ProjectOverview = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Modern Luxury Penthouse",
      category: "Residential",
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
      year: 2024,
      description: "Luxury penthouse with a minimalist modern interior.",
      location: "Manhattan, NYC",
      featured: true,
    },
    {
      id: "2",
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      year: 2024,
      description: "Warm contemporary hotel lobby interior.",
      location: "Miami, Florida",
      featured: true,
    },
    {
      id: "3",
      title: "Coastal Villa Renovation",
      category: "Residential",
      image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
      year: 2023,
      description: "Tranquil beachside coastal villa renovation.",
      location: "Malibu, California",
    },
  ];

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between mb-12">
          <h1 className="text-4xl font-light leading-tight">
            Curated <span className="text-accent font-semibold">Portfolio</span>
          </h1>

          {/* View Toggle Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewType("grid")}
              className={`px-3 py-2 border ${
                viewType === "grid"
                  ? "border-accent text-accent"
                  : "border-foreground/50 hover:border-foreground"
              }`}
            >
              <Grid3X3 size={20} />
            </button>

            <button
              onClick={() => setViewType("list")}
              className={`px-3 py-2 border ${
                viewType === "list"
                  ? "border-accent text-accent"
                  : "border-foreground/50 hover:border-foreground"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm tracking-widest border transition-all ${
                selectedCategory === category
                  ? "bg-accent border-accent text-background"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid View */}
        {viewType === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-4 py-1 text-xs uppercase bg-accent text-foreground tracking-widest">
                      Featured
                    </span>
                  )}
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-xl font-light">{project.title}</h3>
                  <ChevronRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all text-accent"
                  />
                </div>
                <p className="text-sm opacity-70">
                  {project.category} • {project.year}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewType === "list" && (
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex gap-6 items-center border-b border-accent pb-6 cursor-pointer group"
              >
                <div className="relative w-48 h-32 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-light">{project.title}</h3>
                  <p className="text-sm opacity-70 mt-1">
                    {project.category} • {project.year} • {project.location}
                  </p>
                  <p className="opacity-60 mt-2">{project.description}</p>
                </div>

                <ChevronRight
                  size={20}
                  className="text-accent opacity-0 group-hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectOverview;
