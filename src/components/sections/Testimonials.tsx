"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            Client Stories
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Don&apos;t Take Our Word for It
          </h2>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.12}>
              <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-7 h-full flex flex-col justify-between hover:border-[#C9A84C]/30 transition-colors duration-300">
                {/* Quote icon */}
                <div>
                  <FaQuoteLeft
                    className="text-[#C9A84C]/30 mb-4"
                    size={24}
                  />
                  <p className="text-[#F5F5F5] text-sm leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer */}
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FaStar key={j} className="text-[#C9A84C]" size={12} />
                    ))}
                  </div>
                  {/* Client info */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[#F5F5F5] text-sm font-medium">
                        {t.name}
                      </p>
                      <p className="text-[#9CA3AF] text-xs">{t.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
