"use client";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState, useRef, useEffect, FC } from "react";

/* ─────────────────────────────────────────
   Brand Tokens (matching your site)
───────────────────────────────────────── */
const B = {
  cream: "#F5F0E8",       // page background
  creamDark: "#EDE6D6",   // slightly deeper cream for cards
  creamBorder: "#DDD5C0", // card borders
  gold: "#C4973A",        // primary gold (matching your icons/buttons)
  goldLight: "#D4AF5A",   // lighter gold for gradients
  goldPale: "#E8D5A0",    // very pale gold for backgrounds
  text: "#2C2419",        // dark brown-black (your body text)
  textMid: "#6B5B3E",     // mid warm brown (your subtext)
  textLight: "#9C8A6E",   // lighter warm grey-brown
  white: "#FFFFFF",
};

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface Service {
  title: string;
  description: string;
  image: string;
  number: string;
  tag: string;
}

interface ParticleProps {
  x: number;
  y: number;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const services: Service[] = [
  {
    title: "Construction",
    description:
      "We deliver reliable and detail-driven construction services, ensuring durability, technical precision, and seamless project execution from foundation to finish.",
    image:
      "https://images.pexels.com/photos/8961025/pexels-photo-8961025.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "01",
    tag: "Build",
  },
  {
    title: "Interior",
    description:
      "We create interiors that blend elegance with intelligent functionality tailoring layouts, materials and design details to enhance the way you live and experience your space. Every element is curated with purpose, comfort and timeless aesthetics in mind.",
    image:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "02",
    tag: "Design",
  },
  {
    title: "Architecture",
    description:
      "Our architectural solutions balance form, function and clarity—uniting thoughtful planning, refined aesthetics and practical efficiency. We craft spaces that are structurally sound, visually harmonious and uniquely aligned with your lifestyle.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    number: "03",
    tag: "Plan",
  },
];

/* ─────────────────────────────────────────
   Gold Particle (warm gold on cream)
───────────────────────────────────────── */
const Particle: FC<ParticleProps> = ({ x, y }) => {
  const angle = Math.random() * Math.PI * 2;
  const dist = 35 + Math.random() * 55;
  return (
    <motion.span
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 0.6 + Math.random() * 0.5, ease: "easeOut" }}
      style={{
        left: x, top: y,
        background: B.gold,
        position: "absolute",
        width: 5, height: 5,
        borderRadius: "50%",
        pointerEvents: "none",
        display: "block",
        zIndex: 50,
      }}
    />
  );
};

