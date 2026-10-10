"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { silkCategories } from "@/data/categories";

export function CategoryDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {silkCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/what-we-buy/${cat.slug}`}
          className="group block relative bg-white border border-[#C6A15B]/35 hover:border-[#B71925] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(183,25,37,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925]"
        >
          <div>
            {/* Image Preview with Hover Zoom */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B71925] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 text-[#E8D5A2]" />
                <span>View Appraisal</span>
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-5">
              <h3
                className="text-lg sm:text-xl font-serif font-bold text-[#14100E] group-hover:text-[#B71925] transition-colors mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed font-normal line-clamp-3 mb-3">
                {cat.shortDescription}
              </p>

              {/* Characteristics Badges */}
              {cat.characteristics && cat.characteristics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-[#C6A15B]/20">
                  {cat.characteristics.slice(0, 2).map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold text-[#B71925] bg-[#B71925]/10 px-2 py-0.5 rounded-full border border-[#B71925]/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="p-4 sm:p-5 pt-0">
            <div className="inline-flex items-center justify-between w-full py-2 px-3.5 bg-[#FAF7F2] group-hover:bg-[#B71925] border border-[#C6A15B]/40 group-hover:border-[#B71925] rounded-lg text-xs uppercase font-bold tracking-wider text-[#14100E] group-hover:text-white transition-all duration-300 shadow-xs">
              <span>View Details &amp; Appraisal Criteria</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B71925] group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
