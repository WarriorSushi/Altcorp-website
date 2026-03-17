import Link from "next/link";
import { navigation, contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="max-w-[1200px] mx-auto w-[min(1200px,calc(100vw-4rem))]">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8">
          {/* Brand */}
          <div>
            <div className="text-[0.78rem] font-[800] tracking-[0.08em] uppercase">
              Altcorp
            </div>
            <p className="text-[var(--dim)] text-[0.78rem] mt-2 leading-relaxed">
              Parent company behind software, platforms, and operating brands.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[var(--dim)] text-[0.58rem] font-[700] tracking-[0.14em] uppercase mb-3">
              Pages
            </p>
            <ul className="grid gap-[0.15rem]">
              <li>
                <Link
                  href="/"
                  className="text-[var(--ghost)] text-[0.8rem] font-[500] inline-flex min-h-[28px] items-center"
                >
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--ghost)] text-[0.8rem] font-[500] inline-flex min-h-[28px] items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[var(--dim)] text-[0.58rem] font-[700] tracking-[0.14em] uppercase mb-3">
              Connect
            </p>
            <ul className="grid gap-[0.15rem]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[var(--ghost)] text-[0.8rem] font-[500] inline-flex min-h-[28px] items-center"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="text-[var(--ghost)] text-[0.8rem] font-[500] inline-flex min-h-[28px] items-center">
                  {contact.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Base row */}
        <div className="mt-8 pt-4 border-t border-[var(--line)] text-[var(--dim)] text-[0.68rem] flex justify-between">
          <span>&copy; {new Date().getFullYear()} Altcorp</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
