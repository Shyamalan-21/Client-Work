import React from "react";
import type { Metadata } from "next";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Privacy Policy | Sri Maruthi Old Silk Buyer",
  description:
    "Privacy Policy for Sri Maruthi Old Silk Buyer. Information handling for customer enquiries, phone communications, and store evaluations.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#14100E] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#C6A15B]/30 shadow-xs">
        <Container>
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        </Container>
      </div>

      <section className="py-10 lg:py-14 bg-white">
        <Container size="narrow">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B71925]">
              Legal &amp; Privacy
            </span>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#14100E] mt-2 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Privacy Policy
            </h1>
            <GoldDivider className="my-2.5" />
            <p className="text-xs text-[#5C4D46]">
              Last updated: October 2026 • Sri Maruthi Old Silk Buyer
            </p>
          </div>

          <div className="max-w-none text-sm text-[#5C4D46] leading-relaxed space-y-4 sm:space-y-5 font-normal">
            <section className="p-5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/40 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#14100E] mb-2">
                1. Overview &amp; Business Commitment
              </h2>
              <p>
                Sri Maruthi Old Silk Buyer (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), located at 34/146, N Usman Road, T. Nagar, Chennai, Tamil Nadu - 600017, respects the privacy of our visitors and customers. This Privacy Policy outlines how we collect, handle, and protect your personal information when you use our website or contact us regarding silk garment appraisals.
              </p>
            </section>

            <section className="p-5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/40 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#14100E] mb-2">
                2. Information We Collect
              </h2>
              <p className="mb-2">
                We only collect information that you explicitly submit through our online enquiry and contact forms, or when reaching out directly via phone or WhatsApp:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Your name and contact phone number.</li>
                <li>Your email address (if provided optionally).</li>
                <li>Preferred mode of communication (WhatsApp or telephone call).</li>
                <li>Garment details such as silk category, approximate quantity, and relevant notes.</li>
              </ul>
              <p className="mt-3 text-xs text-[#5C4D46]">
                We do not collect or request sensitive banking, debit/credit card, or financial payment details through our online forms.
              </p>
            </section>

            <section className="p-5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/40 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#14100E] mb-2">
                3. Purpose of Information Use
              </h2>
              <p>
                The information you submit is used solely to respond to your specific enquiry, discuss garment evaluation, answer queries about our T. Nagar store, and coordinate your visit. We do not sell, rent, or lease your personal information to third-party marketing brokers.
              </p>
            </section>

            <section className="p-5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/40 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#14100E] mb-2">
                4. Third-Party Integrations &amp; External Links
              </h2>
              <p>
                Our website includes optional links to external third-party services such as WhatsApp, Google Maps, and Instagram. When you click these links, you interact with their respective platforms under their independent privacy terms.
              </p>
            </section>

            <section className="p-5 bg-[#FAF7F2] rounded-xl border border-[#C6A15B]/40 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-[#14100E] mb-2">
                5. Contacting Us
              </h2>
              <p>
                For questions regarding this policy or the handling of your contact details, you can reach out directly to:
              </p>
              <div className="mt-3 text-xs text-[#5C4D46] space-y-1">
                <p><strong className="text-[#14100E] font-bold">Sri Maruthi Old Silk Buyer</strong></p>
                <p>{business.address.formatted}</p>
                <p>Phone: {business.phone}</p>
                <p>Email: {business.email}</p>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}
