'use client';

import React from 'react';
import Image from 'next/image';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const AboutSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Project Planning',
      description: 'Strategic vision planning tailored to your unique requirements and aesthetic preferences',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg',
    },
    {
      title: 'Exterior & Interior',
      description: 'Comprehensive design solutions for both indoor and outdoor spaces with seamless integration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2.422-3.956a3 3 0 015.156 0L12 11m0 0l2.422-3.956a3 3 0 015.156 0L21 12m-18 0v7a2 2 0 002 2h14a2 2 0 002-2v-7" />
        </svg>
      ),
      image: 'https://images.pexels.com/photos/10658143/pexels-photo-10658143.jpeg',
    },
    {
      title: 'Commercial Design',
      description: 'Professional spaces designed to inspire productivity and impress clients with elegance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: 'https://images.pexels.com/photos/7845311/pexels-photo-7845311.jpeg',
    },
    {
      title: 'Residential Design',
      description: 'Luxurious home environments that reflect your personality and provide ultimate comfort',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-3m2-2l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 3m-2-3v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: 'https://images.pexels.com/photos/4946909/pexels-photo-4946909.jpeg',
    },
  ];

  return (
    <section className="min-h-screen bg-[var(--background)] py-24 px-4 sm:px-8 lg:px-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* ===== Header Section ===== */}
        <div className="text-center mb-20"> 
          <h2 className="text-[var(--accent)] text-4xl font-[var(--font-heading)] font-semibold mb-4">
            Learn About Us
          </h2>

          <p className="text-[var(--foreground)]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[var(--font-body)]">
            Bringing your vision to life with innovative designs and unmatched expertise.
            We transform spaces into timeless art that reflects elegance and comfort.
          </p>
        </div>

        {/* ===== Services Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-[var(--navbar-bg)] border border-[var(--accent)]/30 hover:border-[var(--accent)] transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {/* Image Section */}
              {service.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--accent)] opacity-10"></div>
                </div>
              )}

              {/* Text Section */}
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="text-[var(--accent)] mb-4">{service.icon}</div>

                {/* Title */}
                <h4 className="text-xl font-semibold font-[var(--font-heading)] text-[var(--foreground)] dark:text-[var(--accent)] group-hover:text-[var(--accent)] transition-colors duration-500 mb-2">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[var(--foreground)]/80 dark:text-[var(--accent)]/90 font-[var(--font-body)] leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
