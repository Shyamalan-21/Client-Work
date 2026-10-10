import React from "react";
import { Home, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F2] text-[#14100E] py-20">
      <Container size="narrow" className="text-center">
        <p className="text-xs font-mono uppercase tracking-widest font-bold text-[#B71925] mb-2">
          Page Not Found • 404
        </p>

        <h1
          className="text-4xl sm:text-5xl font-serif font-bold text-[#14100E] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Weave Not Found
        </h1>

        <GoldDivider className="my-4" />

        <p className="text-sm sm:text-base text-[#5C4D46] max-w-md mx-auto mb-8 font-normal">
          The page or silk category you are looking for is unavailable. Explore our categories directory or return to our homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>

          <Button
            href="/what-we-buy"
            variant="secondary"
            size="md"
            leftIcon={<Compass className="w-4 h-4" />}
          >
            Browse Silk Categories
          </Button>
        </div>
      </Container>
    </div>
  );
}
