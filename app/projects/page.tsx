// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  exploreLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  description,
  imageUrl,
  imageAlt,
  exploreLink,
}) => {
  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-out">
      {/* Image Container */}
      <div className="relative h-80 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          priority={false}
        />
      </div>

      {/* Content Container */}
      <div className="p-8 space-y-4">
        {/* Location */}
        <p className="text-sm font-body tracking-widest uppercase text-accent transition-colors duration-300">
          {location}
        </p>

        {/* Title */}
        <h3 className="text-2xl font-heading font-semibold text-foreground leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base font-body text-foreground/80 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Divider */}
        <div className="pt-4 border-t border-accent/30"></div>

        {/* Explore Button */}
        <Link href={exploreLink}>
          <button className="w-full mt-2 py-3 px-6 bg-accent text-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-none hover:bg-transparent border border-accent transition-all duration-300 ease-out">
            Explore Project
          </button>
        </Link>
      </div>
    </article>
  );
};

// Example Usage Component
export const ProjectsSection: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      id: '1',
      title: 'Merlin Residence',
      location: 'Kolkata',
      description: 'Exploring scale and detail in a 6,000 sq. ft. Kolkata home',
      imageUrl: '/images/merlin-residence.jpg',
      imageAlt: 'Merlin Residence Interior',
      exploreLink: '/projects/merlin-residence',
    },
    {
      id: '2',
      title: 'Rajbari Penthouse',
      location: 'Mumbai',
      description: 'Contemporary luxury with traditional Indian aesthetics',
      imageUrl: '/images/rajbari-penthouse.jpg',
      imageAlt: 'Rajbari Penthouse Interior',
      exploreLink: '/projects/rajbari-penthouse',
    },
    {
      id: '3',
      title: 'Heritage Estate',
      location: 'Delhi',
      description: 'Refined elegance meets modern comfort in a historic setting',
      imageUrl: '/images/heritage-estate.jpg',
      imageAlt: 'Heritage Estate Interior',
      exploreLink: '/projects/heritage-estate',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
          Our Projects
        </h2>
        <div className="w-16 h-1 bg-accent"></div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};