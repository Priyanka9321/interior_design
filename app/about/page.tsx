import PageHero from "@/components/common/Banner";
import CompanyDetails from "@/components/about/CompanyOverview";

import TeamSection from "@/components/about/TeamSection";
import ContactCTA from "@/components/common/ContactUs";

export const metadata = {
  title: "About Us | Essajees Atelier",
  description:
    "Learn more about Essajees Atelier – our story, our creative vision, and the talented team led by Principal Designer Sarah Sham.",
  openGraph: {
    title: "About Us | Essajees Atelier",
    description:
      "Discover Essajees Atelier, led by Principal Designer Sarah Sham. A team passionate about crafting timeless interior spaces.",
    url: "https://navalsrijan.com/about",
    siteName: "Essajees Atelier",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <PageHero
        slides={[
          {
            title: "Crafting Experiences Through Design",
            subtitle: "Luxury spaces crafted with precision and elegance.",
            backgroundImage:
              //"https://images.pexels.com/photos/7061393/pexels-photo-7061393.jpeg",
              //"https://images.pexels.com/photos/1327369/pexels-photo-1327369.jpeg",
              "https://images.pexels.com/photos/8236023/pexels-photo-8236023.jpeg",
          },
          {
            title: "Interiors That Inspire",
            subtitle: "Transforming spaces into timeless experiences.",
            backgroundImage:
             // "https://images.pexels.com/photos/34628299/pexels-photo-34628299.jpeg",
              //"https://images.pexels.com/photos/6489441/pexels-photo-6489441.jpeg",
              "https://images.pexels.com/photos/30117468/pexels-photo-30117468.jpeg",
          },
          {
            title: "Architecture & Construction",
            subtitle: "Building beautiful, functional environments.",
            backgroundImage:
              //"https://images.pexels.com/photos/7534571/pexels-photo-7534571.jpeg",
              "https://images.pexels.com/photos/33405084/pexels-photo-33405084.jpeg",
          },
        ]}
      />

      <CompanyDetails />
      <TeamSection />
      <ContactCTA />
    </main>
  );
}
