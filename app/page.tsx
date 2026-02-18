import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TransformationShowcase from "@/components/home/TransformationShowcase";
import Testimonials from "@/components/home/Testimonials";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import ContactCTA from "@/components/common/ContactUs";

export const metadata = {
  title: "Naval srijan | Interior Design Experts",
  description:
    "Transform your home interiors with Navalsrijan’s modern and elegant designs.",
  openGraph: {
    title: "Navalsrijan | Interior Design Experts",
    description:
      "Transform your home interiors with Navalsrijan’s modern and elegant designs.",
    url: "https://navalsrijan.com",
    siteName: "Navalsrijan",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <WhatWeOffer />
      <WhyChooseUs />

      {/* FIXED HERE — No Props */}
      <TransformationShowcase />

      <Testimonials />
      <ContactCTA />
    </main>
  );
}
