import React from "react";
import { GoldDivider } from "./GoldDivider";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-6 sm:mb-8 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-1.5 ${
            theme === "dark" ? "text-[#E8D5A2]" : "text-[#B71925]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight ${
          theme === "dark" ? "text-[#FFFCF6]" : "text-[#14100E]"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>

      {isCenter ? (
        <GoldDivider className="my-2.5 sm:my-3" />
      ) : (
        <div className="h-[2px] w-20 bg-gradient-to-r from-[#B71925] via-[#C6A15B] to-transparent my-2.5 sm:my-3" />
      )}

      {subtitle && (
        <p
          className={`max-w-2xl text-sm sm:text-base leading-relaxed font-normal ${
            isCenter ? "mx-auto" : ""
          } ${theme === "dark" ? "text-[#FFFCF6]/85" : "text-[#5C4D46]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
