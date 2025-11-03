'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Sarah has been no work at all. The best part of it all was that she is literally the easiest person to approach- strong and confident when needed, warm and empathetic when things sometimes did not go as per plan. What started with Sarah as a very professional engagement very quickly turned into a family dynamic. She is superbly connected to the best in the business- art, wallpapers, sculptures, chandeliers, fabrics, marble, furniture, rugs, decor, automation etc. She would make the call and the red carpet would be rolled out for us.",
    author: "Bhagyashree Damera",
    title: "CO-FOUNDER, DAMERA VENTURES"
  },
  {
    id: 2,
    quote: "I remember the first call we had with Sarah—the energy and warmth she brought to the meeting made us confident that she was the one to design our dream home. The knowledge and expertise of Sarah and her team are truly commendable. Building a house can be extremely stressful, but working with the EA team made it feel like a breeze. They had such a clear vision of how the space would look that it was easy for us to trust them with all the decisions. If we ever had to go through this process again, it would only be with Essajees Atelier. We can't thank the team enough for giving us this beautiful home!",
    author: "Manoj Jain",
    title: "OWNER, KAY KAY INTERNATIONAL"
  },
  {
    id: 3,
    quote: "We are 3 generations living in the same house and that meant catering to all ages. We also went for a fusion aesthetic mixing traditional architecture with modern interiors. Sarah's team navigated this problem statement beautifully and patiently iterating through the process and today when I see my sons sleeping on the jhoola, I just think to myself: a job well done. The team has been super helpful post handover as well helping us patiently with connects and some basic hand holding. All in all a great experience and a big thank you.",
    author: "Sunith Reddy",
    title: "FOUNDER, BEFOREST"
  },
  {
    id: 4,
    quote: "I am delighted to be able to share our appreciation for the office interior design work and our wonderful experience in working with Sarah and her team at Essajees Atelier. Their exceptional talent and unwavering dedication brought to life our vision in creating a warm and inviting space for our clients and employees alike. The harmonious blend of colors, textures, and thoughtful design elements has transformed our office into a place that feels like home, fostering a sense of community and collaboration among our team.",
    author: "Soumya Rajan",
    title: "FOUNDER, WATERFIELD"
  },
  {
    id: 5,
    quote: "Essajees was the ultimate pleasure to work with. The innovation, creativity and design was excellent and the attention to detail really put their work over the top. The team took the time to understand the requirement, laid out realistic budgets and made sure to follow up with contractors to ensure that delivery was timely. Thank you Sarah and team, you guys epitomised commitment, professionalism and most of all passion!",
    author: "Yohan Daswani",
    title: "PROMOTER, CHARAGH DIN SHIRTS"
  },
  {
    id: 6,
    quote: "I had the pleasure of working with Essajees, and I cannot express how impressed and grateful I am for the incredible work they did. From start to finish, Sarah and her team was attentive, knowledgeable, and creative, bringing my vision to life in ways I never could have imagined.",
    author: "Sneha Singhi",
    title: "CHEF"
  },
 
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const testimonial = testimonials[current];

  return (
    <section className="py-20 px-6 md:px-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Label */}
        <p className="text-[var(--accent)] font-body text-sm tracking-wider uppercase mb-2">
          Our Clients Say
        </p>

        {/* Main Heading (matching AboutUs style) */}
        <h2 className="font-[Playfair_Display] text-3xl md:text-4xl font-semibold mb-12">
          Testimonials
        </h2>

        {/* Testimonial Container */}
        <div className="relative flex items-center justify-center gap-6 md:gap-10">
          {/* Left Arrow */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border transition-all"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--foreground)',
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex-1  px-8 md:px-12 py-8"
            >
              {/* Quote */}
              <p
                className="text-[var(--foreground)]/80 font-body leading-relaxed text-base sm:text-lg mb-8"
              >
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="border-t pt-6 border-[var(--accent)]/70">
                <p className="font-[Playfair_Display] text-xl text-[var(--foreground)] font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-sm tracking-wide text-[var(--accent)] mt-1 uppercase font-body">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border transition-all"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--foreground)',
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>

       

        {/* Counter */}
        <p
          className="text-sm tracking-widest mt-6 font-body"
          style={{ color: 'var(--accent)' }}
        >
          {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}
