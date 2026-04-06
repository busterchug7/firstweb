"use client";

import Image from "next/image";
import { caseStudy } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import { FaCircleCheck } from "react-icons/fa6";

export default function CaseStudy() {
  return (
    <section className="py-24 px-6 bg-[#141414] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] mb-4 block">
            Case Study
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] max-w-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {caseStudy.tagline}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Before & After images */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">
                    Before
                  </p>
                  {/* TODO: Replace BEFORE image with real screenshot */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#2A2A2A]">
                    <Image
                      src={caseStudy.beforeImageUrl}
                      alt="Before website screenshot"
                      fill
                      className="object-cover grayscale opacity-70"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#C9A84C]/5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-[#C9A84C]">
                    After
                  </p>
                  {/* TODO: Replace AFTER image with real screenshot */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#C9A84C]/30">
                    <Image
                      src={caseStudy.afterImageUrl}
                      alt="After website screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Client tag */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#9CA3AF] text-sm">
                  {caseStudy.client} — {caseStudy.industry}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Problem / Solution / Results */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-8">
              {/* Problem */}
              <div className="border-l-2 border-[#2A2A2A] pl-5">
                <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-2">
                  The Problem
                </p>
                <p className="text-[#F5F5F5] leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="border-l-2 border-[#C9A84C]/40 pl-5">
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-2">
                  Our Solution
                </p>
                <p className="text-[#F5F5F5] leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="border-l-2 border-[#C9A84C] pl-5">
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-4">
                  The Results
                </p>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCircleCheck
                        className="text-[#C9A84C] mt-0.5 shrink-0"
                        size={14}
                      />
                      <span className="text-[#F5F5F5] text-sm leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
