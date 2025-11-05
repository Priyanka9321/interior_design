"use client";

import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ContactItem {
  type: string;
  email: string;
  subject?: string;
  description: string;
}

const contactData: ContactItem[] = [
  {
    type: "Project Inquiries",
    email: "sarah@essajeesatelier.com",
    subject: "NEW PROJECT",
    description:
      "For all project inquiries, please email us with the subject line NEW PROJECT",
  },
  {
    type: "Career Opportunities",
    email: "careers@essajeesatelier.com",
    description: "For all job inquiries, please reach out to our careers team",
  },
];

export default function ContactUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleEmailClick = (email: string, subject?: string) => {
    const mailtoLink = subject
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      className="min-h-screen px-6 py-20 border-t"
      style={{ backgroundColor: "#FAF8F6", borderColor: "#E2C18C" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div>
            <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3 text-[#14263E]">
              Get In Touch
            </h2>
            <p className="text-lg text-[#14263E]/70 font-[Spectral]">
              Have a question for us? Let's talk.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 transition-all duration-300 border-2 cursor-pointer"
              style={{
                backgroundColor: hoveredCard === index ? "#FFF9F5" : "#ffffff",
                borderColor: hoveredCard === index ? "#E2C18C" : "#f0f0f0",
                boxShadow:
                  hoveredCard === index
                    ? "0 8px 30px rgba(226, 193, 140, 0.15)"
                    : "0 2px 10px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Mail
                  size={28}
                  style={{ color: "#E2C18C" }}
                  className="flex-shrink-0 mt-1"
                />
                <h3
                  className="text-2xl"
                  style={{
                    fontFamily: "Playfair Display",
                    color: "#14263E",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.type}
                </h3>
              </div>

              <p
                className="mb-6 text-base leading-relaxed"
                style={{
                  fontFamily: "Spectral",
                  color: "#14263E",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </p>

              <button
                onClick={() => handleEmailClick(item.email, item.subject)}
                className="w-full flex items-center justify-between px-6 py-3 transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredCard === index ? "#E2C18C" : "transparent",
                  color: hoveredCard === index ? "#14263E" : "#E2C18C",
                  border: `1px solid #E2C18C`,
                  fontFamily: "Spectral",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  if (hoveredCard !== index) return;
                  e.currentTarget.style.backgroundColor = "#E2C18C";
                  e.currentTarget.style.color = "#14263E";
                }}
                onMouseLeave={(e) => {
                  if (hoveredCard !== index) return;
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#E2C18C";
                }}
              >
                <span>{item.email}</span>
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center">
          <p
            className="text-base mb-8"
            style={{
              fontFamily: "Spectral",
              color: "#14263E",
              fontWeight: 400,
            }}
          >
            Prefer to reach out through a different method?
          </p>
          <button
            className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-300"
            style={{
              backgroundColor: "#E2C18C",
              color: "#14263E",
              border: "1px solid #E2C18C",
              fontFamily: "Spectral",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#E2C18C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E2C18C";
              e.currentTarget.style.color = "#14263E";
            }}
          >
            <Mail size={20} />
            Send us a Message
          </button>
        </div>
      </div>
    </section>
  );
}
