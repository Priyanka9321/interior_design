"use client";

const HeroSection = () => {
  return (
    <section className="relative left-0 top-0 -mx-[calc((100vw-100%)/2)] w-screen h-[60vh] md:h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="https://videos.pexels.com/video-files/3770033/3770033-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🖤 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* ✨ Text on Video */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-background mb-4">
          Creative Interior Design
        </h1>
        <p className="text-lg md:text-2xl text-gray-200">
          Transform Your Space Into a Masterpiece
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
