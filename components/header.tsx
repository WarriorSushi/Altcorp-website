"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/lib/data";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 ${
          scrolled
            ? "py-4 backdrop-blur-xl bg-[rgba(5,5,7,0.82)] border-b border-[var(--line)]"
            : "py-5"
        }`}
      >
        <div className="flex items-center gap-6 sm:gap-8 max-w-[1280px] mx-auto px-5 sm:px-8 w-full">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(167,139,250,0.22)] bg-[rgba(167,139,250,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(167,139,250,0.45)]" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[0.92rem] font-[800] tracking-[-0.03em]">
                Altcorp
              </span>
              <span className="hidden sm:block text-[0.62rem] uppercase tracking-[0.16em] text-[var(--dim)]">
                Parent Company
              </span>
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-[1.6rem] lg:gap-[2rem]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--dim)] text-[0.71rem] font-[650] tracking-[0.1em] uppercase transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="ml-auto md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.02)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[4px]">
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </span>
          </button>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
