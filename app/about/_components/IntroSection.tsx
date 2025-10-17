"use client"
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-primary text-sm font-semibold uppercase mb-6 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          About Us
        </div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A Legacy of Excellence, How Our Dedication Fuels Everything I Do
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-center sm:text-lg text-sm mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From day one, My mission has been to create solutions that inspire,
          empower, and make a difference. With a commitment to quality and
          creativity.
        </motion.p>
      </div>
    </section>
  );
};
