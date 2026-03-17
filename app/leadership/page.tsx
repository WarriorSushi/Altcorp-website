import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";

export const metadata = {
  title: "Leadership — Altcorp",
  description: `${founder.name}, ${founder.role} at Altcorp.`,
};

export default function LeadershipPage() {
  return (
    <main style={{ padding: "6rem 1.5rem 4rem" }}>
      {/* Hero — split grid */}
      <Reveal>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            maxWidth: "72rem",
            margin: "0 auto",
          }}
          className="leadership-hero"
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p
              style={{
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--dim)",
              }}
            >
              003 / Leadership
            </p>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
                lineHeight: 0.9,
                marginTop: "1.5rem",
              }}
            >
              {founder.name}
            </h1>

            <p
              style={{
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--dim)",
                marginTop: "1rem",
              }}
            >
              {founder.role}
            </p>

            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.7,
                color: "var(--ghost)",
                marginTop: "1rem",
                maxWidth: "32rem",
              }}
            >
              {founder.extendedBio}
            </p>

            <Link
              href="/"
              style={{
                display: "inline-block",
                marginTop: "2rem",
                padding: "0.65rem 1.6rem",
                border: "1px solid var(--line-strong)",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--ghost)",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Back to Home →
            </Link>
          </div>

          {/* Right column — founder image */}
          <div
            style={{
              border: "1px solid var(--line)",
              background: "var(--surface)",
              overflow: "hidden",
            }}
          >
            <Image
              src={founder.image}
              alt="Portrait of Dr. Syed Irfan"
              width={800}
              height={1000}
              unoptimized
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 18%",
                minHeight: "500px",
              }}
            />
          </div>
        </section>
      </Reveal>

      {/* Divider */}
      <div style={{ maxWidth: "72rem", margin: "4rem auto" }}>
        <SectionDivider />
      </div>

      {/* Extended bio */}
      <Reveal delay={0.15}>
        <section style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <h2
            style={{
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Approach
          </h2>

          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.7,
              color: "var(--ghost)",
              marginTop: "1.5rem",
            }}
          >
            Altcorp allows each business to retain a clear market position while benefiting from
            shared ownership and strategic direction. Group leadership across software, platforms,
            and operating brands.
          </p>

          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.7,
              color: "var(--ghost)",
              marginTop: "1rem",
            }}
          >
            His work centres on building and operating software companies, digital products, and
            category-specific platforms under the Altcorp umbrella.
          </p>
        </section>
      </Reveal>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .leadership-hero {
            grid-template-columns: 1fr !important;
          }
          .leadership-hero > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
