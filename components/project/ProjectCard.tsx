"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const categories = ["Commercial", "Residential", "Home", "Renovation", "Modular"];

const projects: Project[] = [
  {
    id: 1,
    title: "Office Space – Modern Interior",
    category: "Commercial",
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
  },
  {
    id: 2,
    title: "Showroom – Luxury Furniture",
    category: "Commercial",
    image: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
  },
  {
    id: 3,
    title: "Bedroom Design",
    category: "Home",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
  {
    id: 4,
    title: "Kitchen Modular Setup",
    category: "Modular",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    id: 5,
    title: "Flat Renovation",
    category: "Renovation",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
  },
  {
    id: 6,
    title: "Wardrobe Modern Design",
    category: "Modular",
    image: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
  },
  {
    id: 7,
    title: "Living Room Interior",
    category: "Home",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
  },
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [preview, setPreview] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="min-h-screen px-4 md:px-6 py-20 bg-[#FAF8F6] border-b border-accent">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="inline-block w-12 h-px bg-[#E2C18C] mb-4"></span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#14263E] mb-4 font-semibold">
          Projects
        </h2>
        <p className="text-lg text-[#14263E]/70 max-w-2xl mx-auto">
          Explore our curated collection of exceptional interior design projects
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            className={`px-6 md:px-8 py-2 md:py-3 text-sm tracking-widest uppercase border transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-[#14263E] text-white"
                : "bg-transparent text-[#14263E] hover:bg-[#14263E] hover:text-white"
            } border-[#14263E]`}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 md:px-8 py-2 md:py-3 text-sm tracking-widest uppercase border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#14263E] text-white"
                  : "bg-transparent text-[#14263E] hover:bg-[#14263E] hover:text-white"
              } border-[#14263E]`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((proj) => (
            <div
              key={proj.id}
              className="group cursor-pointer"
              onClick={() => setPreview(proj.image)}
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-white shadow-sm rounded">
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 pointer-events-none bg-[#14263E]/80 transition-opacity duration-500 flex items-center justify-center ${
                      hoveredId === proj.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-white text-sm md:text-base tracking-widest uppercase">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 md:p-6 bg-white border-t border-[#E2C18C]/30">
                  <h3 className="text-lg md:text-xl font-serif text-[#14263E] mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#14263E]/60 uppercase tracking-widest">
                    {proj.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-[#14263E]/70">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filtered.length)} of{" "}
            {filtered.length} projects
          </div>

          <div className="flex items-center gap-2">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`border-[1.5px] border-[#14263E] transition-all ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#14263E] hover:text-white"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 border-[1.5px] border-[#14263E] transition-all ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#14263E] hover:text-white"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {preview && (
        <div className="fixed inset-0 bg-[#14263E]/95 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <button
            className="absolute top-6 right-6 text-white hover:text-[#E2C18C]"
            onClick={() => setPreview(null)}
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-5xl">
            <Image
              src={preview}
              alt="Preview"
              width={1200}
              height={900}
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
