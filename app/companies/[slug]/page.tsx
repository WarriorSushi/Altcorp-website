import { companies } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import type { Metadata } from "next";

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

  return (
    <main>
      {/* Hero */}
      <section
        className="container"
        style={{ paddingTop: "clamp(8rem, 14vw, 12rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] border border-[var(--line)] text-[var(--dim)]">
              {company.sector}
            </span>
            <span
              className="inline-block px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em]"
              style={{
                background:
                  company.status === "Live"
                    ? "rgba(52,211,153,0.12)"
                    : company.status === "Beta"
                      ? "rgba(251,191,36,0.12)"
                      : "rgba(147,130,220,0.12)",
                color:
                  company.status === "Live"
                    ? "#34d399"
                    : company.status === "Beta"
                      ? "#fbbf24"
                      : "#9382dc",
                border: `1px solid ${
                  company.status === "Live"
                    ? "rgba(52,211,153,0.2)"
                    : company.status === "Beta"
                      ? "rgba(251,191,36,0.2)"
                      : "rgba(147,130,220,0.2)"
                }`,
              }}
            >
              {company.status}
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase tracking-[-0.05em] leading-[0.9]">
            {company.name}
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--ghost)] mt-4 max-w-[36rem] leading-relaxed font-light">
            {company.tagline}
          </p>
          {company.url && (
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fill inline-flex mt-8"
            >
              Visit {company.name} →
            </a>
          )}
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Overview */}
      <section className="container section-padding">
        <Reveal>
          <div className="split-grid">
            <div>
              <p className="section-label">Overview</p>
              <h2 className="section-heading">
                What is {company.name}?
              </h2>
            </div>
            <div>
              <p className="body-text">{company.longDescription}</p>
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
              All Companies
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
