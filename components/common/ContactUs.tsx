"use client";

import React from "react";
import Link from "next/link";

interface ContactContent {
  instagram: {
    title: string;
    handle: string;
    cta: string;
  };
  contact: {
    tagline: string;
    description: string;
    email: string;
    subject: string;
    cta: string;
  };
}

const contactContent: ContactContent = {
  instagram: {
    title: "Naval Srijan",
    handle: "on Instagram",
    cta: "FOLLOW NOW",
  },
  contact: {
    tagline: "Looking to elevate the aesthetic of your space?",
    description:
      "Have a question for us? Let's talk. For all project inquiries, please email",
    email: "sarah@essajeesatelier.com",
    subject: "NEW PROJECT",
    cta: "CONTACT US",
  },
};

export default function ContactUs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Single Card */}
        <div className="p-12 md:p-16">
          {/* Instagram Section */}
          <div className="mb-12 pb-12 border-b border-accent">
            <div className="flex items-start justify-between flex-col md:flex-row gap-6">
              {/* Left side — text */}
              <div>
                <p className="text-sm tracking-widest text-foreground/70 font-body uppercase mb-4">
                  {contactContent.instagram.handle}
                </p>
                <h3 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-8">
                  {contactContent.instagram.title}
                </h3>
              </div>

              {/* Right side — button */}
              <Link
                href="https://instagram.com/essajeesatelier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-transparent border-2 border-foreground text-foreground px-8 py-3 font-body font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-300">
                  {contactContent.instagram.cta}
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="flex items-start justify-between flex-col md:flex-row gap-6">
              {/* Left Side — Text */}
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
                  {contactContent.contact.tagline}
                </h2>

                <p className="text-base md:text-lg text-foreground font-body mb-8 leading-relaxed">
                  {contactContent.contact.description}{" "}
                  <Link
                    href={`mailto:${contactContent.contact.email}?subject=${contactContent.contact.subject}`}
                    className="font-semibold text-accent hover:opacity-80 transition-opacity"
                  >
                    {contactContent.contact.email}
                  </Link>{" "}
                  with the subject{" "}
                  <span className="font-semibold italic">
                    {contactContent.contact.subject}
                  </span>
                </p>
              </div>

              {/* Right Side — Button */}
              <button className="bg-transparent border-2 border-foreground text-foreground px-8 py-3 font-body font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 w-fit">
                {contactContent.contact.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
