"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

  const circleVariants: Variants = {
    hidden: { scale: 0.3, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5,
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
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
          {/* ======= RESPONSIVE CIRCLES ======= */}
          <motion.div
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              width: "55vw",
              height: "55vw",
              maxWidth: "600px",
              maxHeight: "600px",
              borderRadius: "50%",
              border: "1px solid rgba(226, 193, 140, 0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <motion.div
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              width: "40vw",
              height: "40vw",
              maxWidth: "450px",
              maxHeight: "450px",
              borderRadius: "50%",
              border: "1px solid rgba(226, 193, 140, 0.25)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <motion.div
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              width: "28vw",
              height: "28vw",
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "50%",
              border: "1px solid rgba(226, 193, 140, 0.35)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* ======= DIAMOND ======= */}
          <div style={{ position: "relative", marginBottom: "50px" }}>
            <motion.div
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                width: "15vw",
                height: "15vw",
                maxWidth: "80px",
                maxHeight: "80px",
                border: "2px solid #E2C18C",
                position: "relative",
                margin: "0 auto",
                marginBottom: "25px",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  position: "absolute",
                  width: "7vw",
                  height: "7vw",
                  maxWidth: "40px",
                  maxHeight: "40px",
                  backgroundColor: "#E2C18C",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </motion.div>

            {/* NAME */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                perspective: "1000px",
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
                    fontSize: "clamp(22px, 6vw, 48px)",
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

            {/* LINE */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              style={{
                height: "1px",
                backgroundColor: "#E2C18C",
                marginTop: "20px",
                width: "40vw",
                maxWidth: "200px",
                margin: "25px auto 0",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* PROGRESS BAR */}
          <div
            style={{
              width: "60vw",
              maxWidth: "300px",
              height: "2px",
              backgroundColor: "rgba(226, 193, 140, 0.2)",
              borderRadius: "2px",
              overflow: "hidden",
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
              fontSize: "clamp(12px, 3vw, 14px)",
              fontWeight: "300",
              color: "#14263E",
              letterSpacing: "2px",
              fontFamily: "sans-serif",
            }}
          >
            {Math.floor(progress)}%
          </motion.div>

          {/* SUBTITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{
              marginTop: "25px",
              fontSize: "clamp(10px, 2.5vw, 12px)",
              fontWeight: "400",
              color: "rgba(20, 38, 62, 0.6)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Interior Design Studio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavalSrijanPreloader;
