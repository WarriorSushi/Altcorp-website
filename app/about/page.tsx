import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Altcorp",
  description:
    "Altcorp is the parent company behind software businesses, products, and platforms.",
};

const structureCards = [
  {
    title: "Internet-native companies",
    description:
      "Altcorp builds and operates companies designed for software distribution, digital services, and online markets.",
  },
  {
    title: "Products and platforms",
    description:
      "The group includes software products, specialist tools, and digital platforms built for clearly defined audiences and commercial use cases.",
  },
  {
    title: "Coherent parent structure",
    description:
      "Altcorp provides the parent structure that connects multiple brands, products, and operating entities inside one company.",
  },
];

const operatingPrinciples = [
  {
    title: "Long-term ownership",
    description:
      "Altcorp is designed to hold and develop businesses over time rather than treat them as disconnected short-cycle launches.",
  },
  {
    title: "Clear market positioning",
    description:
      "Each business is expected to address a defined audience, category, and commercial role inside the broader group.",
  },
  {
    title: "Shared group direction",
    description:
      "Operating companies benefit from common strategic direction, product discipline, and long-term alignment across the parent structure.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="container page-intro">
        <Reveal>
          <div className="page-intro__split about-page-intro">
            <div className="page-intro__content">
              <p className="section-label">About</p>
              <h1 className="page-intro__title">
                The parent company behind software, platforms, and operating brands.
              </h1>
              <p className="body-text page-intro__body">
                Altcorp is the parent company behind software businesses,
                specialist digital products, and category-specific platforms.
              </p>
            </div>
            <div className="about-page-intro__panel">
              <div className="about-page-intro__grid">
                <div className="company-detail-item">
                  <span className="meta-label">Role</span>
                  <p>Parent company and long-term owner</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Scope</span>
                  <p>Software, healthcare, media, communications, gaming, and AI</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Base</span>
                  <p>India</p>
                </div>
                <div className="company-detail-item">
                  <span className="meta-label">Focus</span>
                  <p>Operating companies, products, and specialist platforms</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container py-10 sm:py-16">
        <SectionDivider />
      </div>

      {/* Content Section */}
      <section className="container pb-10 sm:pb-16">
        <Reveal>
          <div className="split-grid split-grid--balanced items-start">
            {/* Left — rich text */}
            <div className="space-y-5">
              <p className="body-text">
                Altcorp functions as the long-term parent company for software
                businesses, digital products, and specialist platforms. Each
                company within the group serves a clearly defined market while
                operating within a broader ownership and strategy framework.
              </p>
              <p className="body-text">
                The group brings together companies, products, and specialist
                platforms under one operating structure. Each business is
                built for a specific audience while benefiting from shared
                ownership, continuity, and operating alignment.
              </p>
            </div>

            {/* Right — structure cards */}
            <div className="space-y-4 about-card-stack">
              {structureCards.map((card) => (
                <div
                  key={card.title}
                  className="about-card"
                >
                  <h3 className="text-[1rem] sm:text-[1.05rem] font-extrabold">
                    {card.title}
                  </h3>
                  <p className="text-[color:var(--dim)] text-[0.9rem] mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container">
        <SectionDivider />
      </div>

      {/* Meta Section */}
      <section className="container py-10 sm:py-16">
        <Reveal>
          <div className="section-intro">
            <div>
              <p className="section-label">Structure</p>
              <h2 className="section-heading section-heading--wide">
                One parent company, multiple specialised businesses.
              </h2>
            </div>
            <div>
              <p className="body-text">
                Altcorp provides the ownership structure and strategic direction
                that connects each business within the group. By operating under
                a single parent company, the group benefits from shared
                resources, aligned decision-making, and long-term continuity
                across all brands, products, and platforms.
              </p>
            </div>
          </div>
          <div className="about-principles">
            {operatingPrinciples.map((principle) => (
              <div key={principle.title} className="about-principles__card">
                <span className="meta-label">{principle.title}</span>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
