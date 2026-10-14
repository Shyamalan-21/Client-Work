"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function SilkEditorial() {
  return (
    <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25 relative">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Artisan Heritage"
            title="Silk, Zari &amp; Timeless Craftsmanship"
            subtitle="Understanding the material artistry behind authentic South Indian handlooms."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mt-6">
          {/* Left Column: Textile Narrative */}
          <FadeIn direction="left" className="flex flex-col gap-3.5 text-sm sm:text-base text-[#4A3E39] leading-relaxed font-normal">
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-l-4 border-[#B71925] border-y border-r border-[#C6A15B]/30 rounded-r-xl shadow-xs">
              <h3
                className="text-base sm:text-lg font-bold text-[#14100E] mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Legacy of Pure Mulberry Silk
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4D46]">
                Authentic South Indian sarees originate from long-filament mulberry silk yarns, spun with specialized ply density. This gives traditional garments their recognizable weight, natural luster, and enduring resilience across decades.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-l-4 border-[#C6A15B] border-y border-r border-[#C6A15B]/30 rounded-r-xl shadow-xs">
              <h3
                className="text-base sm:text-lg font-bold text-[#14100E] mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Character of Authentic Zari
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4D46]">
                Traditional pure zari consists of fine silver wire electroplated with gold, wound tightly around a silk core yarn. While not every silk saree incorporates precious metals, heirloom and vintage bridal sarees often carry substantial metallic thread density that warrants careful, experienced inspection.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-l-4 border-[#B71925] border-y border-r border-[#C6A15B]/30 rounded-r-xl shadow-xs">
              <h3
                className="text-base sm:text-lg font-bold text-[#14100E] mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Individual Garment Appraisal
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4D46]">
                Because weaving traditions differ dramatically—from the dense korvai borders of Kanchipuram to the fine brocades of Varanasi and crepe drape of Mysore—Sri Maruthi Old Silk Buyer evaluates each item individually on its physical merit and metallic attributes.
              </p>
            </div>
          </FadeIn>

          {/* Right Column: Visual Composition */}
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-lg">
                <Image
                  src="/images/silk/kanchipuram.jpg"
                  alt="Kanchipuram Silk Pallu Weaving"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-lg">
                  <Image
                    src="/images/silk/banarasi.jpg"
                    alt="Banarasi Brocade Zari Weave"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-lg">
                  <Image
                    src="/images/silk/mysore.jpg"
                    alt="Mysore Silk Gold Lace Border"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
