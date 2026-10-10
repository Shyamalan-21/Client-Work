"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { silkCategories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function CategoryShowcase() {
  // Show key 6 categories on home showcase
  const featuredSlugs = [
    "kanchipuram-silk-sarees",
    "banarasi-silk-sarees",
    "mysore-silk-sarees",
    "old-silk-sarees",
    "silk-dhotis",
    "dharmavaram-silk-sarees",
  ];

  const featured = silkCategories.filter((c) => featuredSlugs.includes(c.slug));

  return (
    <section className="py-10 lg:py-14 bg-[#FAF7F2] relative border-b border-[#C6A15B]/25">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="What We Buy"
            title="Treasured Silks We Evaluate"
            subtitle="Explore the handloom traditions and garment categories we inspect at Sri Maruthi Old Silk Buyer in T. Nagar, Chennai."
            align="center"
          />
        </FadeIn>

        {/* Editorial Grid of Silk Tiles */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((category) => (
            <StaggerItem key={category.slug}>
              <Link
                href={`/what-we-buy/${category.slug}`}
                className="group block relative bg-white rounded-xl overflow-hidden border border-[#C6A15B]/35 hover:border-[#B71925] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(183,25,37,0.14)] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925]"
              >
                {/* Image Container with Restrained Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 right-3 bg-[#B71925] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">
                    Individual Appraisal
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5">
                  <h3
                    className="text-lg font-bold text-[#14100E] group-hover:text-[#B71925] transition-colors mb-1.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4D46] line-clamp-2 leading-relaxed mb-3.5 font-normal">
                    {category.shortDescription}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#C6A15B]/25 text-xs">
                    <span className="text-[#B71925] font-bold tracking-wider uppercase flex items-center gap-1 group-hover:text-[#8F1018] transition-colors">
                      View Details &amp; Sell
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#B71925] transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Categories Link */}
        <FadeIn delay={0.2} className="mt-8 text-center">
          <Link
            href="/what-we-buy"
            className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-bold text-[#14100E] bg-white px-7 py-3.5 border-2 border-[#C6A15B] rounded-full hover:border-[#B71925] hover:bg-[#B71925] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>View All Silk Categories We Buy</span>
            <ArrowRight className="w-4 h-4 text-[#B71925] group-hover:text-white" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
