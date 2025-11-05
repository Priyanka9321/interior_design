import PageHero from "@/components/common/Banner";
import CompanyDetails from "@/components/about/CompanyOverview";
import PrincipalDesigner from "@/components/about/PrincipalDesigner";
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
        title="Transform Your Space Into a Masterpiece"
       
        backgroundImage="https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg"
      />
      <CompanyDetails />
      <PrincipalDesigner />
      <TeamSection />
      <ContactCTA />
    </main>
  );
}
