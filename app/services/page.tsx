import PageHero from "@/components/common/Banner";
import Services from "@/components/service/Services"; 
import ContactCTA from "@/components/common/ContactUs";

export const metadata = {
  title: "Services | Essajees Atelier",
  description:
    "Explore our premium interior design services tailored for luxury residential and commercial spaces.",
  openGraph: {
    title: "Services | Essajees Atelier",
    description:
      "Luxury interior design service offerings — from space planning to turnkey project execution.",
    url: "https://navalsrijan.com/services",
    siteName: "Essajees Atelier",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <PageHero
        title="Crafting Experiences Through Design"
        backgroundImage="https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg"
      />

      {/* ✅ services section (accordion/cards/list section you designed) */}
      <Services />

      {/* CTA section same as About page */}
      <ContactCTA />
    </main>
  );
}
