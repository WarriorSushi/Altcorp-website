import Image from "next/image";
import { companies, founder, contact } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import { CompanyRow } from "@/components/company-row";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container" style={{ paddingBottom: "4rem" }}>
          <h1 className="hero-title">
            <span style={{ fontWeight: 900 }}>ALT</span>
            <span style={{ fontWeight: 400, color: "var(--dim)" }}>CORP</span>
          </h1>
          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Type</span>
              <span className="meta-value">Parent Company</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Companies</span>
              <span className="meta-value">7 Active</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Sectors</span>
              <span className="meta-value">Software, AI, Healthcare, Media</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Base</span>
              <span className="meta-value">India</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 001 / About ── */}
      <section className="container section-padding">
        <Reveal>
          <div className="split-grid">
            <div>
              <p className="section-label">001 / About</p>
              <h2 className="section-heading">
                Structured to build and operate internet businesses.
              </h2>
            </div>
            <div>
              <p className="body-text">
                Altcorp is a parent company that builds and operates software products,
                digital platforms, and category-specific brands across multiple sectors
                including software, AI, healthcare, and media.
              </p>
              <p className="body-text" style={{ marginTop: "1.2rem" }}>
                Each company under Altcorp functions with operational independence
                while sharing infrastructure, strategic direction, and long-term
                development resources from the group.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ── 002 / Companies ── */}
      <section id="companies" className="container section-padding">
        <Reveal>
          <p className="section-label">002 / Companies</p>
          <div
            className="company-header"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 0.5fr",
              padding: "0.8rem 0",
              fontSize: "0.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--dim)",
            }}
          >
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
            isFirst={i === 0}
            delay={i * 0.05}
          />
        ))}
      </section>

      <SectionDivider />

      {/* ── 003 / Leadership ── */}
      <section className="container section-padding">
        <Reveal>
          <div className="split-grid">
            <div>
              <p className="section-label">003 / Leadership</p>
              <h2 className="founder-name">{founder.name}</h2>
              <p style={{ fontSize: "0.68rem", textTransform: "uppercase", color: "var(--dim)", marginTop: "1rem", letterSpacing: "0.1em" }}>
                {founder.role}
              </p>
              <p className="body-text" style={{ marginTop: "1.5rem" }}>
                {founder.extendedBio}
              </p>
              <a href="/leadership" className="btn" style={{ marginTop: "2rem", display: "inline-flex" }}>
                Read More →
              </a>
            </div>
            <div
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                overflow: "hidden",
              }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={600}
                height={700}
                style={{ width: "100%", height: "100%", minHeight: 400, objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="container" style={{ padding: "8rem 0", textAlign: "center" }}>
        <Reveal>
          <h2 className="cta-title">
            <span style={{ fontWeight: 900 }}>Get in</span>
            <br />
            <span className="cta-outline">Touch</span>
          </h2>
          <p style={{ color: "var(--dim)", fontSize: "0.88rem", marginTop: "2rem" }}>
            Partnerships, press, or general inquiries.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-fill">Contact Altcorp →</a>
            <a href={`mailto:${contact.email}`} className="btn">{contact.email}</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
