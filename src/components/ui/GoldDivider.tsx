import React from "react";

interface GoldDividerProps {
  className?: string;
  withEmblem?: boolean;
}

export function GoldDivider({ className = "", withEmblem = true }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C6A15B] to-[#C6A15B] opacity-70" />
      
      {withEmblem ? (
        <div className="flex items-center gap-1 text-[#C6A15B]">
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C6A15B] bg-[#FAF7F2]" />
          <svg
            className="w-5 h-5 text-[#C6A15B]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            {/* Traditional Kalasam / Sacred Lotus Petal icon */}
            <path d="M12 2L14.5 7.5L20 9L15.5 13L17 19L12 16L7 19L8.5 13L4 9L9.5 7.5L12 2Z" opacity="0.9" />
          </svg>
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C6A15B] bg-[#FAF7F2]" />
        </div>
      ) : (
        <span className="w-2 h-2 rotate-45 bg-[#C6A15B] opacity-80" />
      )}

      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C6A15B] to-[#C6A15B] opacity-70" />
    </div>
  );
}
