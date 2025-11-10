"use client";
import React from "react";
import { FileText, PenTool, Hammer, Handshake } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const OurProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "BRIEFING",
      description:
        "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations. The most important of all steps.",
      icon: FileText,
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "EXECUTION",
      description:
        "Bringing our designs to life by building it from the ground up. As we only take on end-to-end projects, everything from structural design to decor is executed in this phase.",
      icon: Hammer,
    },
    {
      number: "04",
      title: "HANDOVER",
      description:
        "The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.",
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-[var(--background)] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-2">
            Our Process
          </p>

          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            How We Work
          </h2>

          <p className="text-[var(--foreground)]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
            A carefully structured approach to transform your vision into
            reality
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-lg border border-[var(--accent)]/40 p-8 transition-all duration-500 hover:bg-white/20 hover:border-[var(--accent)]/60 flex flex-col"
              >
                {/* ICON – filled normally, outline on hover */}
                <div className="mb-6 p-3 w-fit rounded-full border border-[var(--accent)]/30 group-hover:border-[var(--accent)] transition-all duration-500">
                  <Icon className="w-8 h-8 text-[var(--accent)] transition-all duration-500 group-hover:fill-transparent group-hover:stroke-[var(--accent)]" />
                </div>

                {/* STEP HEADING (instead of number) */}
                <h3 className="text-2xl font-semibold font-heading tracking-wide text-[var(--accent)] mb-3">
                  {step.title}
                </h3>

                {/* Accent Line */}
                <div className="w-12 h-[2px] bg-[var(--accent)] mb-6 transition-all duration-500 group-hover:w-16"></div>

                {/* Description */}
                <p className="text-base opacity-80 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line between cards */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 w-10 h-[2px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
