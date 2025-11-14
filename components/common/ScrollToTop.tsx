"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <motion.button
  onClick={scrollToTop}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0 }}
  className="
    fixed bottom-10 right-10 
    bg-[#E2C18C] text-[#14263E] 
    w-16 h-16 flex items-center justify-center 
    rounded-full shadow-xl 
    hover:scale-110 transition-all duration-300 
    z-50
  "
>
  <ArrowUp size={32} strokeWidth={2.5} />
</motion.button>

      )}
    </>
  );
};

export default ScrollToTop;
