import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Altcorp",
  description:
    "Altcorp is the parent company behind a growing group of software businesses, products, and platforms.",
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

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="container"
        style={{ paddingTop: "clamp(8rem, 14vw, 12rem)" }}
      >
        <Reveal>
          <p className="section-label">
            About
          </p>
          <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black uppercase tracking-[-0.05em] leading-[0.95] max-w-[20ch]">
            The parent company behind software, platforms, and operating brands.
          </h1>
          <p className="body-text mt-4">
            Altcorp is the parent company behind a growing group of software
            businesses, products, and platforms.
          </p>
        </Reveal>
      </section>

      <div className="container py-10 sm:py-16">
        <SectionDivider />
      </div>

      {/* Content Section */}
      <section className="container pb-10 sm:pb-16">
        <Reveal>
          <div className="split-grid items-start">
            {/* Left — rich text */}
            <div className="space-y-5">
              <p className="body-text">
                Altcorp functions as the parent company and long-term owner of a
                growing portfolio of internet-native businesses. Each company
                within the group serves a clearly defined market — from
                professional compliance tools to consumer entertainment — while
                sharing common infrastructure, strategic direction, and operating
                principles.
              </p>
              <p className="body-text">
                The group brings together companies, products, and specialist
                platforms under one operating structure. Each business is
                designed to serve a specific audience and market while benefiting
                from shared ownership.
              </p>
            </div>

            {/* Right — structure cards */}
            <div className="space-y-4">
              {structureCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-[1.3rem] transition-colors hover:border-[var(--line-strong)]"
                >
                  <h3 className="text-[1rem] sm:text-[1.05rem] font-extrabold">
                    {card.title}
                  </h3>
                  <p className="text-[color:var(--dim)] text-[0.86rem] mt-2 leading-relaxed">
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
          <div className="split-grid items-start">
            <div>
              <p className="section-label">
                Structure
              </p>
              <h2 className="section-heading max-w-[20ch]">
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
        </Reveal>
      </section>
    </>
  );
}
