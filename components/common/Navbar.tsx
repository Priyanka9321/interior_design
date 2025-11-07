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

  const menuItems = ["Home", "About", "Service", "Project", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--navbar-bg)] transition-all duration-500 ${
        scrolled ? "shadow-[0_2px_4px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-18 py-4 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Logo.jpeg"
              alt="Logo"
              width={52}
              height={52}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative font-body text-[17px] text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300"
            >
              {item}
            </Link>
          ))}

          {/* ✅ Contact Us Button */}
          <Link
            href="/contact"
            className="px-4 py-2 font-medium border border-[var(--accent)] transition-all duration-300 ease-in-out hover:shadow-lg"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--foreground)",
              fontFamily: "var(--font-body)",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-[var(--foreground)]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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

          {/* ✅ Contact Us Button (mobile) */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block px-4 py-2 font-medium border border-[var(--accent)] transition-all duration-300 ease-in-out hover:shadow-lg"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--foreground)",
              fontFamily: "var(--font-body)",
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
