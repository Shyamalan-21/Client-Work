"use client";

import React from "react";
import { sellingProcessSteps } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function SellingProcess() {
  return (
    <section className="py-10 lg:py-14 bg-[#FAF7F2] relative border-b border-[#C6A15B]/25">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Simple &amp; Transparent"
            title="How Selling Your Silk Works"
            subtitle="A clear, four-step process for evaluating and selling your vintage silk sarees and garments."
            align="center"
          />
        </FadeIn>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative mt-6 mb-8">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-9 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B]/60 to-transparent z-0" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10">
            {sellingProcessSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#C6A15B]/35 hover:border-[#B71925] hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(183,25,37,0.12)] transition-all duration-300 flex flex-col items-center text-center group h-full shadow-xs">
                  {/* Step Circle Badge */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B71925] to-[#8F1018] border-2 border-[#C6A15B] text-[#FFFDF9] font-black text-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(183,25,37,0.4)] transition-all duration-300 shadow-md">
                    {step.step}
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold text-[#14100E] mb-2 group-hover:text-[#B71925] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA Banner inside process */}
        <FadeIn delay={0.2} className="text-center">
          <Button href="/sell-your-sarees" variant="primary" size="lg" className="shadow-md">
            Start Your Silk Enquiry
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
