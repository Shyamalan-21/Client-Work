import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-[#5C4D46] py-3.5 ${className}`}>
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-[#B71925] font-medium transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 text-[#B71925]" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              {isLast || !item.href ? (
                <span className="text-[#B71925] font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#B71925] font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
