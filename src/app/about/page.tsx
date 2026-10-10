import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { business, getWhatsAppUrl } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Sri Maruthi Old Silk Buyer | T. Nagar Chennai",
  description:
    "Learn about Sri Maruthi Old Silk Buyer located on N Usman Road, T. Nagar. Dedicated to respectful, transparent old silk garment evaluations.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/25">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#F5EFEB] relative border-b border-[#C6A15B]/25 text-center">
        <Container size="narrow">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B71925] mb-2">
            Sri Maruthi Old Silk Buyer • T. Nagar, Chennai
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#14100E] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Tradition of Silk. A Commitment to Trust.
          </h1>

          <GoldDivider className="my-3" />

          <p className="text-base sm:text-lg text-[#4A3E39] font-normal leading-relaxed max-w-2xl mx-auto">
            Situated in Chennai&apos;s celebrated textile quarter on N Usman Road, Sri Maruthi Old Silk Buyer offers an experienced, respectful approach to evaluating and purchasing pre-owned silk sarees and handlooms.
          </p>
        </Container>
      </section>

      {/* Core Narrative */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Visual presentation */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden p-2.5 bg-white border-2 border-[#C6A15B]/50 shadow-lg">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/silk/old-silk-sarees.jpg"
                    alt="Authentic Silk and Zari Evaluation at Sri Maruthi Old Silk Buyer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 border border-[#C6A15B]/40 rounded-lg text-center shadow-md">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#B71925]">
                      Sri Maruthi Old Silk Buyer
                    </p>
                    <p className="text-[11px] text-[#5C4D46] mt-0.5 font-semibold">
                      N Usman Road, T. Nagar • Chennai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Story */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-sm sm:text-base text-[#4A3E39] font-normal leading-relaxed">
              <SectionHeading
                eyebrow="Our Practice"
                title="Honoring the Value of Every Weave"
                subtitle="Behind every vintage saree lies generations of memories, artistry, and material worth."
                align="left"
              />

              <p>
                South Indian handloom traditions represent a monumental heritage. Many households in Tamil Nadu, Karnataka, and Andhra Pradesh keep heirloom trunks filled with vintage Kanchipuram wedding sarees, brocades, and ceremonial dhotis that are rarely worn today.
              </p>

              <p>
                Sri Maruthi Old Silk Buyer was established to provide Chennai residents and visitors with a reputable, straightforward business where they can bring their old silk garments for an individual, transparent evaluation.
              </p>

              <p>
                We inspect each garment personally, checking the genuine silk fiber content, the yarn ply, and examining the metallic composition of the woven zari borders and pallu.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/30 flex items-start gap-3 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B71925] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#14100E] block font-bold">Personal Store Consultation</strong>
                    <span className="text-[#5C4D46]">Direct discussion at our N Usman Road shop.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/30 flex items-start gap-3 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#B71925] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#14100E] block font-bold">Individual Material Appraisal</strong>
                    <span className="text-[#5C4D46]">Evaluated on real fabric &amp; zari characteristics.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Services: Gold & Silver Polishing & Repair */}
      <section className="py-10 lg:py-14 bg-[#FAF7F2] border-b border-[#C6A15B]/25">
        <Container size="narrow">
          <div className="p-6 sm:p-10 bg-white border-2 border-[#C6A15B]/40 rounded-2xl text-center relative overflow-hidden shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#B71925]/10 border-2 border-[#C6A15B] flex items-center justify-center mx-auto mb-3 text-[#B71925]">
              <Sparkles className="w-6 h-6" />
            </div>

            <p className="text-xs uppercase tracking-widest text-[#B71925] font-bold mb-1.5">
              Additional Services
            </p>

            <h2
              className="text-xl sm:text-2xl font-bold text-[#14100E] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gold &amp; Silver Polishing and Repair
            </h2>

            <p className="text-sm text-[#5C4D46] leading-relaxed max-w-xl mx-auto mb-6 font-normal">
              Alongside our primary business of buying old silk sarees and silk garments, Sri Maruthi Old Silk Buyer also offers specialized gold and silver ornament polishing and repair services to help restore traditional jewelry items.
            </p>

            <Button
              href="/contact"
              variant="secondary"
              size="md"
              className="bg-white text-[#14100E] border-2 border-[#C6A15B] hover:border-[#B71925] hover:text-[#B71925]"
            >
              Enquire About Polishing Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Verified Business Information */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25">
        <Container>
          <SectionHeading
            eyebrow="Direct Details"
            title="Business &amp; Contact Credentials"
            subtitle="Verified address and contact points for Sri Maruthi Old Silk Buyer."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="p-5 bg-[#FAF7F2] border border-[#C6A15B]/35 rounded-xl text-center shadow-xs">
              <MapPin className="w-6 h-6 text-[#B71925] mx-auto mb-2.5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#14100E] mb-1.5">
                Store Location
              </h3>
              <p className="text-xs text-[#5C4D46] leading-relaxed">
                {business.address.formatted}
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#C6A15B]/35 rounded-xl text-center shadow-xs">
              <Phone className="w-6 h-6 text-[#B71925] mx-auto mb-2.5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#14100E] mb-1.5">
                Telephone &amp; WhatsApp
              </h3>
              <p className="text-xs text-[#5C4D46]">
                Call: <strong className="text-[#14100E]">{business.phone}</strong>
              </p>
              <p className="text-xs text-[#25D366] font-bold mt-1">
                WhatsApp: {business.whatsapp}
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#C6A15B]/35 rounded-xl text-center shadow-xs">
              <Mail className="w-6 h-6 text-[#B8860B] mx-auto mb-2.5" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#14100E] mb-1.5">
                Email &amp; Inquiries
              </h3>
              <p className="text-xs text-[#5C4D46] break-all">
                {business.email}
              </p>
              <p className="text-xs text-[#B71925] font-semibold mt-1">
                Direct Store Assistance
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to action */}
      <section className="py-10 lg:py-14 bg-gradient-to-r from-[#8F1018] via-[#B71925] to-[#8F1018] text-white text-center border-t border-[#C6A15B]/40 shadow-inner">
        <Container size="narrow">
          <h2
            className="text-2xl sm:text-3xl font-black text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Discuss Your Silk Garments?
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 max-w-md mx-auto font-normal">
            Contact us today or visit our store in T. Nagar to receive an individual appraisal for your sarees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/sell-your-sarees" variant="gold" size="lg">
              Sell Your Sarees
            </Button>
            <Button href={getWhatsAppUrl()} variant="whatsapp" size="lg" leftIcon={<MessageSquare className="w-4 h-4" />}>
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
