'use client';

import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Our Services', href: '#' },
    { label: 'Our Projects', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const services = [
    { label: 'Construction', href: '#' },
    { label: 'Architecture', href: '#' },
    { label: 'Interior', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-[2px]" />
                <span>Dehradun, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:6396847464" className="hover:text-accent transition-colors">
                  6396847464
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:Navalsrijan.pvt.ltd@gmail.com" className="hover:text-accent transition-colors">
                  Navalsrijan.pvt.ltd@gmail.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-700 hover:text-accent transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
              {services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="hover:text-accent transition-colors">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
              Newsletter
            </h4>
            <p className="text-sm mb-4 text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
              Subscribe to get our latest updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent text-white px-4 py-2 text-sm hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-gray-600 font-body">
          <p>© {currentYear} Naval Srijan, All rights reserved</p>
          <p>Powered by Mentation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
