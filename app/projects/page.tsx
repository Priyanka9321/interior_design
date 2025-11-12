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
              slides={[
                {
                  title: "Crafting Experiences Through Design",
                  subtitle: "Luxury spaces crafted with precision and elegance.",
                  backgroundImage:
                    "https://images.pexels.com/photos/7061393/pexels-photo-7061393.jpeg",
                },
                {
                  title: "Interiors That Inspire",
                  subtitle: "Transforming spaces into timeless experiences.",
                  backgroundImage:
                    "https://images.pexels.com/photos/34628299/pexels-photo-34628299.jpeg",
                },
                {
                  title: "Architecture & Construction",
                  subtitle: "Building beautiful, functional environments.",
                  backgroundImage:
                    "https://images.pexels.com/photos/7534571/pexels-photo-7534571.jpeg",
                },
              ]}
            />

      {/* ✅ Client component allowed */}
      <ProjectOverview />
      <ContactCTA />
    </main>
  );
}
