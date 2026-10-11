"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { business, getWhatsAppUrl } from "@/data/business";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change without effect setState cascading
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-[#C6A15B]/35 py-2"
            : "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#C6A15B]/25 py-2.5 sm:py-3"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" variant="dark" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm tracking-wider uppercase font-bold transition-colors duration-200 rounded-sm ${
                    isActive
                      ? "text-[#B71925] border-b-2 border-[#B71925]"
                      : "text-[#14100E] hover:text-[#B71925]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/sell-your-sarees"
              variant="primary"
              size="sm"
              className="text-xs tracking-widest"
            >
              Sell Your Silk
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-[#14100E] hover:text-[#B71925] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Menu Panel */}
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-[#FAF7F2] border-l border-[#C6A15B]/30 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 shadow-2xl ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#C6A15B]/20">
              <Logo size="sm" variant="dark" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#14100E] hover:text-[#B71925]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="py-6 flex flex-col gap-2" aria-label="Mobile Navigation Links">
              {navigationLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 text-base uppercase font-bold tracking-wider border-b border-black/5 transition-colors ${
                      isActive ? "text-[#B71925]" : "text-[#14100E] hover:text-[#B71925]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-[#C6A15B]/20 flex flex-col gap-3">
            <Button
              href="/sell-your-sarees"
              variant="primary"
              onClick={() => setMobileMenuOpen(false)}
              size="md"
              className="w-full text-center"
            >
              Sell Your Silk
            </Button>

            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm text-[#14100E] font-medium border border-[#C6A15B]/40 rounded hover:bg-[#C6A15B]/10 bg-white shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#B71925]" />
              <span>Call: {business.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-sm text-white font-medium bg-[#25D366] rounded hover:bg-[#1EBE5D] shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
