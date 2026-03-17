"use client";

import { useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/lib/data";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      {/* Panel */}
      <div className="absolute top-0 right-0 h-full w-[280px] bg-[var(--surface)] border-l border-[var(--line)] flex flex-col p-8">
        <button
          className="self-end p-2 text-[var(--dim)] hover:text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
        <nav className="flex flex-col gap-6 mt-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-[1.1rem] font-[700] tracking-[0.05em] uppercase text-[var(--ghost)] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
