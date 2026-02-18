"use client";

const HeroSection = () => {
  return (
    <section className="relative left-0 top-0 -mx-[calc((100vw-100%)/2)] w-screen h-[60vh] md:h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="https://videos.pexels.com/video-files/29466011/12684178_1920_1080_60fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖤 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* ✨ Text on Video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

        <p className="text-xl md:text-4xl text-accent mb-4 tracking-wide">
          FROM PLOT TO PERFECTION
        </p>

        <p className="font-heading text-lg md:text-2xl font-semibold text-background leading-snug">
          We design, build and deliver with purpose
        </p>

      </div>





    </section>
  );
};

export default HeroSection;
