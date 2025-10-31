import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RecentWorks from "@/components/home/RecentWorks";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Priyanka Interiors | Elegant & Timeless Designs",
  description:
    "Transform your spaces with luxury interior designs by Priyanka Interiors. We create homes and offices that inspire.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <RecentWorks />
      <TeamSection />
      <Testimonials />
    </main>
  );
}
