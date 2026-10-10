import React from "react";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { Hero } from "@/components/home/Hero";
import { BusinessIntro } from "@/components/home/BusinessIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SellingProcess } from "@/components/home/SellingProcess";
import { SilkEditorial } from "@/components/home/SilkEditorial";
import { ConversionBanner } from "@/components/home/ConversionBanner";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* Session brand reveal */}
      <BrandIntroduction />

      {/* Main Art-Directed Sections */}
      <Hero />
      <BusinessIntro />
      <CategoryShowcase />
      <WhyChooseUs />
      <SellingProcess />
      <SilkEditorial />
      <ConversionBanner />
      <LocationSection />
    </>
  );
}
