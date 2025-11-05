'use client';

import Image from 'next/image';


interface Props {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export default function PageHero({ title, backgroundImage }: Props) {
  return (
    <section className="relative left-0 top-0 -mx-[calc((100vw-100%)/2)] w-screen h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="absolute z-0 object-cover"
      />
    </section>
  );
}
