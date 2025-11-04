"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Projects", "Journal", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--navbar-bg)] transition-all duration-500 ${
        scrolled ? "shadow-[0_2px_4px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <nav
        className="
          flex justify-between items-center 
          px-4 sm:px-6 lg:px-18
          py-4
          transition-all duration-300
        "
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/Logo.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative font-body text-[17px] text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="text-[15px] tracking-wide hover:text-[var(--accent)] transition-all duration-300">
            Book a Consultation
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-[var(--foreground)]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--navbar-bg)] shadow-lg absolute top-full left-0 w-full text-center py-6 space-y-4 transition-all duration-500">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block font-body text-lg text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="mt-3 text-[15px] tracking-wide hover:text-[var(--accent)] transition-all duration-300">
            Book a Consultation
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
