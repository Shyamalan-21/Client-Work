"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-[#C6A15B]/35 hover:border-[#B71925] transition-colors duration-300 overflow-hidden shadow-xs">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B71925] transition-colors"
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-[#B71925] shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base font-bold text-[#14100E] hover:text-[#B71925] transition-colors">
            {question}
          </span>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-[#B71925] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#8F1018]" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C4D46] leading-relaxed pl-12 border-t border-[#C6A15B]/15 font-normal">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          defaultOpen={idx === 0}
        />
      ))}
    </div>
  );
}
