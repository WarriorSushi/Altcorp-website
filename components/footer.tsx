import Link from "next/link";
import { navigation, companies, contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[0.82rem] font-[900] tracking-[0.08em] uppercase">
              Altcorp
            </div>
            <p className="text-[var(--dim)] text-[0.78rem] mt-3 leading-relaxed max-w-[22rem]">
              The parent company behind software products, digital platforms, and operating brands across multiple sectors.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[var(--dim)] text-[0.55rem] font-[700] tracking-[0.16em] uppercase mb-4">
              Pages
            </p>
            <ul className="grid gap-[0.35rem]">
              <li>
                <Link
                  href="/"
                  className="text-[var(--ghost)] text-[0.78rem] font-[500] inline-flex min-h-[44px] items-center hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--ghost)] text-[0.78rem] font-[500] inline-flex min-h-[44px] items-center hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <p className="text-[var(--dim)] text-[0.55rem] font-[700] tracking-[0.16em] uppercase mb-4">
              Companies
            </p>
            <ul className="grid gap-[0.35rem]">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/companies/${c.slug}`}
                    className="text-[var(--ghost)] text-[0.78rem] font-[500] inline-flex min-h-[44px] items-center hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[var(--dim)] text-[0.55rem] font-[700] tracking-[0.16em] uppercase mb-4">
              Connect
            </p>
            <ul className="grid gap-[0.35rem]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[var(--ghost)] text-[0.78rem] font-[500] inline-flex min-h-[44px] items-center hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="text-[var(--ghost)] text-[0.78rem] font-[500] inline-flex min-h-[44px] items-center">
                  {contact.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Base row */}
        <div className="mt-10 pt-5 border-t border-[var(--line)] text-[var(--dim)] text-[0.62rem] flex justify-between tracking-[0.05em]">
          <span>&copy; {new Date().getFullYear()} Altcorp. All rights reserved.</span>
          <span className="hidden sm:inline">Built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
