import Image from "next/image";
import Link from "next/link";
import { companies, founder, contact } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import { CompanyRow } from "@/components/company-row";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero hero--home">
        <div className="container hero-shell">
          <Reveal>
            <div className="hero-brand">
              <p className="section-label hero-brand__label">Altcorp</p>
              <div className="hero-wordmark" aria-hidden="true">
                <span className="hero-wordmark__strong">ALT</span>
                <span className="hero-wordmark__soft">CORP</span>
              </div>
              <p className="hero-brand__note">
                Parent company structure for businesses, platforms, and specialist software products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hero-copy">
              <h1 className="hero-heading">
                Altcorp owns and operates software platforms, digital products,
                and category-specific brands.
              </h1>
              <p className="body-text hero-copy__body">
                The group brings together operating businesses across software,
                healthcare, media, communications, gaming, and AI-driven
                products under one parent company.
              </p>
              <div className="hero-actions">
                <Link href="/#companies" className="btn btn-fill">
                  View Companies
                </Link>
                <Link href="/about" className="btn">
                  About Altcorp
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="meta-strip hero-meta">
              <div className="meta-item">
                <span className="meta-label">Type</span>
                <span className="meta-value">Parent Company</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Companies</span>
                <span className="meta-value">{companies.length} Listed</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Sectors</span>
                <span className="meta-value">Software, Healthcare, Media, Consumer</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Base</span>
                <span className="meta-value">India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <SectionDivider />
      </div>

      {/* ── 001 / About ── */}
      <section className="container section-padding">
        <Reveal>
          <div className="split-grid split-grid--balanced">
            <div>
              <p className="section-label">001 / About</p>
              <h2 className="section-heading">
                Structured to own, operate, and develop internet businesses.
              </h2>
            </div>
            <div>
              <p className="body-text">
                Altcorp is a parent company that owns and operates software
                products, digital platforms, and category-specific brands across
                multiple sectors.
              </p>
              <p className="body-text" style={{ marginTop: "1.2rem" }}>
                Each company under Altcorp serves a defined market while
                benefiting from shared ownership, strategic direction, and
                long-term operating support from the group.
              </p>
              <Link href="/about" className="btn" style={{ marginTop: "2rem" }}>
                Learn More →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container">
        <SectionDivider />
      </div>

      {/* ── 002 / Companies ── */}
      <section id="companies" className="container section-padding">
        <Reveal>
          <p className="section-label">002 / Companies</p>
          <div className="section-intro section-intro--spaced">
            <h2 className="section-heading section-heading--wide">
              Selected operating companies and software platforms under Altcorp.
            </h2>
            <p className="body-text">
              Each business within the group is built for a distinct market, with
              its own product positioning, operating model, and audience.
            </p>
          </div>
          <div className="company-table-head">
            <span>Company</span>
            <span className="company-desc">Focus</span>
            <span className="company-sector">Sector</span>
            <span />
          </div>
        </Reveal>
        {companies.map((c, i) => (
          <CompanyRow
            key={c.slug}
            name={c.name}
            description={c.description}
            sector={c.sector}
            href={`/companies/${c.slug}`}
            isFirst={false}
            delay={i * 0.05}
          />
        ))}
      </section>

      <div className="container">
        <SectionDivider />
      </div>

      {/* ── 003 / Leadership ── */}
      <section className="container section-padding">
        <Reveal>
          <div className="leadership-spotlight">
            <div className="leadership-spotlight__copy">
              <p className="section-label">003 / Leadership</p>
              <h2 className="section-heading section-heading--wide">
                Leadership, group direction, and long-term development.
              </h2>
              <p className="body-text" style={{ marginTop: "1.35rem" }}>
                Altcorp is led by {founder.name}, who oversees group strategy,
                operating direction, and long-term product development across
                the company.
              </p>
              <p style={{ fontSize: "0.62rem", textTransform: "uppercase", color: "var(--dim)", marginTop: "1.25rem", letterSpacing: "0.14em" }}>
                {founder.role}
              </p>
              <p className="body-text" style={{ marginTop: "1rem" }}>
                {founder.extendedBio}
              </p>
              <Link href="/leadership" className="btn" style={{ marginTop: "2rem", display: "inline-flex" }}>
                Read More →
              </Link>
            </div>
            <div className="leadership-spotlight__media">
              <Image
                src={founder.image}
                alt={founder.name}
                width={600}
                height={700}
                style={{ width: "100%", height: "100%", minHeight: 460, objectFit: "cover", display: "block" }}
              />
              <div className="leadership-spotlight__card">
                <span className="meta-label">Group Scope</span>
                <p>Strategy, product direction, and long-term operating development.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container">
        <SectionDivider />
      </div>

      {/* ── CTA ── */}
      <section className="container" style={{ padding: "clamp(4rem, 10vw, 8rem) 0" }}>
        <Reveal>
          <div className="cta-shell">
            <div>
              <p className="section-label" style={{ marginBottom: "1.25rem" }}>Contact</p>
              <h2 className="cta-title">
                Enquiries for the group, its companies, or individual products.
              </h2>
            </div>
            <div className="cta-shell__aside">
              <p className="body-text" style={{ maxWidth: "30rem" }}>
                For commercial discussions, product questions, or company-level
                correspondence, contact Altcorp directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/contact" className="btn btn-fill">Contact Altcorp</Link>
                <a href={`mailto:${contact.email}`} className="btn">{contact.email}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
