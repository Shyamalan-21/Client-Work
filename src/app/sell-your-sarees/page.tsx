import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { business, getWhatsAppUrl } from "@/data/business";
import { silkCategories } from "@/data/categories";
import { generalFaqs, sellingProcessSteps } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Sell Your Old Silk Sarees in Chennai | Sri Maruthi Old Silk Buyer T. Nagar",
  description:
    "Sell your vintage and used silk sarees in Chennai. Submit an online enquiry or contact Sri Maruthi Old Silk Buyer on N Usman Road, T. Nagar for transparent individual evaluation.",
  alternates: {
    canonical: "/sell-your-sarees",
  },
};

export default function SellYourSareesPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/30 shadow-xs">
        <Container>
          <Breadcrumbs items={[{ label: "Sell Your Sarees" }]} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] relative border-b border-[#C6A15B]/30 text-center">
        <Container size="narrow">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B71925] mb-2 sm:mb-3">
            Primary Silk Enquiry • T. Nagar, Chennai
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#14100E] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Thinking of Selling Your Old Silk Sarees?
          </h1>

          <GoldDivider className="my-3 sm:my-4" />

          <p className="text-sm sm:text-base text-[#5C4D46] font-normal leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Contact Sri Maruthi Old Silk Buyer in T. Nagar, Chennai, to enquire about selling your old silk sarees, silk dhotis, and other silk garments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button href="#enquiry-form" variant="primary" size="lg">
              Start an Enquiry Below
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp: {business.whatsapp}
            </Button>
            <Button
              href={`tel:${business.phoneRaw}`}
              variant="secondary"
              size="lg"
              leftIcon={<Phone className="w-4 h-4 text-[#B71925]" />}
            >
              Call: {business.phone}
            </Button>
          </div>
        </Container>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-10 lg:py-12 bg-white border-b border-[#C6A15B]/30">
        <Container>
          <SectionHeading
            eyebrow="Our Selling Workflow"
            title="How the Enquiry &amp; Selling Process Works"
            subtitle="Straightforward, respectful, and transparent from your first enquiry to store appraisal."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {sellingProcessSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#C6A15B]/40 shadow-sm flex flex-col items-start hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl font-serif font-bold text-[#B71925] mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#14100E] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Interactive Form Section */}
      <section id="enquiry-form" className="py-10 lg:py-12 bg-[#FAF7F2] border-b border-[#C6A15B]/30">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Online Form"
            title="Submit Your Garment Details"
            subtitle="Fill in basic information about your silk items. We do not ask for sensitive payment or financial details."
            align="center"
          />

          <EnquiryForm />
        </Container>
      </section>

      {/* Garment Categories We Accept */}
      <section className="py-10 lg:py-12 bg-white border-b border-[#C6A15B]/30">
        <Container>
          <SectionHeading
            eyebrow="Accepted Silks"
            title="Garments You Can Enquire About"
            subtitle="We inspect pure silks across major South Indian and pan-Indian handloom centers."
            align="center"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {silkCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/what-we-buy/${c.slug}`}
                className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#C6A15B]/40 rounded-xl hover:border-[#B71925] hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center group"
              >
                <h3 className="text-sm font-bold text-[#14100E] group-hover:text-[#B71925] transition-colors">
                  {c.name}
                </h3>
                <span className="text-[11px] text-[#B71925] font-semibold mt-1 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                  View Category →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Explanation of Individual Evaluation */}
      <section className="py-10 lg:py-12 bg-[#FAF7F2] border-b border-[#C6A15B]/30">
        <Container size="narrow">
          <div className="p-6 sm:p-8 bg-white border-2 border-[#C6A15B]/40 rounded-2xl shadow-lg flex flex-col sm:flex-row items-start gap-5 sm:gap-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#B71925]/10 border border-[#B71925]/30 flex items-center justify-center shrink-0 text-[#B71925]">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <h3
                className="text-lg sm:text-xl font-serif font-bold text-[#14100E] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why Individual Evaluation Matters
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed font-normal mb-3">
                Silk sarees vary in yarn ply, pure versus tested zari composition, and wear condition. Rather than applying indiscriminate deductions or generic flat rates, Sri Maruthi Old Silk Buyer assesses each garment on its own merits in person.
              </p>
              <p className="text-xs font-semibold text-[#B71925]">
                Visit us at 34/146, N Usman Road, T. Nagar, Chennai to have your sarees examined directly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Selling FAQs */}
      <section className="py-10 lg:py-12 bg-white">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Help &amp; Clarifications"
            title="Frequently Asked Questions"
            subtitle="Common questions regarding selling old silk sarees in Chennai."
            align="center"
          />

          <Accordion items={generalFaqs} />
        </Container>
      </section>
    </div>
  );
}
