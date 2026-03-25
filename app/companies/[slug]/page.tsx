import { companies } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return { title: "Not Found — Altcorp" };
  return {
    title: `${company.name} — Altcorp`,
    description: company.longDescription.slice(0, 160),
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const idx = companies.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? companies[idx - 1] : null;
  const next = idx < companies.length - 1 ? companies[idx + 1] : null;
  const pageTheme = {
    "--company-accent": company.theme.accent,
    "--company-accent-soft": company.theme.accentSoft,
    "--company-accent-glow": company.theme.accentGlow,
    "--company-panel-tint": company.theme.panelTint,
  } as CSSProperties;

  return (
    <main className="company-page" style={pageTheme}>
      <section className="container page-intro company-page-hero">
        <Reveal>
          <div className="company-page-hero__grid">
            <div className="company-page-hero__content">
              <div className="company-badges">
                <span className="company-badge company-badge--neutral">
                  {company.sector}
                </span>
                <span className="company-badge company-badge--positive">
                  {company.status}
                </span>
              </div>
              <div className="company-page-hero__sector-line">
                <span className="company-page-hero__sector-mark">{company.theme.code}</span>
                <span className="company-page-hero__sector-name">{company.sector}</span>
              </div>
              <h1 className="page-intro__title page-intro__title--company">
                {company.name}
              </h1>
              <p className="text-[clamp(1rem,2vw,1.18rem)] text-[var(--ghost)] mt-4 max-w-[40rem] leading-relaxed">
                {company.tagline}
              </p>
              <p className="body-text mt-6 company-page-hero__positioning">
                {company.positioning}
              </p>
              <div className="hero-actions company-page-hero__actions">
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-fill inline-flex"
                  >
                    Visit {company.name}
                  </a>
                ) : null}
                <Link href="/contact" className="btn">
                  Contact Altcorp
                </Link>
              </div>
            </div>

            <div className="company-page-hero__panel">
              <div className="company-page-hero__panel-head">
                <span className="meta-label">Sector</span>
                <span className="company-page-hero__panel-code">{company.theme.code}</span>
              </div>
              <div className="company-page-hero__panel-grid">
                <div className="company-detail-item">
                  <span className="meta-label">Operating Model</span>
                  <p>{company.operatingModel}</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Primary Market</span>
                  <p>{company.primaryMarket}</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Company Role</span>
                  <p>Altcorp operating business</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Delivery</span>
                  <p>Live software product and active market presence</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Overview */}
      <section className="container section-padding">
        <Reveal>
          <div className="section-intro">
            <div>
              <p className="section-label">Overview</p>
              <h2 className="section-heading section-heading--wide">
                Company overview
              </h2>
            </div>
            <div className="company-overview__body">
              <p className="body-text">{company.longDescription}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      <section className="container section-padding">
        <Reveal>
          <div className="company-summary">
            <div>
              <p className="section-label">Positioning</p>
              <h2 className="section-heading section-heading--wide">
                How {company.name} is positioned within the group.
              </h2>
            </div>
            <div className="company-summary__cards">
              <div className="company-summary__card">
                <span className="meta-label">Category</span>
                <p>{company.sector}</p>
              </div>
              <div className="company-summary__card">
                <span className="meta-label">Market</span>
                <p>{company.primaryMarket}</p>
              </div>
              <div className="company-summary__card">
                <span className="meta-label">Operating Model</span>
                <p>{company.operatingModel}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Features */}
      <section className="container section-padding">
        <Reveal>
          <p className="section-label">Capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {company.features.map((feature, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="feature-card border border-[var(--line)] bg-[var(--surface)] p-6 h-full transition-colors hover:border-[var(--line-strong)] hover:bg-[var(--elevated)]">
                  <span className="block text-[0.6rem] font-bold text-[var(--dim)] uppercase tracking-[0.14em] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.88rem] text-[var(--ghost)] leading-relaxed">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Navigation */}
      <section className="container" style={{ padding: "clamp(2.5rem, 6vw, 4rem) 0 clamp(3rem, 8vw, 6rem)" }}>
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
            {prev ? (
              <Link href={`/companies/${prev.slug}`} className="btn">
                ← {prev.name}
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            <Link href="/#companies" className="btn">
              Back to Companies
            </Link>
            {next ? (
              <Link href={`/companies/${next.slug}`} className="btn">
                {next.name} →
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
