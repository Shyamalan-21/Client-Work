"use client";

import React from "react";
import { Award, Scale, Eye, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionWrapper";

export function WhyChooseUs() {
  const principles = [
    {
      icon: <Award className="w-8 h-8 text-[#B71925]" />,
      title: "Garment Expertise",
      description:
        "Close attention to silk garments, weave structures, and regional handloom characteristics from Kanchipuram to Varanasi.",
    },
    {
      icon: <Scale className="w-8 h-8 text-[#B71925]" />,
      title: "Fair Evaluation",
      description:
        "Every saree is inspected individually, evaluating genuine fabric weight, density, and metallic zari content without broad assumptions.",
    },
    {
      icon: <Eye className="w-8 h-8 text-[#B71925]" />,
      title: "Direct Transparency",
      description:
        "Clear, open communication about how garments are appraised, tested for authenticity, and valued at our T. Nagar store.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#B71925]" />,
      title: "Enduring Trust",
      description:
        "A straightforward, dignified customer experience rooted in South Indian hospitality and verified business conduct.",
    },
  ];

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-[#C6A15B]/25 relative">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Why Patrons Choose Sri Maruthi"
            subtitle="Built on personal attention, respectful evaluation, and authentic understanding of South Indian silk traditions."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {principles.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-[#C6A15B]/30 hover:border-[#B71925] hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(183,25,37,0.1)] transition-all duration-300 h-full flex flex-col justify-between group shadow-xs">
                <div>
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C6A15B]/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#B71925] group-hover:shadow-[0_4px_16px_rgba(183,25,37,0.25)] transition-all duration-300 shadow-xs">
                    {item.icon}
                  </div>

                  <p className="text-xs uppercase font-mono text-[#B71925] font-bold tracking-widest mb-1.5">
                    0{idx + 1}
                  </p>

                  <h3
                    className="text-base sm:text-lg font-bold text-[#14100E] mb-2 group-hover:text-[#B71925] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
