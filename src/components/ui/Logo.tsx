import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({
  variant = "dark",
  className = "",
  size = "md",
  showText = true,
}: LogoProps) {
  const sizeMap = {
    sm: { imgSize: 42, textTitle: "text-sm", textSub: "text-[9px]" },
    md: { imgSize: 54, textTitle: "text-base sm:text-lg", textSub: "text-[10px]" },
    lg: { imgSize: 76, textTitle: "text-xl sm:text-2xl", textSub: "text-xs" },
  };

  const { imgSize, textTitle, textSub } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925] rounded-sm ${className}`}
      aria-label="Sri Maruthi Old Silk Buyer Homepage"
    >
      {/* Official Circular Logo with Glowing Gold Ring */}
      <div
        className="relative rounded-full overflow-hidden shrink-0 border-2 border-[#C6A15B] shadow-[0_4px_16px_rgba(198,161,91,0.35)] group-hover:border-[#B71925] group-hover:shadow-[0_4px_22px_rgba(183,25,37,0.4)] transition-all duration-500 bg-[#FAF7F2]"
        style={{ width: `${imgSize}px`, height: `${imgSize}px` }}
      >
        <Image
          src="/images/logo/official-logo.png"
          alt="Sri Maruthi Old Silk Buyer Official Logo"
          fill
          priority
          sizes="80px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle radial glare overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif font-black tracking-wider uppercase transition-colors duration-300 ${
                variant === "dark" ? "text-[#14100E] group-hover:text-[#B71925]" : "text-[#FFFCF6] group-hover:text-[#E8D5A2]"
              } ${textTitle}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sri Maruthi
            </span>
          </div>
          <span
            className={`font-bold tracking-[0.22em] uppercase ${
              variant === "dark" ? "text-[#B8860B]" : "text-[#C6A15B]"
            } ${textSub}`}
          >
            Old Silk Buyer • T. Nagar
          </span>
        </div>
      )}
    </Link>
  );
}
