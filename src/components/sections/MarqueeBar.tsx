"use client";

import { marqueeItems } from "@/lib/data";

export default function MarqueeBar() {
  // Duplicate the list to create seamless looping
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-[#141414] border-y border-[#2A2A2A] py-4 overflow-hidden">
      <p className="sr-only">Industries we serve</p>
      <div className="flex" style={{ width: "max-content" }}>
        {/* First list */}
        <ul className="flex items-center animate-marquee" aria-label="Industries we serve">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="text-[#9CA3AF] text-sm uppercase tracking-widest whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-[#C9A84C] text-xs select-none">◆</span>
            </li>
          ))}
        </ul>
        {/* Duplicate for seamless loop */}
        <ul className="flex items-center animate-marquee" aria-hidden="true">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="text-[#9CA3AF] text-sm uppercase tracking-widest whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-[#C9A84C] text-xs select-none">◆</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
