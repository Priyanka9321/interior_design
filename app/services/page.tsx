import SplitSection from "@/components/common/SplitSection";

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
      {/* ✅ OUR SERVICES HEADING */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-semibold tracking-wide uppercase relative inline-block mb-2">
          Our Services
          <span className="block h-[3px] w-20 bg-accent mt-3 mx-auto"></span>
        </h2>
      </div>

      {/* ✅ SECTION 1 — Construction */}
      <SplitSection
        reverse
        title="Construction"
        description="Our construction services are the pinnacle of our offerings, boasting expertise and resources that enable us to deliver exceptional results. We are committed to using the finest materials and employing modern construction techniques to ensure quality, durability, and energy efficiency."
        imageUrl="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg"
      />

      {/* ✅ SECTION 2 — Interior Designing (reverse layout) */}
      <SplitSection
        title="Interior Designing"
        description="Our interior designing services involve concept planning, space planning, material selection, lighting design, and custom furniture. We create beautiful, functional spaces based on your lifestyle and personality."
        imageUrl="https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg"
      />

      {/* ✅ SECTION 3 — Architecture */}
      <SplitSection
        reverse
        title="Architecture Services"
        description="We offer architecture services including creative design concepts, detailed drawings, and planning of architectural and interior spaces with a strong focus on structural and aesthetic harmony."
        imageUrl="https://images.pexels.com/photos/7641859/pexels-photo-7641859.jpeg"
      />

      {/* ✅ SECTION 4 — Renovation */}
      <SplitSection
        title="Renovation Services"
        description="We enhance the appearance and functionality of your space through renovation services such as flooring, painting, electrical work, plumbing, structural repairs, and space remodeling."
        imageUrl="https://images.pexels.com/photos/6474487/pexels-photo-6474487.jpeg"
      />

      {/* ✅ SECTION 5 — Modular Solutions */}
      <SplitSection
        reverse
        title="Modular Solutions"
        description="We develop modular building systems and deliver high-quality modular homes with 3D modeling and precision installation, ensuring quality, speed, and aesthetic excellence."
        imageUrl="https://images.pexels.com/photos/32178141/pexels-photo-32178141.png"
      />
    </main>
  );
}
