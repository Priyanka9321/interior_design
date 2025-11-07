"use client";

import React from "react";
import Image from "next/image";
import { PenTool, Building2, Store, Home } from "lucide-react";

const AboutUsSection = () => {
  const services = [
    {
      title: "Project Planning",
      description: "Strategic planning for every design project",
      icon: PenTool,
    },
    {
      title: "Exterior & Interior",
      description: "Complete design solutions for all spaces",
      icon: Building2,
    },
    {
      title: "Commercial Design",
      description: "Professional spaces tailored to your business",
      icon: Store,
    },
    {
      title: "Residential Design",
      description: "Beautiful homes designed for modern living",
      icon: Home,
    },
  ];
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Label */}
            <div>
              <p
                className="text-sm font-medium tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Learn About Us
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-4xl lg:text-5xl leading-tight font-semibold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--foreground)",
                letterSpacing: "0.5px",
              }}
            >
              We Are The Best Interior Designing Firm In Your City
            </h1>

            {/* Description */}
            <p
              className="text-lg leading-relaxed opacity-90"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--foreground)",
              }}
            >
              Bringing your vision to life with innovative designs and unmatched
              expertise. We transform spaces into functional art.
            </p>

            {/* CTA Button */}
            <div>
              <button
                className="px-8 py-3 font-medium transition-all duration-300 ease-in-out hover:shadow-lg"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--foreground)",
                  border: "1px solid var(--accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Explore Our Work
              </button>
            </div>
          </div>

          
          <div className="relative h-96 lg:h-[500px] overflow-hidden shadow-xl group aspect-square">
            <Image
              src="https://images.pexels.com/photos/6301172/pexels-photo-6301172.jpeg"
              alt="Luxury Interior"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-center space-y-4 p-8"
                style={{ color: "var(--background)" }}
              >
                <p
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Luxury Interior Design
                </p>

                <div
                  className="text-5xl font-light"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Premium Quality
                </div>

                <p
                  className="text-sm opacity-80"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Transforming spaces with elegance and innovation
                </p>
              </div>
            </div>
          </div>
        </div>

      
        {/* Services Grid */}
        <div className="mt-20 pt-20 border-t border-accent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  style={{ background: "rgba(226, 193, 140, 0.1)" }}
                >
                  <Icon
                    className="w-10 h-10 mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ stroke: "var(--accent)" }}
                  />

                  <h3
                    className="text-lg font-medium mb-3"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--foreground)",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed opacity-75"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--foreground)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
