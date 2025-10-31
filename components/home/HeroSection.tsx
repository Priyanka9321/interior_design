"use client";

const HeroSection = () => {
  return (
    <section className="relative left-0 top-0 -mx-[calc((100vw-100%)/2)] w-screen h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        src="https://videos.pexels.com/video-files/3770033/3770033-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      
    </section>
  );
};

export default HeroSection;
