import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, MessageSquare, Mail, ExternalLink, Navigation } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { business, getWhatsAppUrl } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Sri Maruthi Old Silk Buyers | T. Nagar, Chennai",
  description:
    "Contact Sri Maruthi Old Silk Buyer in T. Nagar, Chennai. Phone & WhatsApp: +91 98403 64567. Address: 34/146, N Usman Road.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/30 shadow-xs">
        <Container>
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] relative border-b border-[#C6A15B]/30 text-center">
        <Container size="narrow">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#B71925] mb-2">
            Store Location &amp; Direct Communication
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#14100E] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Sri Maruthi Old Silk Buyer
          </h1>

          <GoldDivider className="my-3" />

          <p className="text-base sm:text-lg text-[#5C4D46] font-normal leading-relaxed max-w-2xl mx-auto">
            We welcome you to visit our store in T. Nagar, Chennai, or reach out directly by phone, WhatsApp, or through our online contact form.
          </p>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Contact Credentials Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#FAF7F2] border-2 border-[#C6A15B]/40 rounded-2xl p-5 sm:p-7 shadow-md">
                <h2
                  className="text-2xl font-bold text-[#14100E] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {business.name}
                </h2>
                <p className="text-xs uppercase font-bold tracking-wider text-[#B71925] mb-4">
                  T. Nagar, Chennai • Direct Store Support
                </p>

                <div className="space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#C6A15B]/40 flex items-center justify-center text-[#B71925] shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase font-bold text-[#14100E]">
                        Physical Store Address
                      </h3>
                      <p className="text-xs text-[#5C4D46] mt-1 leading-relaxed">
                        {business.address.formatted}
                      </p>
                      <a
                        href={business.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#B71925] font-semibold hover:underline mt-2"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Get Directions on Google Maps</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#C6A15B]/40 flex items-center justify-center text-[#B71925] shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase font-bold text-[#14100E]">
                        Telephone
                      </h3>
                      <a
                        href={`tel:${business.phoneRaw}`}
                        className="text-xs text-[#14100E] hover:text-[#B71925] mt-1 block font-bold transition-colors"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase font-bold text-[#14100E]">
                        WhatsApp Instant Enquiry
                      </h3>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#25D366] hover:underline mt-1 block font-bold"
                      >
                        {business.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#C6A15B]/40 flex items-center justify-center text-[#B71925] shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs uppercase font-bold text-[#14100E]">
                        Email Address
                      </h3>
                      <a
                        href={`mailto:${business.email}`}
                        className="text-xs text-[#14100E] hover:text-[#B71925] mt-1 block break-all font-semibold transition-colors"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>

                  {/* Additional Services & Social Links */}
                  <div className="pt-4 border-t border-[#C6A15B]/20 flex flex-wrap items-center gap-3">
                    <a
                      href={business.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C6A15B]/50 rounded-lg text-xs text-[#14100E] bg-white hover:bg-[#B71925] hover:text-white transition-all shadow-xs"
                    >
                      <FacebookIcon className="w-3.5 h-3.5" />
                      <span>Facebook</span>
                    </a>

                    <a
                      href={business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C6A15B]/50 rounded-lg text-xs text-[#14100E] bg-white hover:bg-[#B71925] hover:text-white transition-all shadow-xs"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>

                    <a
                      href={business.digitalCard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C6A15B]/50 rounded-lg text-xs text-[#14100E] bg-white hover:bg-[#B71925] hover:text-white transition-all shadow-xs"
                    >
                      <span>Digital Card</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={business.googleBusinessProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#C6A15B]/50 rounded-lg text-xs text-[#14100E] bg-white hover:bg-[#B71925] hover:text-white transition-all shadow-xs"
                    >
                      <span>Google Business</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Consultation Card (7 cols) - No forms */}
            <div className="lg:col-span-7 bg-white border-2 border-[#C6A15B]/40 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#B71925] block mb-2">
                  Instant Consultation • No Waiting
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#14100E] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Connect Directly With Our Silk Experts
                </h2>
                <p className="text-sm text-[#4A3E39] leading-relaxed mb-6 font-normal">
                  We have simplified our enquiry process—no forms or signups required. Reach out directly via WhatsApp, call our appraisal specialists, or visit our store in T. Nagar for instant, transparent evaluation of your old silk sarees and zari garments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* WhatsApp Direct Option */}
                  <div className="bg-[#FAF7F2] border border-[#C6A15B]/30 rounded-xl p-5 hover:border-[#25D366] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] mb-3">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#14100E] mb-1">WhatsApp Chat</h3>
                    <p className="text-xs text-[#5C4D46] mb-4 leading-relaxed">
                      Send photos of your saree pallu and border for immediate valuation guidance.
                    </p>
                    <Button
                      href={getWhatsAppUrl("Hello Sri Maruthi Old Silk Buyers, I would like to enquire about selling my silk sarees.")}
                      variant="whatsapp"
                      size="sm"
                      className="w-full text-center"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>

                  {/* Phone Direct Option */}
                  <div className="bg-[#FAF7F2] border border-[#C6A15B]/30 rounded-xl p-5 hover:border-[#B71925] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#B71925]/15 flex items-center justify-center text-[#B71925] mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#14100E] mb-1">Direct Phone Call</h3>
                    <p className="text-xs text-[#5C4D46] mb-4 leading-relaxed">
                      Speak directly with our store appraisal team for questions and timings.
                    </p>
                    <Button
                      href={`tel:${business.phoneRaw}`}
                      variant="primary"
                      size="sm"
                      className="w-full text-center"
                    >
                      Call {business.phone}
                    </Button>
                  </div>
                </div>

                {/* Store Hours & In-Person Walk-in */}
                <div className="border-t border-[#C6A15B]/25 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5C4D46]">
                  <div>
                    <span className="font-semibold text-[#14100E] block">Store Visiting Hours:</span>
                    <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-semibold text-[#B71925] block">Prime Landmark:</span>
                    <span>Directly Opposite to GRT Jewellers, N Usman Road</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Embed Section */}
      <section className="py-10 lg:py-14 bg-[#FAF7F2]">
        <Container>
          <SectionHeading
            eyebrow="Interactive Location"
            title="Finding Our Shop in T. Nagar"
            subtitle="Conveniently situated on N Usman Road, Chennai."
            align="center"
          />

          <div className="bg-white border-2 border-[#C6A15B]/40 rounded-2xl overflow-hidden shadow-lg mt-8">
            <div className="p-4 bg-white border-b border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C4D46]">
              <span>Latitude: 13.04455, Longitude: 80.232295</span>
              <Button
                href={business.googleMapsDirectionsUrl}
                variant="primary"
                size="sm"
                leftIcon={<Navigation className="w-3.5 h-3.5" />}
              >
                Open Turn-by-Turn Directions
              </Button>
            </div>

            <div className="relative w-full h-[380px]">
              <iframe
                title="Sri Maruthi Old Silk Buyer Map Location"
                src="https://maps.google.com/maps?q=13.04455,80.232295&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
