import PageHero from "@/components/common/Banner";
import ContactCTA from "@/components/common/ContactUs";
import ContactUs from "@/components/contact/ContactUs";

export const metadata = {
  title: "Contact Us | Essajees Atelier",
  description:
    "Connect with Essajees Atelier. Let's discuss your project and transform your vision into reality.",
  openGraph: {
    title: "Contact Us | Essajees Atelier",
    description:
      "Reach out to Essajees Atelier for inquiries, collaborations, or interior design consultations.",
    url: "https://navalsrijan.com/contact",
    siteName: "Essajees Atelier",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <PageHero
        title="Let’s Begin Something Beautiful"
        backgroundImage="https://images.pexels.com/photos/3815581/pexels-photo-3815581.jpeg"
      />

      <ContactUs />
      <ContactCTA />
    </main>
  );
}
