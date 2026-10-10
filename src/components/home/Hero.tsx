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
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] py-10 lg:py-16 border-b border-[#C6A15B]/25">
      {/* Background ambient warm radiant glow and silk textile shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#B71925]/10 blur-[110px]" />
        <div className="absolute inset-0 textile-pattern opacity-40" />
      </div>

      {/* Traditional geometric border ornamentation */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Editorial & Conversion CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#14100E] tracking-tight leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Give Your <span className="text-[#B71925]">Old Silk</span> a{" "}
              <span className="gold-gradient-text">New Value.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4A3E39] leading-relaxed max-w-xl mb-6 font-normal">
              Looking to sell your old silk sarees or silk garments?{" "}
              <strong className="text-[#14100E] font-bold">Sri Maruthi Old Silk Buyer</strong> in{" "}
              <span className="text-[#B71925] font-semibold">T. Nagar, Chennai</span>, offers a convenient way to
              enquire about your treasured silks and receive an individual, transparent evaluation.
            </p>

            {/* Call to Actions with Hover Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
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
            <div className="pt-4 border-t border-[#C6A15B]/30 flex flex-wrap items-center gap-6 text-xs text-[#5C4D46]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B71925] shrink-0" />
                <span className="font-medium text-[#14100E]">34/146, N Usman Road, T. Nagar, Chennai</span>
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

          {/* Right Column: Frameless, Clean Devotional Lord Hanuman (Maruthi) Hero Artwork (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Divine Radiance Aura behind the picture */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#B71925]/20 via-[#D4AF37]/30 to-amber-200/40 blur-3xl pointer-events-none" />

            {/* Frameless floating image presentation */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(183,25,37,0.18)] border-2 border-[#C6A15B]/50 bg-white">
                <Image
                  src="/images/hero/hanuman-hero.jpg"
                  alt="Lord Maruthi (Hanuman) - Sri Maruthi Old Silk Buyer"
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
