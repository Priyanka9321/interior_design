import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/OurProcess";
import TransformationShowcase from "@/components/home/TransformationShowcase";
import Testimonials from "@/components/home/Testimonials";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export const metadata = {
  title: "Priyanka Interiors | Elegant & Timeless Designs",
  description:
    "Transform your spaces with luxury interior designs by Priyanka Interiors. We create homes and offices that inspire.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <HeroSection />
      <FeaturedProjects/>
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TransformationShowcase beforeImage={"https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg"} afterImage={"https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg"} />
      <Testimonials />
    </main>
  );
}
