"use client";

import { useRef } from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrincipalDesigner() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-20 border-t border-accent"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image with smooth hover effect */}
        <div className="relative h-[450px] md:h-[600px] overflow-hidden rounded-xl shadow-lg group">
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
            <Image
              src="https://images.pexels.com/photos/3817583/pexels-photo-3817583.jpeg"
              alt="Sarah Sham - Principal Designer"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Section Label */}
          <span className="text-accent font-body text-sm tracking-widest uppercase">
            About the Visionary
          </span>

          {/* Heading + Social Links */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
                Sarah Sham
              </h2>
              <p className="text-lg text-foreground/70 font-body">
                Principal Designer
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:info@essajeesatelier.com"
                aria-label="Email"
                className="hover:text-accent transition-colors"
              >
                <Mail size={22} />
              </Link>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 md:space-y-6 text-foreground/80 font-body leading-relaxed">
            <p>
              Sarah founded Essajees Atelier in 2014 as an extension of her
              family’s 130-year-old antique and furniture dealership in Mumbai’s
              heritage district of Colaba. Her vision brings this legacy into
              the 21st century, marrying function with beauty.
            </p>
            <p>
              Over the past 11 years, Essajees Atelier has executed more than
              130 projects across 18 cities, covering 450,000+ sq. ft., with a
              team of 55 design experts and a following of 670,000+ on
              Instagram.
            </p>
            <p>
              In 2020, she built an online community connecting over 12,000
              interior designers across India, fostering collaboration and
              knowledge sharing.
            </p>
            <p>
              In 2024, Sarah expanded internationally with ‘Jea’ — a premium
              design consultancy in Dubai — under Essajees Atelier in
              partnership with Abra.
            </p>
          </div>

          {/* Achievements */}
          <div className="pt-4 border-t border-accent/60">
            <p className="text-sm text-accent font-body uppercase tracking-widest mb-2">
              Recognitions & Achievements
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Sarah holds degrees from Duke, Oxford, and NYU Stern, and is
              featured in Forbes India’s 30-Under-45, Top 50 Women in Luxury,
              and Top 10 Women Entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
