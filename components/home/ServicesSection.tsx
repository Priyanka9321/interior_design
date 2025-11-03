"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  image: string;
}

const services: Service[] = [
  {
    id: "bathroom",
    title: "Bathroom Design",
    description:
      "Sophisticated bathroom spaces that blend luxury with functionality, creating spa-like sanctuaries.",
    features: ["Premium fixtures", "Marble elegance", "Mood lighting", "Smart storage"],
    color: "bg-[#E8DCC8]",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
  },
  {
    id: "bedroom",
    title: "Bedroom Design",
    description:
      "Serene retreats crafted to perfection, where comfort meets contemporary elegance.",
    features: ["Luxe bedding", "Ambient lighting", "Custom cabinetry", "Accent walls"],
    color: "bg-[#F0E6D8]",
    image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
  },
  {
    id: "kitchen",
    title: "Kitchen Design",
    description:
      "State-of-the-art culinary spaces designed for the modern lifestyle and entertaining.",
    features: ["High-end appliances", "Designer finishes", "Workflow efficiency", "Island concepts"],
    color: "bg-[#DCC9B3]",
    image: "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg",
  },
  {
    id: "living",
    title: "Living Room Design",
    description:
      "Inviting social spaces that showcase your style while maximizing comfort and conversation.",
    features: ["Statement pieces", "Layered lighting", "Color coordination", "Flow optimization"],
    color: "bg-[#E2C18C]",
    image: "https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("bathroom");
  const activeService = services.find((s) => s.id === activeTab)!;

  return (
    <div className="bg-[#FAF8F6] text-[#14263E] font-[Spectral] min-h-screen py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
      
        <h1 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
          Our Awesome Services
        </h1>
       <p className="text-[var(--foreground)]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
          Explore design philosophies crafted to elevate your spaces with comfort, style, and
          modern luxury.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center flex-wrap gap-6 border-b border-[#E2C18C]/40 pb-6 mb-10">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`relative pb-2 text-sm uppercase tracking-wide font-medium transition-all duration-300 
              ${
                activeTab === service.id
                  ? "text-[#E2C18C]"
                  : "text-[#14263E] opacity-70 hover:opacity-100"
              }`}
          >
            {service.title}
            {activeTab === service.id && (
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#E2C18C] animate-slideIn"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="grid md:grid-cols-2 gap-10 items-center transition-all duration-700"
        key={activeService.id}
      >
        {/* Left Side - Image (Sharp Corners) */}
        <div className="relative h-[400px] w-full shadow-xl overflow-hidden rounded-none">
          <Image
            src={activeService.image}
            alt={activeService.title}
            fill
            className="object-cover rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00000020] to-[#00000010]"></div>
        </div>

        {/* Right Side - Description & Features */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-[Playfair_Display] text-3xl font-semibold mb-2">
              {activeService.title}
            </h2>
            <div className="w-14 h-[3px] bg-[#E2C18C] mb-4"></div>
            <p className="text-base opacity-80 leading-relaxed">
              {activeService.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-[Playfair_Display] text-lg font-semibold mb-3">
              Signature Elements
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {activeService.features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-2 border border-[#E2C18C] px-4 py-2 cursor-pointer transition-all hover:bg-[#E2C18C]/20"
                >
                  <span className="text-[#E2C18C] text-lg font-bold group-hover:translate-x-1 transition-transform">
                    +
                  </span>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#E2C18C] text-[#14263E] font-semibold py-3 px-6 w-fit mt-2 flex items-center gap-2 hover:bg-[#14263E] hover:text-[#E2C18C] transition-all">
            Start Your Journey <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
