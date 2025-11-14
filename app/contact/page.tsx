import PageHero from "@/components/common/Banner";
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

      <ContactUs />

    </main>
  );
}
