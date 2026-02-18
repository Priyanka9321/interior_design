"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  platform: string;
  title: string;
  cta: string;
  url: string;
}

interface ContactContent {
  socials: SocialLink[];
  contact: {
    tagline: string;
    description: string;
    email: string;
    subject: string;
    cta: string;
  };
}

const contactContent: ContactContent = {
  socials: [
    {
      platform: "ON INSTAGRAM",
      title: "Naval Srijan",
      cta: "FOLLOW NOW",
      url: "https://instagram.com/Naval_Srijan",
    },
    {
      platform: "ON YOUTUBE",
      title: "Naval Srijan",
      cta: "SUBSCRIBE NOW",
      url: "https://youtube.com/@NavalSrijan",
    },
  ],
  contact: {
    tagline: "Looking to elevate the aesthetic of your space?",
    description:
      "Have a question for us? Let's talk. For all project inquiries, please email",
    email: "Navalsrijan.pvt.ltd@gmail.com",
    subject: "NEW PROJECT",
    cta: "CONTACT US",
  },
};

// Instagram feed images - Replace these URLs with your actual Instagram post images
const instagramPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400",
    url: "https://instagram.com/Naval_Srijan",
  },
];

export default function ContactUs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Single Card */}
        <div className="p-12 md:p-16">
          {/* Instagram Feed Section */}
          <div className="mb-12 pb-8 border-b border-accent">
            {/* Section Header */}
            <div className="text-center mb-8">
              <p className="text-sm tracking-widest text-foreground/70 font-body uppercase mb-2">
                FOLLOW US
              </p>
              <h2 className="text-3xl font-heading font-medium text-foreground mb-4">
                @Naval_Srijan on Instagram
              </h2>
              <p className="text-base text-foreground/70 font-body">
                Get inspired by our latest projects and design ideas
              </p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {instagramPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden group"
                >
                  <Image
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Link
                href="https://instagram.com/Naval_Srijan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent border-2 border-foreground text-foreground px-8 py-3 font-body font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-300">
                  VIEW MORE ON INSTAGRAM
                </button>
              </Link>
            </div>
          </div>

          {/* Social Media Sections */}
          {contactContent.socials.slice(1).map((social, index) => (
            <div
              key={social.platform}
              className="mb-12 pb-8"
            >
              <div className="flex items-start justify-between flex-col md:flex-row gap-6">
                {/* Left side — text */}
                <div>
                  <p className="text-sm tracking-widest text-foreground/70 font-body uppercase mb-4">
                    {social.platform}
                  </p>
                  <h3 className="text-3xl font-heading font-medium text-foreground mb-6">
                    {social.title}
                  </h3>
                </div>

                {/* Right side — button */}
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-transparent border-2 border-foreground text-foreground px-4 py-2 font-body font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-300">
                    {social.cta}
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="border-t border-accent pt-8 pb-8">
            <div className="flex items-start justify-between flex-col md:flex-row gap-6">
              {/* Left Side — Text */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-heading font-medium text-foreground mb-8">
                  {contactContent.contact.tagline}
                </h2>

                <p className="text-base md:text-lg text-foreground/70 font-body mb-8 leading-relaxed">
                  {contactContent.contact.description}{" "}
                  <Link
                    href={`mailto:${contactContent.contact.email}?subject=${contactContent.contact.subject}`}
                    className="font-semibold text-accent hover:opacity-80 transition-opacity"
                  >
                    {contactContent.contact.email}
                  </Link>{" "}
                </p>
              </div>

              {/* Right Side — Button */}
              <Link
                href={`mailto:${contactContent.contact.email}?subject=${contactContent.contact.subject}`}
              >
                <button className="bg-transparent border-2 border-foreground text-foreground px-4 py-2 font-body font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 w-fit">
                  {contactContent.contact.cta}
                </button>
              </Link>
            </div>
          </div>

          {/* Get a Free Quotation Section */}
          <div className="border-t border-accent pt-8">
            <div className="flex items-start justify-between flex-col md:flex-row gap-6">
              {/* Left Side — Text */}
              <div className="max-w-3xl">
                <h2 className="text-3xl font-heading font-medium text-foreground mb-8">
                  Get a Free Quotation
                </h2>

                <p className="text-base md:text-lg text-foreground/70 font-body mb-8 leading-relaxed">
                  Ready to transform your space? Request a free, no-obligation quotation for your project. Our team will get back to you within 24 hours with a detailed estimate tailored to your needs.
                </p>
              </div>

              {/* Right Side — WhatsApp Button */}
              <Link
                href="https://wa.me/916396847464?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quotation%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-accent text-foreground px-8 py-3 font-body font-semibold tracking-wide hover:bg-accent/80 transition-all duration-300 w-fit flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  REQUEST QUOTATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}