import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { business, getWhatsAppUrl } from "@/data/business";
import { footerNavigation } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#0B0807] border-t border-[#C6A15B]/30 text-[#FFFCF6]/80 pt-10 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-[#C6A15B]/20">
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col gap-3">
            <Logo size="lg" variant="light" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
              T. Nagar, Chennai • Verified Handloom Buyer
            </p>
            <p className="text-sm leading-relaxed text-[#FFFCF6]/70">
              Sri Maruthi Old Silk Buyer is Chennai&apos;s trusted destination for selling old silk sarees, vintage bridal silks, and silk dhotis. Every garment receives an individual, transparent evaluation in T. Nagar.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold block mb-1">
                Additional Services
              </span>
              <p className="text-xs text-[#FFFCF6]/60">
                Gold &amp; silver polishing and repair services available at our store.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-base font-serif font-bold text-[#FFFCF6] tracking-wider uppercase border-b border-[#C6A15B]/30 pb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C6A15B] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C6A15B]/60 text-xs">◆</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Silk Categories */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-base font-serif font-bold text-[#FFFCF6] tracking-wider uppercase border-b border-[#C6A15B]/30 pb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Silk Categories
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {footerNavigation.categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C6A15B] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C6A15B]/60 text-xs">◆</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-base font-serif font-bold text-[#FFFCF6] tracking-wider uppercase border-b border-[#C6A15B]/30 pb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact &amp; Store
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#FFFCF6]/75 leading-relaxed">
                  <p className="font-semibold text-[#FFFCF6]">{business.name}</p>
                  <p>{business.address.street}</p>
                  <p>{business.address.locality}, {business.address.city}</p>
                  <p>{business.address.state} - {business.address.postalCode}</p>
                  <a
                    href={business.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#C6A15B] hover:underline mt-1 text-xs"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hover:text-[#C6A15B] text-xs sm:text-sm transition-colors"
                >
                  {business.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-xs sm:text-sm transition-colors"
                >
                  WhatsApp: {business.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-[#C6A15B] text-xs sm:text-sm transition-colors truncate"
                >
                  {business.email}
                </a>
              </div>

              {/* Social & Digital Card */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 border border-[#C6A15B]/40 rounded hover:bg-[#C6A15B]/20 text-[#C6A15B] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={business.digitalCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C6A15B] border border-[#C6A15B]/40 px-3 py-1.5 rounded hover:bg-[#C6A15B]/20 transition-colors"
                >
                  Digital Card
                </a>
                <a
                  href={business.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFFCF6]/80 border border-white/20 px-3 py-1.5 rounded hover:bg-white/10 transition-colors"
                >
                  Google Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFCF6]/50">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C6A15B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#C6A15B] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
