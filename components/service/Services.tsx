// ✅ SERVICES PAGE UPDATED WITH CUSTOM BUTTON STYLE
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, Home, Bath, UtensilsCrossed } from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string>("bedroom");

  const services: Service[] = [
    {
      id: "bedroom",
      title: "Bedroom Sanctuaries",
      icon: <Home className="w-8 h-8" />,
      description:
        "Craft your personal haven where luxury meets tranquility...",
      features: [
        "Custom headboard designs",
        "Curated lighting schemes",
        "Luxury bedding coordination",
        "Built-in storage",
        "Walk-in closet design",
      ],
      image:
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: "bathroom",
      title: "Spa-Inspired Bathrooms",
      icon: <Bath className="w-8 h-8" />,
      description:
        "Elevate your daily rituals in a bathroom sanctuary...",
      features: [
        "Premium natural stone",
        "Bespoke vanity designs",
        "Luxury fixture curation",
        "Ambient lighting",
        "Heated flooring",
      ],
      image:
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: "kitchen",
      title: "Gourmet Kitchens",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      description:
        "Where culinary artistry meets design excellence...",
      features: [
        "Custom cabinetry",
        "High-end appliance integration",
        "Luxury countertop selection",
        "Designer backsplash",
        "Strategic lighting",
      ],
      image:
        "https://images.pexels.com/photos/3914752/pexels-photo-3914752.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const activeServiceData = services.find((s) => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-background">

      {/* ✅ HERO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-semibold mb-6 leading-tight">
            Awesome Interior Designing<br />
            <span className="text-accent">Services For Your Home</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
            Transform any space into a welcoming retreat with our personalized and professional interior design services.
          </p>
        </div>
      </section>

      {/* ✅ NAVIGATION BUTTONS (UPDATED STYLE) */}
      <section className="py-12 px-6 border-y border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-3 py-3 px-6 font-heading text-lg transition-all shadow-md
                ${
                  activeService === service.id
                    ? "bg-[#E2C18C] text-[#14263E] shadow-lg"
                    : "border border-foreground/20 hover:bg-[#E2C18C] hover:text-[#14263E]"
                }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>
      </section>

      {/* ✅ ACTIVE SECTION DETAILS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative group w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src={activeServiceData.image}
              alt={activeServiceData.title}
              fill
              className="object-cover rounded-lg transition-transform group-hover:scale-105 duration-700"
            />
          </div>

          <div className="space-y-8">
            <h2 className="flex items-center gap-3 text-4xl md:text-5xl font-heading font-semibold">
              <span className="text-accent">{activeServiceData.icon}</span>
              {activeServiceData.title}
            </h2>

            <p className="text-lg opacity-90 leading-relaxed">{activeServiceData.description}</p>

            <ul className="space-y-3">
              {activeServiceData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* ✅ MAIN ACTION BUTTON UPDATED */}
            <button className="bg-[#E2C18C] text-[#14263E] font-semibold py-4 px-2 w-fit mt-4 flex items-center gap-3 hover:bg-[#14263E] hover:text-[#E2C18C] transition-all shadow-lg">
              Explore {activeServiceData.title}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
