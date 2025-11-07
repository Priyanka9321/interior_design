"use client";

import React from "react";
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
      className="py-20 px-6 md:px-12 lg:px-20 border-b border-accent"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ✅ 2 Column Layout (Left text + Right Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center mb-6">
              <div className="w-12 h-px bg-accent mr-3" />
              <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
                Learn About Us
              </p>
            </div>
            <h1 className="text-4xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-tight">
              We Are The Best Interior Designing Firm In Your City
            </h1>

            <p
              className="text-lg leading-relaxed opacity-70"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--foreground)",
              }}
            >
              Bringing your vision to life with innovative designs and unmatched
              expertise. We transform spaces into functional art.
            </p>

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

          {/* ✅ Right Side Cards Instead of Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 transition-all duration-300 hover:shadow-lg group cursor-pointer rounded-lg"
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
