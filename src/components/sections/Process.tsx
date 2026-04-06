"use client";

import { processSteps } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            How It Works
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From First Call to{" "}
            <span className="text-[#C9A84C]">Live Site</span>
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

          {processSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.12} direction="up">
              <div className="relative text-center lg:text-left">
                {/* Step number — large dimmed background text */}
                <p
                  className="text-7xl font-bold text-[#C9A84C]/10 leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.step}
                </p>

                {/* Dot indicator */}
                <div className="hidden lg:flex absolute top-7 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C9A84C] ring-4 ring-[#0A0A0A]" />

                <h3
                  className="text-[#F5F5F5] font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
