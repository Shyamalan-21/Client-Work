"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/business";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Sri Maruthi Old Silk Buyer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
    >
      <MessageCircle className="w-6 h-6 fill-current animate-pulse group-hover:animate-none" />
      <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
