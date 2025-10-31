'use client';

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'Residential Design', href: '#' },
        { label: 'Commercial Spaces', href: '#' },
        { label: 'Space Planning', href: '#' },
        { label: 'Consultations', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Portfolio', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
      ],
    },
  ];

  const contactInfo: ContactInfo = {
    address: '123 Design Street, Creative City, CC 12345',
    phone: '+1 (555) 123-4567',
    email: 'hello@luxuryinteriors.com',
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}>
              Luxury Interiors
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
              Transforming spaces into timeless sanctuaries. We specialize in elegant, sophisticated interior design that reflects your unique lifestyle.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--foreground)' }}>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <a href={`tel:${contactInfo.phone}`} style={{ color: 'var(--foreground)' }} className="hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} style={{ color: 'var(--accent)' }} />
                <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--foreground)' }} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wide" style={{ fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-accent transition-colors text-sm"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Copyright */}
          <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            © {currentYear} Luxury Interiors. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                <Icon size={20} className="hover:text-accent transition-colors" />
              </a>
            ))}
          </div>

          {/* Payment Methods or Trust Badges */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Certified & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;