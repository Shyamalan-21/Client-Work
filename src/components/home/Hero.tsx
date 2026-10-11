"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MessageSquare, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] min-h-[calc(100dvh-68px)] lg:h-[calc(100dvh-68px)] py-6 lg:py-0 border-b border-[#C6A15B]/25">
      {/* Background ambient warm radiant glow and silk textile shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/15 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B71925]/10 blur-[100px]" />
        <div className="absolute inset-0 textile-pattern opacity-40" />
      </div>

      {/* Traditional geometric border ornamentation */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent" />

      <Container className="relative z-10 w-full h-full flex items-center py-2 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center w-full">
          {/* Left Column: Brand Editorial & Conversion CTAs (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start"
          >
            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-black text-[#14100E] tracking-tight leading-[1.12] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Give Your <span className="text-[#B71925]">Old Silk</span> a{" "}
              <span className="gold-gradient-text">New Value.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#4A3E39] leading-relaxed max-w-xl mb-4 lg:mb-5 font-normal">
              Looking to sell your old silk sarees or silk garments?{" "}
              <strong className="text-[#14100E] font-bold">Sri Maruthi Old Silk Buyers</strong> on N Usman Road in{" "}
              <span className="text-[#B71925] font-semibold">T. Nagar, Chennai</span>{" "}
              <span className="inline-block bg-[#B71925]/10 text-[#B71925] font-semibold px-2 py-0.5 rounded text-xs sm:text-sm">
                (Right Opposite to GRT Jewellers)
              </span>, offers a convenient way to enquire about your treasured silks and receive an individual, transparent evaluation.
            </p>

            {/* Call to Actions with Hover Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4 lg:mb-5">
              <Button
                href="/sell-your-sarees"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-center relative group overflow-hidden shadow-md"
              >
                Sell Your Silk
              </Button>

              <Button
                href={getWhatsAppUrl()}
                variant="secondary"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
                className="w-full sm:w-auto text-center group bg-white text-[#14100E] border-2 border-[#C6A15B] hover:border-[#B71925] hover:text-[#B71925] shadow-sm hover:shadow-md"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Verified Location & Business Metadata Trust Bar */}
            <div className="pt-3 border-t border-[#C6A15B]/30 flex flex-wrap items-center gap-4 lg:gap-6 text-xs text-[#5C4D46]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B71925] shrink-0" />
                <span className="font-medium text-[#14100E]">34/146, N Usman Road, T. Nagar (Opp. GRT Jewellers)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B71925]" />
                <span>Established in <strong className="text-[#14100E]">T. Nagar, Chennai</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                <span className="font-medium text-[#14100E]">Individual Garment Appraisal</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Devotional Lord Hanuman Artwork (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center h-full mb-2 lg:mb-0"
          >
            {/* Ambient Divine Radiance Aura behind the picture */}
            <div className="absolute w-[240px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[400px] rounded-full bg-gradient-to-tr from-[#B71925]/20 via-[#D4AF37]/30 to-amber-200/40 blur-3xl pointer-events-none" />

            {/* Frameless floating image presentation */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative h-[250px] sm:h-[320px] lg:h-[min(540px,calc(100dvh-130px))] max-h-[560px] aspect-[3/4] flex items-center justify-center group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(183,25,37,0.18)] border-2 border-[#C6A15B]/50 bg-white">
                <Image
                  src="/images/hero/hanuman-hero.jpg"
                  alt="Lord Maruthi (Hanuman) - Sri Maruthi Old Silk Buyers"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft natural bottom gradient feathering */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
