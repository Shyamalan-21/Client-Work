"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone, MessageSquare, CheckCircle, LayoutGrid } from "lucide-react";
import { SilkCategory, silkCategories } from "@/data/categories";
import { business, getWhatsAppUrl } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn, StaggerContainer } from "@/components/motion/MotionWrapper";

interface CategoryPageTemplateProps {
  category: SilkCategory;
}

export function CategoryPageTemplate({ category }: CategoryPageTemplateProps) {
  const currentIndex = silkCategories.findIndex((c) => c.slug === category.slug);
  const prevCategory =
    silkCategories[(currentIndex - 1 + silkCategories.length) % silkCategories.length];
  const nextCategory = silkCategories[(currentIndex + 1) % silkCategories.length];

  const otherCategories = silkCategories.filter((c) => c.slug !== category.slug);

  const whatsappPrefilled = `Hello Sri Maruthi Old Silk Buyer, I would like to enquire about selling my ${category.name}. Please guide me on evaluation.`;

  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/25">
        <Container>
          <Breadcrumbs
            items={[
              { label: "What We Buy", href: "/what-we-buy" },
              { label: category.name },
            ]}
          />
        </Container>
      </div>

      {/* Interactive Silk Category Quick-Switcher Strip */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#C6A15B]/30 sticky top-[69px] sm:top-[73px] z-30 shadow-xs">
        <Container>
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none no-scrollbar">
            <Link
              href="/what-we-buy"
              className="shrink-0 text-xs uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-[#B71925]/30 text-[#B71925] bg-[#B71925]/5 hover:bg-[#B71925] hover:text-white transition-all flex items-center gap-1.5"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Overview</span>
            </Link>

            <span className="text-[#C6A15B]/40 text-xs">|</span>

            {silkCategories.map((c) => {
              const isCurrent = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  href={`/what-we-buy/${c.slug}`}
                  className={`shrink-0 text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                    isCurrent
                      ? "bg-[#B71925] text-white border border-[#B71925] shadow-xs font-bold"
                      : "bg-white text-[#14100E] border border-[#C6A15B]/35 hover:border-[#B71925] hover:text-[#B71925] hover:bg-[#FAF7F2]"
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Category Hero Section */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5EFEB] relative border-b border-[#C6A15B]/25">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B71925]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#B71925]">
                    Sri Maruthi Old Silk Buyer • T. Nagar, Chennai
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#14100E] leading-tight mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category.name} Buyers in Chennai
                </h1>

                <p className="text-base sm:text-lg text-[#8A6200] font-serif font-bold italic mb-4 sm:mb-6">
                  {category.heroHeadline}
                </p>

                <p className="text-sm sm:text-base text-[#4A3E39] leading-relaxed font-normal mb-6 sm:mb-8 max-w-xl">
                  {category.longDescription}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <Button
                    href="/sell-your-sarees"
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Start an Enquiry
                  </Button>

                  <Button
                    href={getWhatsAppUrl(whatsappPrefilled)}
                    variant="whatsapp"
                    size="md"
                    leftIcon={<MessageSquare className="w-4 h-4" />}
                  >
                    WhatsApp Enquiry
                  </Button>

                  <Button
                    href={`tel:${business.phoneRaw}`}
                    variant="secondary"
                    size="md"
                    leftIcon={<Phone className="w-4 h-4 text-[#B71925]" />}
                    className="bg-white text-[#14100E] border border-[#C6A15B] hover:border-[#B71925] hover:text-[#B71925]"
                  >
                    Call Us
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Image Tile */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden p-2.5 bg-white border-2 border-[#C6A15B]/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={`${category.name} Appraisal at Sri Maruthi Old Silk Buyer`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Craft Characteristics & Evaluation Factors */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Characteristics */}
            <FadeIn className="bg-[#FAF7F2] p-6 sm:p-7 rounded-xl border border-[#C6A15B]/35 shadow-xs">
              <h2
                className="text-xl sm:text-2xl font-serif font-bold text-[#14100E] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Distinguishing Characteristics
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4D46] mb-6 leading-relaxed font-normal">
                {category.craftDetails}
              </p>

              <ul className="space-y-3">
                {category.characteristics.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#14100E] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#B71925] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Evaluation Factors */}
            <FadeIn delay={0.1} className="bg-[#FAF7F2] p-8 rounded-xl border border-[#C6A15B]/35 shadow-xs">
              <h2
                className="text-xl sm:text-2xl font-serif font-bold text-[#14100E] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How We Evaluate This Category
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4D46] mb-6 leading-relaxed font-normal">
                We perform an individual assessment based on genuine textile traits rather than flat estimates:
              </p>

              <ul className="space-y-3">
                {category.evaluationFactors.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#14100E] font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B71925] border border-[#C6A15B] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Category FAQs */}
      {category.faqs.length > 0 && (
        <section className="py-10 lg:py-12 bg-[#FAF7F2] border-b border-[#C6A15B]/25">
          <Container size="narrow">
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <span className="text-xs uppercase font-bold tracking-widest text-[#B71925]">
                  Frequently Asked Questions
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-serif font-black text-[#14100E] mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Selling Your {category.name}
                </h2>
                <GoldDivider className="my-2.5 sm:my-3" />
              </div>

              <Accordion items={category.faqs} />
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Sequential & All Categories Navigation */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25">
        <Container>
          {/* Previous / Next Pagination Controls */}
          <div className="bg-[#FAF7F2] border border-[#C6A15B]/35 rounded-xl p-4 sm:p-5 mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <Link
              href={`/what-we-buy/${prevCategory.slug}`}
              className="flex items-center gap-3 text-sm text-[#14100E] hover:text-[#B71925] group transition-colors w-full sm:w-auto"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#C6A15B]/50 flex items-center justify-center group-hover:border-[#B71925] group-hover:bg-[#B71925]/10 shrink-0 shadow-xs">
                <ArrowLeft className="w-4 h-4 text-[#B71925] group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-[#5C4D46] block tracking-wider">
                  Previous Category
                </span>
                <span className="font-serif font-bold text-sm text-[#14100E] group-hover:text-[#B71925]">
                  {prevCategory.name}
                </span>
              </div>
            </Link>

            <Link
              href="/what-we-buy"
              className="px-4 sm:px-5 py-2 bg-white border border-[#C6A15B]/50 hover:border-[#B71925] rounded-full text-xs uppercase font-bold tracking-widest text-[#14100E] hover:text-[#B71925] transition-colors shadow-xs"
            >
              Overview Directory
            </Link>

            <Link
              href={`/what-we-buy/${nextCategory.slug}`}
              className="flex items-center justify-end gap-3 text-sm text-[#14100E] hover:text-[#B71925] group transition-colors w-full sm:w-auto text-right"
            >
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[#5C4D46] block tracking-wider">
                  Next Category
                </span>
                <span className="font-serif font-bold text-sm text-[#14100E] group-hover:text-[#B71925]">
                  {nextCategory.name}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#C6A15B]/50 flex items-center justify-center group-hover:border-[#B71925] group-hover:bg-[#B71925]/10 shrink-0 shadow-xs">
                <ArrowRight className="w-4 h-4 text-[#B71925] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Heading for Other Categories */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B71925]">
              Browse All Other Varieties
            </span>
            <h2
              className="text-2xl sm:text-3xl font-serif font-black text-[#14100E] mt-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigate Other Silk Sarees &amp; Garments
            </h2>
            <GoldDivider className="my-2.5 sm:my-3" />
          </div>

          {/* Grid of All Other 10 Categories */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/what-we-buy/${other.slug}`}
                className="group block p-3.5 bg-white border border-[#C6A15B]/30 rounded-xl hover:border-[#B71925] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(183,25,37,0.12)] transition-all duration-300 shadow-xs"
              >
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-2.5 bg-black/10">
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    sizes="220px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-serif font-bold text-[#14100E] group-hover:text-[#B71925] transition-colors line-clamp-1">
                  {other.name}
                </h3>
                <p className="text-[11px] text-[#5C4D46] line-clamp-2 mt-1 leading-snug font-normal">
                  {other.shortDescription}
                </p>
              </Link>
            ))}
          </StaggerContainer>

          <div className="mt-8 sm:mt-10 text-center">
            <Button href="/what-we-buy" variant="primary" size="md">
              Back to Full Overview Directory
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
