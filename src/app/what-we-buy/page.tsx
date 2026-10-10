import React from "react";
import type { Metadata } from "next";
import { MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { business, getWhatsAppUrl } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryDirectory } from "@/components/categories/CategoryDirectory";

export const metadata: Metadata = {
  title: "What We Buy | Old Silk Sarees & Garments Directory | Chennai",
  description:
    "Complete directory of silk saree varieties and garments bought by Sri Maruthi Old Silk Buyer in T. Nagar, Chennai. Kanchipuram, Banarasi, Mysore, Silk Dhotis & more.",
  alternates: {
    canonical: "/what-we-buy",
  },
};

export default function WhatWeBuyPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/25">
        <Container>
          <Breadcrumbs items={[{ label: "What We Buy" }]} />
        </Container>
      </div>

      {/* Directory Hero */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5EFEB] relative border-b border-[#C6A15B]/25 text-center">
        <Container size="narrow">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B71925] mb-2">
            Garment Directory • Sri Maruthi Old Silk Buyer
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#14100E] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Silk Sarees &amp; Garments We Buy
          </h1>

          <GoldDivider className="my-3" />

          <p className="text-base sm:text-lg text-[#4A3E39] font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Explore our comprehensive directory of silk sarees, dhotis, and traditional textiles accepted for evaluation at our store in T. Nagar, Chennai. Click on any category below to view detailed appraisal criteria and selling options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/sell-your-sarees" variant="primary" size="lg">
              Sell Your Silk Sarees
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Ask on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* Full Category Grid */}
      <section className="py-10 lg:py-14 bg-[#FAF7F2] border-b border-[#C6A15B]/25">
        <Container>
          <SectionHeading
            eyebrow="Silk Varieties"
            title="Browse by Handloom Tradition"
            subtitle="Click on any category card to view individual weave characteristics, evaluation criteria, and selling details."
            align="center"
          />

          <div className="mt-6">
            <CategoryDirectory />
          </div>
        </Container>
      </section>

      {/* Individual Evaluation Explanation */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25">
        <Container size="narrow">
          <div className="bg-[#FAF7F2] p-6 sm:p-8 border-2 border-[#C6A15B]/40 rounded-2xl text-center shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#B71925]/10 border-2 border-[#C6A15B] flex items-center justify-center mx-auto mb-4 text-[#B71925]">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2
              className="text-2xl sm:text-3xl font-black text-[#14100E] mb-2.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every Garment is Evaluated on Its Own Merit
            </h2>

            <p className="text-sm sm:text-base text-[#5C4D46] leading-relaxed max-w-xl mx-auto mb-6 font-normal">
              We do not believe in broad generalizations. Whether you bring an antique Kanchipuram wedding saree or a collection of pure silk dhotis, each piece is inspected for fabric purity, weight, and authentic zari composition directly at our shop in T. Nagar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/sell-your-sarees" variant="primary" size="md">
                Start an Enquiry
              </Button>
              <Button
                href={`tel:${business.phoneRaw}`}
                variant="secondary"
                size="md"
                leftIcon={<Phone className="w-4 h-4 text-[#B71925]" />}
                className="bg-white text-[#14100E] border border-[#C6A15B] hover:border-[#B71925] hover:text-[#B71925]"
              >
                Call: {business.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