/* ─────────────────────────────────────────
   Service Card
───────────────────────────────────────── */
const ServiceCard: FC<ServiceCardProps> = ({ service, index }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 180, damping: 22 });
  const sRotY = useSpring(rotY, { stiffness: 180, damping: 22 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    rotY.set(((e.clientX - r.left - r.width / 2) / r.width) * 8);
    rotX.set(-((e.clientY - r.top - r.height / 2) / r.height) * 8);
  };

  const onMouseLeave = () => {
    rotX.set(0); rotY.set(0); setHovered(false);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    setHovered(true);
    const r = cardRef.current.getBoundingClientRect();
    setParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      }))
    );
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: sRotX, rotateY: sRotY,
        transformStyle: "preserve-3d", perspective: 1000,
        position: "relative", display: "flex", flexDirection: "column",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Soft gold shadow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 8 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute", inset: 0, borderRadius: 16, zIndex: 0,
          boxShadow: `0 20px 60px rgba(196,151,58,0.25)`,
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div style={{
        position: "relative", flex: 1, display: "flex", flexDirection: "column",
        background: B.white,
        border: `1px solid ${B.creamBorder}`,
        borderRadius: 16, overflow: "hidden", zIndex: 1,
        boxShadow: "0 2px 16px rgba(44,36,25,0.06)",
        transition: "border-color 0.3s",
        borderColor: hovered ? B.gold : B.creamBorder,
      }}>

        {/* Gold top border sweep */}
        <motion.div
          animate={{ x: hovered ? "110%" : "-110%" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: 2, zIndex: 10,
            background: `linear-gradient(90deg, transparent, ${B.gold}, transparent)`,
          }}
        />

        {/* Image */}
        <div style={{ position: "relative", height: 210, overflow: "hidden", flexShrink: 0 }}>
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7 }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} />
          </motion.div>

          {/* Warm cream gradient at bottom */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.5) 75%, #ffffff 100%)",
          }} />

          {/* Number badge — top left */}
          <div style={{
            position: "absolute", top: 14, left: 14, zIndex: 20,
            padding: "4px 10px",
            background: "rgba(255,255,255,0.92)",
            border: `1px solid ${B.gold}`,
            borderRadius: 20,
            display: "flex", alignItems: "center", gap: 6,
            backdropFilter: "blur(4px)",
          }}>
            <span style={{
              fontFamily: "monospace", fontSize: 10,
              color: B.gold, fontWeight: 700, letterSpacing: "0.15em",
            }}>
              {service.number}
            </span>
            <span style={{
              width: 1, height: 10,
              background: B.goldPale, display: "block",
            }} />
            <span style={{
              fontFamily: "monospace", fontSize: 9,
              color: B.textLight, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              {service.tag}
            </span>
          </div>

          {/* Shimmer */}
          <motion.div
            animate={{ x: hovered ? "280%" : "-80%", opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute", inset: 0, width: "35%", pointerEvents: "none",
              background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.2), transparent)",
              transform: "skewX(-12deg)",
            }}
          />
        </div>

        {/* Content */}
        <div style={{
          padding: "20px 24px 26px",
          display: "flex", flexDirection: "column", flex: 1, gap: 10,
        }}>

          {/* Title */}
          <motion.h3
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 24, fontWeight: 700,
              color: B.text,
              lineHeight: 1.2, margin: 0, padding: 0,
            }}
          >
            {service.title}
          </motion.h3>

          {/* Gold accent line */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0.2, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
            style={{
              height: 1.5,
              background: `linear-gradient(90deg, ${B.gold}, transparent)`,
              transformOrigin: "left", borderRadius: 1,
            }}
          />

          {/* Description */}
          <p style={{
            color: B.textMid,
            fontSize: 14, lineHeight: 1.75,
            fontWeight: 400, letterSpacing: "0.01em",
            margin: 0, flex: 1,
          }}>
            {service.description}
          </p>

          {/* CTA */}
          <Link href="#" style={{
            textDecoration: "none", display: "inline-flex",
            alignItems: "center", gap: 8, marginTop: 6,
          }}>
            <motion.span
              animate={{ width: hovered ? 32 : 14 }}
              transition={{ duration: 0.35 }}
              style={{ height: 1.5, background: B.gold, display: "block", flexShrink: 0 }}
            />
            <span style={{
              fontFamily: "monospace", fontSize: 10, fontWeight: 700,
              color: B.gold, letterSpacing: "0.18em", textTransform: "uppercase",
            }}>
              DISCOVER MORE
            </span>
            <motion.span
              animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.5 }}
              transition={{ duration: 0.25 }}
              style={{ color: B.gold, fontSize: 13 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Particles */}
      {particles.map((p) => <Particle key={p.id} x={p.x} y={p.y} />)}
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   Scrolling Marquee
───────────────────────────────────────── */
const Marquee: FC = () => {
  const words: string[] = [
    "Construction", "Interior Design", "Architecture",
    "Excellence", "Precision", "Craftsmanship",
  ];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: `1px solid ${B.creamBorder}`,
      borderBottom: `1px solid ${B.creamBorder}`,
      padding: "10px 0", margin: "44px 0",
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}
      >
        {[...words, ...words].map((w, i) => (
          <span key={i} style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 38, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.08em",
            color: "transparent",
            WebkitTextStroke: `1px rgba(196,151,58,0.22)`,
            userSelect: "none",
          }}>
            {w}&nbsp;
            <span style={{ color: `rgba(196,151,58,0.28)`, WebkitTextStroke: "none" }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Decorative Corner Bracket
───────────────────────────────────────── */
interface CornerProps {
  style?: React.CSSProperties;
  flip?: boolean;
  flipY?: boolean;
}
const Corner: FC<CornerProps> = ({ style, flip, flipY }) => (
  <div style={{
    position: "absolute", width: 24, height: 24, opacity: 0.35,
    transform: `scale(${flip ? -1 : 1}, ${flipY ? -1 : 1})`,
    ...style,
  }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1.5, background: B.gold }} />
    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: 1.5, background: B.gold }} />
  </div>
);

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export default function WhatWeOfferStylish() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&display=swap');

        @keyframes ns-grain {
          0%,100% { transform: translate(0,0); }
          25%     { transform: translate(-1%,-2%); }
          50%     { transform: translate(1.5%,-0.5%); }
          75%     { transform: translate(-0.5%,1.5%); }
        }
        .ns-services-section::before {
          content: '';
          position: absolute; inset: -200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          animation: ns-grain 1.2s steps(1) infinite;
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ns-services-section"
        style={{
          position: "relative",
          background: B.cream,
          overflow: "hidden",
          padding: "96px 24px 112px",
        }}
      >
        {/* Subtle warm grid */}
        <motion.div
          style={{
            y: bgY, position: "absolute", inset: 0,
            pointerEvents: "none", zIndex: 0,
            backgroundImage:
              `linear-gradient(rgba(196,151,58,0.05) 1px, transparent 1px),` +
              `linear-gradient(90deg, rgba(196,151,58,0.05) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Soft warm glow top-center */}
        <div style={{
          position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 400, pointerEvents: "none", zIndex: 0,
          background: `radial-gradient(ellipse, rgba(196,151,58,0.08) 0%, transparent 65%)`,
          filter: "blur(60px)",
        }} />

        {/* Corner brackets */}
        <Corner style={{ top: 20, left: 20 }} />
        <Corner style={{ top: 20, right: 20 }} flip />
        <Corner style={{ bottom: 20, left: 20 }} flipY />
        <Corner style={{ bottom: 20, right: 20 }} flip flipY />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ textAlign: "center" }}>

            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}
            >
              <span style={{ height: 1, width: 44, background: B.gold, display: "block", opacity: 0.7 }} />
              <span style={{
                fontFamily: "monospace", fontSize: 10.5,
                color: B.gold, letterSpacing: "0.28em", textTransform: "uppercase",
              }}>
                Our Premium Services
              </span>
              <span style={{ height: 1, width: 44, background: B.gold, display: "block", opacity: 0.7 }} />
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(40px, 6.5vw, 80px)",
                fontWeight: 700, lineHeight: 1.05,
                color: B.text, margin: 0,
              }}
            >
              Why Naval{" "}
              <span style={{ position: "relative", display: "inline-block", color: B.text }}>
                Design
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.6 }}
                  style={{
                    position: "absolute", bottom: 2, left: 0,
                    width: "100%", height: 3,
                    background: `linear-gradient(90deg, ${B.gold}, transparent)`,
                    transformOrigin: "left", display: "block", borderRadius: 2,
                  }}
                />
              </span>
              <br />
              {/* "Process" in gold — italic to match your Playfair style */}
              <span style={{
                fontStyle: "italic",
                background: `linear-gradient(120deg, ${B.gold} 0%, ${B.goldLight} 50%, #A07828 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}>
                Process
              </span>
            </motion.h2>

            {/* Sub paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{
                marginTop: 20, color: B.textMid,
                maxWidth: 520, marginLeft: "auto", marginRight: "auto",
                fontSize: 15, lineHeight: 1.8,
                fontWeight: 400, letterSpacing: "0.015em",
              }}
            >
              We offer personalized, design-driven solutions that blend aesthetics,
              functionality and precision, ensuring every space is crafted with care and
              delivered with excellence.
            </motion.p>
          </div>

          {/* Marquee */}
          <Marquee />

          {/* Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 24,
          }}>
            {services.map((s, i) => (
              <ServiceCard key={s.number} service={s} index={i} />
            ))}
          </div>

          {/* CTA Button — matching your "Know More" style */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover="hov"
                style={{
                  position: "relative", overflow: "hidden",
                  border: `1.5px solid ${B.gold}`,
                  padding: "14px 48px", cursor: "pointer",
                  borderRadius: 4,
                }}
              >
                {/* Fill sweep */}
                <motion.div
                  variants={{ hov: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: "absolute", inset: 0,
                    background: B.gold,
                    transformOrigin: "left", zIndex: 0,
                  }}
                />
                <motion.span
                  variants={{ hov: { color: B.white } }}
                  style={{
                    position: "relative", zIndex: 1,
                    fontFamily: "monospace", fontSize: 11,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    color: B.gold, display: "block",
                  }}
                >
                  VIEW ALL SERVICES
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Warm gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            style={{
              marginTop: 72, height: 1,
              background: `linear-gradient(90deg, transparent, ${B.gold}80, transparent)`,
              transformOrigin: "center",
            }}
          />
        </div>
      </section>
    </>
  );
}