import Image from "next/image";

export default function TeamSection() {
  const teamStats = [
    { number: "35+", label: "Design Professionals" },
    { number: "100%", label: "Dedicated Team Approach" },
    { number: "Pan-India", label: "Expert Talent Pool" },
  ];

  const teamValues = [
    "Masters from Prestigious Universities",
    "Former Studio Owners",
    "Diverse Backgrounds",
    "Process-Oriented Approach",
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background border-t border-accent mt-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 lg:mb-16 overflow-hidden shadow-lg order-first lg:order-last">
          <Image
            src="https://images.pexels.com/photos/7550397/pexels-photo-7550397.jpeg"
            alt="Essajees Atelier Team - Group of Design Professionals"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
        </div>
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-3">
            The Team
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Content - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <p className="text-base text-foreground/80 leading-relaxed">
                Essajees Atelier has a team of 35, and growing, young, curious,
                and extremely talented design professionals. The team is a mix
                of architects and interior designers from different parts of the
                country.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                It consists of members who have completed their Masters from
                prestigious universities as well as those who ran their own
                studios before joining Essajees Atelier.
              </p>
            </div>

            {/* Team Values */}
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Our Strength
              </h3>
              <ul className="space-y-3">
                {teamValues.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-foreground font-body">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <p className="text-base text-foreground/80 leading-relaxed">
              The team is made up of diverse backgrounds but is united in their
              enthusiasm, positive outlook, eagerness to learn, and is
              incredibly focused and process-oriented.
            </p>

            <p className="text-base text-foreground/80 leading-relaxed">
              Every project Essajees Atelier undertakes is allotted to dedicated
              teams that work with the clients from start to finish.
            </p>
          </div>

          {/* Right - Stats Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              By The Numbers
            </h3>
            <div className="space-y-6">
              {teamStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="border-b border-accent/20 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="text-2xl font-serif font-semibold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
