"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, ImageReveal } from "@/components/motion/MotionWrapper";

export function BusinessIntro() {
  return (
    <section className="py-10 lg:py-14 bg-white relative border-b border-[#C6A15B]/25">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Image with Antique Gold Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageReveal>
              <div className="relative aspect-[4/3] rounded-xl p-2.5 bg-white border-2 border-[#C6A15B]/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] group hover:shadow-[0_16px_45px_rgba(183,25,37,0.14)] hover:border-[#B71925] transition-all duration-500">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/silk/old-silk-sarees.jpg"
                    alt="Authentic Silk and Zari Evaluation at Sri Maruthi Old Silk Buyer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <FadeIn>
              <SectionHeading
                eyebrow="Sri Maruthi Old Silk Buyer"
                title="Where Tradition Finds New Value."
                subtitle="Preserving the dignity of South Indian handlooms through respectful, individual garment evaluation."
                align="left"
              />

              <div className="flex flex-col gap-3.5 text-sm sm:text-base text-[#4A3E39] leading-relaxed font-normal mb-5">
                <p>
                  For generations, silk sarees have graced weddings, family milestones, and auspicious festivals. When these treasured garments have completed their chapter in your family wardrobe, discovering their genuine worth requires experienced, personalized appraisal.
                </p>
                <p>
                  At <strong className="text-[#14100E] font-bold">Sri Maruthi Old Silk Buyer</strong>, located on N Usman Road in T. Nagar, Chennai, we specialize in purchasing old silk sarees, silk dhotis (Pattu Veshti), and traditional silk garments. Each piece is evaluated on its individual silk fiber composition, weave density, and authentic metallic zari threads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 w-full">
                {[
                  "Personalized assessment per garment",
                  "Old & vintage sarees of all conditions",
                  "Authentic silver & gold zari inspection",
                  "Direct store interaction on N Usman Road",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF7F2] border border-[#C6A15B]/30 shadow-xs hover:border-[#B71925] hover:bg-white transition-colors duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#B71925]/10 border border-[#B71925]/40 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#B71925]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#14100E]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#B71925] hover:text-[#9A121E] transition-colors group"
              >
                <span>Read More About Our Business</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
