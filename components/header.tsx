"use client";

import { VectorIcon } from "@/components/vector-icon";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isPreview = pathname === "/studio-preview";
  const homePath = isPreview ? "/studio-preview" : "/";
  const pageLinks = isPreview
    ? [
        { label: "Work", href: "/studio-preview#work" },
        { label: "Approach", href: "/studio-preview#approach" },
        { label: "About", href: "/studio-preview#studio" },
      ]
    : links;

  useEffect(() => {
    const dialog = menu.current;
    if (open) {
      dialog?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link href={homePath} className="wordmark" aria-label="Altcorp home">
            altcorp<span>.</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-contact">
              Contact <VectorIcon />
            </Link>
          </nav>
          <button
            ref={trigger}
            type="button"
            className="menu-trigger"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu <VectorIcon name="menu" />
          </button>
        </div>
      </header>
      <dialog
        ref={menu}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Site navigation"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span className="wordmark">altcorp.</span>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close menu"
            >
              Close <VectorIcon name="close" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {pageLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={close}>
                {link.label} <VectorIcon />
              </Link>
            ))}
            <Link href="/contact" onClick={close}>
              Let’s talk <VectorIcon />
            </Link>
          </nav>
          <a className="menu-email" href="mailto:contact@altcorp.in">
            contact@altcorp.in
          </a>
        </div>
      </dialog>
    </>
  );
}
