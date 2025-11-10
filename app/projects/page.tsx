import PageHero from "@/components/common/Banner";
import ProjectOverview from "@/components/project/ProjectCard";
import ContactCTA from "@/components/common/ContactUs";

export const metadata = {
  title: "Projects | Essajees Atelier",
  description:
    "Explore our completed interior and architectural design projects — luxury homes, commercial spaces, and bespoke interiors crafted with precision.",
  openGraph: {
    title: "Projects | Essajees Atelier",
    description:
      "Browse our curated project collection showcasing modern luxury design and timeless aesthetics.",
    url: "https://navalsrijan.com/project",
    siteName: "Essajees Atelier",
  },
};

export default function ProjectPage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <PageHero
        title="Our Curated Project Collection"
        subtitle="Designing spaces that inspire — from concept to completion."
        backgroundImage="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
      />

      {/* ✅ Client component allowed */}
      <ProjectOverview />
      <ContactCTA />
    </main>
  );
}
