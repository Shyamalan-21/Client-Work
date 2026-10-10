"use client";

import React from "react";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { business, getWhatsAppUrl } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function ConversionBanner() {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden bg-gradient-to-r from-[#8F1018] via-[#B71925] to-[#8F1018] text-white border-y border-[#C6A15B]/50 shadow-[0_12px_40px_rgba(143,16,24,0.4)]">
      {/* Subtle traditional gold filigree lattice watermark */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8D5A2_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <FadeIn>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#E8D5A2] mb-2">
            Sri Maruthi Old Silk Buyer • T. Nagar, Chennai
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FFFCF6] mb-3 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Give Your Silk a New Chapter?
          </h2>

          <p className="text-sm sm:text-base text-[#FFFCF6]/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Get in touch with Sri Maruthi Old Silk Buyer to enquire about selling your old silk sarees and garments. We look forward to evaluating your collection in T. Nagar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/sell-your-sarees"
              variant="gold"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Sell Your Sarees
            </Button>

            <Button
              href={`tel:${business.phoneRaw}`}
              variant="outline"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-[#E8D5A2]" />}
              className="w-full sm:w-auto border-[#E8D5A2] text-white hover:bg-white/10"
            >
              Call Us: {business.phone}
            </Button>

            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
