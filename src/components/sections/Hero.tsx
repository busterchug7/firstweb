"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* TODO: Replace with a real hero image that represents your work */}
      <Image
        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80"
        alt="Web design workspace"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0A]" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow tag */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-1.5 border border-[#C9A84C]/50 text-[#C9A84C] text-xs uppercase tracking-[0.2em] rounded-full">
            Custom Web Development
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Websites That{" "}
          <span className="text-[#C9A84C]">Work</span>
          <br />
          As Hard As You Do
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Custom-built websites for barber shops, law firms, restaurants,
          construction companies, and businesses across every industry.
          Beautiful design. Real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] font-semibold rounded hover:bg-[#a8873c] transition-all duration-200 hover:scale-105 active:scale-100 cursor-pointer border-none text-sm tracking-wide"
          >
            Start Your Project →
          </button>
          <button
            onClick={() => scrollToSection("#portfolio")}
            className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-medium rounded hover:bg-[#C9A84C]/10 transition-all duration-200 cursor-pointer bg-transparent text-sm tracking-wide"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {[
            { value: "50+", label: "Sites Launched" },
            { value: "12+", label: "Industries Served" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-bold text-[#C9A84C]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[#9CA3AF] text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
