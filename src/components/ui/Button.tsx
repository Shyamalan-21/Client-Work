import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-xl select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-widest font-semibold",
    lg: "px-8 py-4 text-base uppercase tracking-widest font-bold",
  };

  const variantClasses = {
    primary:
      "relative overflow-hidden bg-gradient-to-r from-[#B71925] to-[#8F1018] text-white border border-[#C6A15B]/50 hover:from-[#C71B2B] hover:to-[#B71925] hover:shadow-[0_6px_25px_rgba(183,25,37,0.35)] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 shadow-[0_4px_16px_rgba(183,25,37,0.25)]",
    secondary:
      "relative overflow-hidden bg-white text-[#14100E] border-2 border-[#C6A15B]/60 hover:bg-[#B71925] hover:text-white hover:border-[#B71925] hover:shadow-[0_4px_16px_rgba(183,25,37,0.2)] transition-all shadow-xs",
    gold:
      "relative overflow-hidden bg-gradient-to-r from-[#E5C378] via-[#C6A15B] to-[#B88B38] text-[#14100E] font-bold border border-[#F3E5AB] hover:brightness-105 hover:shadow-[0_6px_25px_rgba(198,161,91,0.4)] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 shadow-[0_4px_16px_rgba(198,161,91,0.25)]",
    outline:
      "bg-transparent text-white border-2 border-white/90 hover:bg-white hover:text-[#14100E] transition-colors shadow-xs",
    whatsapp:
      "relative overflow-hidden bg-[#25D366] text-white border border-[#20BA5A] hover:bg-[#1EBE5D] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 shadow-[0_4px_16px_rgba(37,211,102,0.25)]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : leftIcon ? (
        <span className="mr-2 inline-flex items-center">{leftIcon}</span>
      ) : null}
      <span>{children}</span>
      {!isLoading && rightIcon ? (
        <span className="ml-2 inline-flex items-center transition-transform group-hover:translate-x-1">
          {rightIcon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal && href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
