"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Mail, Navigation, ExternalLink, Sparkles } from "lucide-react";
import { business, getWhatsAppUrl } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/MotionWrapper";

export function LocationSection() {
  return (
    <section className="py-10 lg:py-14 bg-[#FAF7F2] relative border-b border-[#C6A15B]/25">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Visit Our Store"
            title="Conveniently Located in T. Nagar"
            subtitle="Visit Sri Maruthi Old Silk Buyers on N Usman Road, exactly opposite to GRT Jewellers in T. Nagar, Chennai."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mt-6">
          {/* Store Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#C6A15B]/40 rounded-xl p-5 sm:p-7 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B71925] mb-2">
                <MapPin className="w-4 h-4 text-[#B71925]" />
                <span>Store Address</span>
              </div>

              <h3
                className="text-2xl font-bold text-[#14100E] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {business.name}
              </h3>
              <p className="text-xs font-bold text-[#B71925] mb-3">
                Direct Store Consultation • T. Nagar, Chennai
              </p>

              <div className="text-sm text-[#4A3E39] leading-relaxed space-y-1 mb-4 border-y border-[#C6A15B]/25 py-3 font-normal">
                <p className="font-semibold text-[#14100E]">{business.address.street}</p>
                <p className="text-[#B71925] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" /> Exactly Opposite to GRT Jewellers
                </p>
                <p>{business.address.locality}, {business.address.city} - {business.address.postalCode}</p>
              </div>

              <div className="space-y-3.5 text-sm text-[#14100E] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B71925]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#B71925]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#5C4D46] block">Phone / WhatsApp</span>
                    <a href={`tel:${business.phoneRaw}`} className="hover:text-[#B71925] font-semibold transition-colors">
                      {business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#5C4D46] block">Instant Chat</span>
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] font-semibold transition-colors">
                      WhatsApp: {business.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C6A15B]/15 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B8860B]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-[#5C4D46] block">Email</span>
                    <a href={`mailto:${business.email}`} className="hover:text-[#B71925] font-medium transition-colors">
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C6A15B]/25 flex flex-col sm:flex-row gap-3">
              <Button
                href={business.googleMapsDirectionsUrl}
                variant="primary"
                size="md"
                leftIcon={<Navigation className="w-4 h-4" />}
                className="w-full text-center"
              >
                Get Directions
              </Button>
              <Button
                href={business.googleBusinessProfile}
                variant="secondary"
                size="md"
                rightIcon={<ExternalLink className="w-4 h-4 text-[#B71925]" />}
                className="w-full text-center bg-white text-[#14100E] border border-[#C6A15B] hover:border-[#B71925] hover:text-[#B71925]"
              >
                Google Profile
              </Button>
            </div>
          </div>

          {/* Interactive Map Embed / Preview (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#C6A15B]/35 rounded-xl overflow-hidden min-h-[360px] relative shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col">
            <div className="bg-[#FAF7F2] px-4 py-3 border-b border-[#C6A15B]/25 flex items-center justify-between text-xs text-[#5C4D46]">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Store Coordinates: 13.04455° N, 80.232295° E
              </span>
              <a
                href={business.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B71925] font-bold hover:underline flex items-center gap-1"
              >
                Open in Full Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full flex-1 min-h-[340px]">
              <iframe
                title="Sri Maruthi Old Silk Buyer Location on N Usman Road T. Nagar Chennai"
                src="https://maps.google.com/maps?q=13.04455,80.232295&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
