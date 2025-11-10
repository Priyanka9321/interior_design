"use client";

import React from 'react';

const AboutSection = () => {
  const stats = [
    { value: '10', label: 'years', sublabel: 'experience' },
    { value: '2014', label: 'established', sublabel: 'year' },
    { value: '350,000', label: 'sqft', sublabel: 'under construction' },
    { value: '35', label: 'team', sublabel: 'members' },
    { value: '100', label: 'projects', sublabel: 'completed' }
  ];

  return (
    <section className="min-h-screen bg-[#FAF8F6] text-[#14263E] py-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="mb-8">
          <p className="text-[#E2C18C] text-sm tracking-widest font-medium mb-4">
            ABOUT US
          </p>
          <h1 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            Defining Luxury Through Design Excellence
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20 ">
        {/* Left Column - Story */}
        <div className="space-y-6">
          <p className="font-['Spectral'] text-lg leading-relaxed text-[#14263E]">
            Essajees Atelier is a global interior design company offering end-to-end services in the realm of luxury interiors.
          </p>

          <p className="font-['Spectral'] text-base leading-relaxed text-[#14263E] opacity-85">
            Since our inception in 2014, we have been committed to transforming spaces into extraordinary experiences. Our portfolio spans over 60 meticulously crafted interior design projects, with more than 200,000 sqft of premium commercial and residential spaces currently under development.
          </p>

          <p className="font-['Spectral'] text-base leading-relaxed text-[#14263E] opacity-85">
            Our reach extends across 11 major cities, allowing us to bring bespoke luxury design solutions to clients nationwide and internationally. With a dedicated team of 35+ design professionals, we continue to elevate the standards of contemporary luxury interiors.
          </p>

          <div className="pt-6">
            <button className="px-8 py-3 bg-[#E2C18C] text-[#14263E] font-['Spectral'] font-500 hover:bg-transparent hover:border hover:border-[#E2C18C] transition-all duration-300">
              Explore Our Projects
            </button>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="border border-[#E2C18C] border-opacity-30 p-8 hover:border-opacity-100 transition-all duration-300">
              <div className="mb-3">
                <p className="text-4xl font-['Playfair_Display'] font-700 text-[#E2C18C] mb-2">
                  {stat.value}
                </p>
                <p className="font-['Spectral'] text-sm text-[#14263E] opacity-70 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
              <p className="text-xs text-[#14263E] opacity-60 font-['Spectral']">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
