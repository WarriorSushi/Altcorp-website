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
            ? "py-4 backdrop-blur-xl bg-[rgba(3,3,3,0.85)] border-b border-[var(--line)]"
            : "py-6"
        }`}
      >
        <div className="flex items-center gap-6 sm:gap-8 max-w-[1200px] mx-auto px-8 w-full">
          <Link href="/" className="flex items-center gap-0">
            <span className="text-[0.88rem] font-[900] tracking-[0.08em] uppercase">
              Alt
            </span>
            <span className="text-[0.88rem] font-[400] tracking-[0.08em] uppercase text-[var(--dim)]">
              corp
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-[2rem]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--dim)] text-[0.72rem] font-[600] tracking-[0.08em] uppercase transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="ml-auto md:hidden flex flex-col gap-[5px] p-2 -mr-2"
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
