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
        style={{ paddingTop: "clamp(3rem, 6vw, 5rem)" }}
      >
        <Reveal>
          <p className="text-[color:var(--dim)] text-[0.62rem] font-bold uppercase tracking-[0.14em] mb-8">
            About
          </p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black uppercase tracking-[-0.05em] leading-[0.9] max-w-[20ch]">
            The parent company behind software, platforms, and operating brands.
          </h1>
          <p className="text-[color:var(--ghost)] text-[0.95rem] mt-4 max-w-[36rem]">
            Altcorp is the parent company behind a growing group of software
            businesses, products, and platforms.
          </p>
        </Reveal>
      </section>

      <div className="container py-16">
        <SectionDivider />
      </div>

      {/* Content Section */}
      <section className="container pb-16">
        <Reveal>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-start">
            {/* Left — rich text */}
            <div className="space-y-6">
              <p className="text-[color:var(--ghost)] text-[0.92rem] leading-[1.7]">
                Altcorp functions as the parent company and long-term owner of a
                growing portfolio of internet-native businesses. Each company
                within the group serves a clearly defined market — from
                professional compliance tools to consumer entertainment — while
                sharing common infrastructure, strategic direction, and operating
                principles.
              </p>
              <p className="text-[color:var(--ghost)] text-[0.92rem] leading-[1.7]">
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
                  className="border border-[var(--line)] bg-[var(--surface)] p-[1.3rem]"
                >
                  <h3 className="text-[1.05rem] font-extrabold">
                    {card.title}
                  </h3>
                  <p className="text-[color:var(--dim)] text-[0.86rem] mt-2">
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
      <section className="container py-16">
        <Reveal>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[color:var(--dim)] text-[0.62rem] font-bold uppercase tracking-[0.14em] mb-8">
                Structure
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.4rem)] font-extrabold tracking-[-0.04em] leading-[1.1] max-w-[20ch]">
                One parent company, multiple specialised businesses.
              </h2>
            </div>
            <div>
              <p className="text-[color:var(--ghost)] text-[0.92rem] leading-[1.7]">
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
