"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.projectType &&
      formData.message
    ) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }, 3000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground border-b border-accent">

      {/* ✅ Hero Section */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-accent leading-tight">
            Let's Create Together
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-medium mt-4 max-w-6xl mx-auto">
            Transform your space into a masterpiece of refined elegance
          </p>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-16">

          {/* ✅ Contact Details Section */}
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold">Get in Touch</h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Every exceptional interior begins with a conversation. We're here to listen, inspire, and bring your vision to life.
            </p>

            {/* ✅ Cards */}
            <div className="space-y-5">
              {[
                { Icon: Mail, label: "Email Us", value: "Navalsrijan.pvt.ltd@gmail.com", link: "mailto:Navalsrijan.pvt.ltd@gmail.com" },
                { Icon: Phone, label: "Call Us", value: "+91 6396847464", link: "tel:6396847464" },
                { Icon: MapPin, label: "Visit Us", value: "Dehradun, Uttrakhand" },
              ].map(({ Icon, label, value, link }, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-5 bg-navbar rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{label}</h3>
                    {link ? (
                      <a href={link} className="text-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground/70 text-sm sm:text-base">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Studio Hours */}
            <div className="p-6 sm:p-8 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-heading font-semibold text-xl mb-4">Studio Hours</h3>
              <div className="space-y-2 text-sm sm:text-base text-foreground/70">
                <div className="flex justify-between"><span>Mon - Fri</span><span className="font-medium">9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">10:00 AM - 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium">By Appointment</span></div>
              </div>
            </div>
          </div>

          {/* ✅ Form Section */}
          <div className="lg:col-span-3">
            <div className="bg-navbar p-6 sm:p-8 md:p-12 rounded-lg shadow-xl border border-accent/10">
              <h2 className="text-3xl font-heading font-semibold mb-2">Start Your Journey</h2>
              <p className="text-foreground/60 text-sm sm:text-base mb-6">
                Share your vision with us, and we'll craft a design that exceeds your dreams.
              </p>

              {/* 🔥 Custom Form UI Applied Here */}
              <div className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="custom-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="custom-input"
                    />
                  </div>
                </div>

                {/* Phone + Select */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="custom-input"
                    />
                  </div>

                  <div className="relative">
                    <label className="form-label">Project Type</label>
                    <div className="relative">
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        className="custom-select"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Interior</option>
                        <option value="commercial">Commercial Space</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Design Consultation</option>
                      </select>

                      <span className="absolute top-1/2 -translate-y-1/2 right-4 text-accent pointer-events-none text-sm">
                        ▼
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Your Message</label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    className="custom-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={submitted}
                  className="w-full md:w-auto px-8 py-4 bg-accent text-foreground border-2 border-accent font-medium hover:bg-transparent hover:text-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <Check /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Message <Send />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
