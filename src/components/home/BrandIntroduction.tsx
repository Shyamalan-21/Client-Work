"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function BrandIntroduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      try {
        const hasSeenIntro = sessionStorage.getItem("maruthi_intro_seen");
        if (hasSeenIntro) {
          return;
        }
        setIsVisible(true);
        const dismissTimer = setTimeout(() => {
          setIsVisible(false);
          try {
            sessionStorage.setItem("maruthi_intro_seen", "true");
          } catch {
            // ignore storage write errors
          }
        }, 1800);

        return () => clearTimeout(dismissTimer);
      } catch {
        // storage unavailable (e.g. private mode)
      }
    }, 20);

    return () => clearTimeout(mountTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFEB] pointer-events-none"
        >
          {/* Subtle gold and crimson radiant halos */}
          <div className="absolute w-96 h-96 rounded-full bg-[#B71925]/10 blur-3xl animate-pulse" />
          <div className="absolute w-64 h-64 rounded-full bg-[#C6A15B]/20 blur-2xl" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center px-4"
          >
            {/* Official Logo Emblem */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#C6A15B] shadow-[0_4px_30px_rgba(198,161,91,0.35)] bg-white mb-4">
              <Image
                src="/images/logo/official-logo.png"
                alt="Sri Maruthi Old Silk Buyer Official Logo"
                fill
                priority
                className="object-cover"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl font-serif font-black uppercase tracking-wider text-[#14100E]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sri Maruthi Old Silk Buyer
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "160px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-2.5"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] text-[#B71925] font-bold"
            >
              Old Silk Buyer • T. Nagar, Chennai
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
