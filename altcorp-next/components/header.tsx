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
        className={`fixed top-0 left-0 right-0 z-90 py-6 transition-colors duration-200 ${
          scrolled ? "backdrop-blur-lg bg-black/80" : ""
        }`}
      >
        <div className="flex items-center gap-8 max-w-[1200px] mx-auto w-[min(1200px,calc(100vw-4rem))]">
          <Link
            href="/"
            className="text-[0.88rem] font-[800] tracking-[0.08em] uppercase"
          >
            Altcorp
          </Link>
          <nav className="ml-auto hidden md:flex gap-[1.8rem]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--dim)] text-[0.78rem] font-[600] tracking-[0.05em] uppercase transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="ml-auto md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
          </button>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
