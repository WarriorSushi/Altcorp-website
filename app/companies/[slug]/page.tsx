import { companies } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);
  return company
    ? { title: `${company.name} — Altcorp`, description: company.description }
    : { title: "Not found — Altcorp" };
}
export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);
  if (!company) notFound();
  const index = companies.indexOf(company);
  const next = companies[(index + 1) % companies.length];
  return (
    <main id="main-content">
      <section className="container editorial-intro company-intro">
        <Link href="/#companies" className="section-label back-link">
          ← Portfolio / {String(index + 1).padStart(2, "0")}
        </Link>
        <h1>
          {company.name}
          <span className="copper">.</span>
        </h1>
        <div className="editorial-intro-bottom">
          <p className="lead-copy">{company.tagline}</p>
          <div className="company-category">
            <span className="section-label">Discipline</span>
            <p>{company.sector}</p>
          </div>
        </div>
      </section>
      <section className="container company-overview">
        <div>
          <p className="section-label">The idea</p>
          <h2>
            A distinct focus.
            <br />
            <em>A considered product.</em>
          </h2>
          {company.url ? (
            <a
              href={company.url}
              className="btn btn-fill"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {company.name} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link href="/contact" className="text-link">
              Enquire about {company.name} ↗
            </Link>
          )}
        </div>
        <div>
          <p className="body-text">{company.longDescription}</p>
          <p className="body-text company-positioning">{company.positioning}</p>
          <dl className="company-facts">
            <div>
              <dt>Product direction</dt>
              <dd>{company.operatingModel}</dd>
            </div>
            <div>
              <dt>Audience</dt>
              <dd>{company.primaryMarket}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{company.status}</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="container company-capabilities">
        <p className="section-label">Product focus</p>
        <h2>
          What it brings
          <br />
          <em>into focus.</em>
        </h2>
        <ol>
          {company.features.map((feature, i) => (
            <li key={feature}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </li>
          ))}
        </ol>
      </section>
      <nav
        className="container company-pagination"
        aria-label="Portfolio navigation"
      >
        <Link href="/#companies" className="text-link">
          ← All products
        </Link>
        <Link href={`/companies/${next.slug}`} className="text-link">
          Next: {next.name} ↗
        </Link>
      </nav>
    </main>
  );
}
