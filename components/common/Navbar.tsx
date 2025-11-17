"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftMenu = ["Home", "About"];
  const rightMenu = ["Services", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500 ${
        scrolled ? "shadow-[0_2px_4px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <nav className="relative flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 md:py-2 transition-all duration-300">

        {/* LEFT MENU - Desktop */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-end pr-8">
          {leftMenu.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-[17px] px-5 py-2 hover:text-blue-600 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="relative px-2 md:px-4">
          <div className="relative w-[55px] h-[55px] md:w-[85px] md:h-[85px] z-50">
            <Image
              src="/NSLogo.svg"
              alt="Logo"
              fill
              sizes="82px"
              className="object-contain cursor-pointer"
            />
          </div>
        </div>

        {/* RIGHT MENU - Desktop */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-start pl-8">
          {rightMenu.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[17px] px-5 py-2 hover:text-blue-600 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto text-gray-900"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg w-full text-center py-4 space-y-3">
          {[...leftMenu, ...rightMenu].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-[17px] py-2 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
