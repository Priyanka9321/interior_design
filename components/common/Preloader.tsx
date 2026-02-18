"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete?: () => void;
}

const NavalSrijanPreloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onComplete?.();
          }, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 1.2,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const logoContainerVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const borderVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const name = "NAVAL SRIJAN";
  const letters = name.split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          exit="exit"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#FAF8F6",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* DECORATIVE SQUARE FRAMES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{
              delay: 0.2,
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "absolute",
              width: "50vw",
              height: "50vw",
              maxWidth: "500px",
              maxHeight: "500px",
              border: "1px solid rgba(226, 193, 140, 0.12)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{
              delay: 0.4,
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "absolute",
              width: "35vw",
              height: "35vw",
              maxWidth: "350px",
              maxHeight: "350px",
              border: "1px solid rgba(226, 193, 140, 0.2)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />

          {/* MAIN CONTENT */}
          <div style={{ position: "relative", textAlign: "center" }}>
            {/* SQUARE LOGO WITH ANIMATED BORDER */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "50px",
              }}
            >
              {/* SVG ANIMATED BORDER */}
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  overflow: "visible",
                }}
              >
                <motion.rect
                  x="5"
                  y="5"
                  width="150"
                  height="150"
                  fill="none"
                  stroke="#E2C18C"
                  strokeWidth="1"
                  variants={borderVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.rect
                  x="12"
                  y="12"
                  width="136"
                  height="136"
                  fill="none"
                  stroke="rgba(226, 193, 140, 0.4)"
                  strokeWidth="1"
                  variants={borderVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7, duration: 1.5 }}
                />
              </svg>

              {/* LOGO */}
              <motion.div
                variants={logoContainerVariants}
                initial="hidden"
                animate="visible"
                style={{
                  width: "clamp(100px, 20vw, 130px)",
                  height: "clamp(100px, 20vw, 130px)",
                  backgroundColor: "#fff",
                  padding: "10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/Logo.jpeg"
                  alt="Naval Srijan Logo"
                  width={130} // required
                  height={130} // required
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </div>

            {/* NAME */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                perspective: "1000px",
                marginBottom: "25px",
              }}
            >
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "inline-block",
                    fontSize: "clamp(20px, 5vw, 42px)",
                    fontWeight: "300",
                    letterSpacing: "4px",
                    color: "#14263E",
                    fontFamily: "serif",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* DECORATIVE LINE */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              style={{
                height: "1px",
                backgroundColor: "#E2C18C",
                width: "clamp(150px, 35vw, 220px)",
                margin: "0 auto 30px",
                transformOrigin: "center",
              }}
            />

            {/* SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{
                fontSize: "clamp(10px, 2.5vw, 12px)",
                fontWeight: "400",
                color: "rgba(20, 38, 62, 0.6)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                marginBottom: "40px",
              }}
            >
              ARCHITECTURE • INTERIORS • CONSTRUCTION
            </motion.div>

            {/* PROGRESS BAR */}
            <div
              style={{
                width: "clamp(200px, 50vw, 280px)",
                height: "2px",
                backgroundColor: "rgba(226, 193, 140, 0.2)",
                borderRadius: "2px",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: "linear" }}
                style={{
                  height: "100%",
                  backgroundColor: "#E2C18C",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* PERCENTAGE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: "15px",
                fontSize: "clamp(11px, 2.5vw, 13px)",
                fontWeight: "300",
                color: "#14263E",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
              }}
            >
              {Math.floor(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavalSrijanPreloader;
