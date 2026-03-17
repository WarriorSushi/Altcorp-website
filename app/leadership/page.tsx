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
    <main>
      {/* Hero — split grid */}
      <section
        className="container"
        style={{ paddingTop: "clamp(8rem, 14vw, 12rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        <Reveal>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 min-[900px]:gap-12">
            {/* Image — shows first on mobile */}
            <div className="order-first min-[900px]:order-last border border-[var(--line)] bg-[var(--surface)] overflow-hidden">
              <Image
                src={founder.image}
                alt="Portrait of Dr. Syed Irfan"
                width={800}
                height={1000}
                unoptimized
                className="w-full h-full object-cover object-[center_18%] min-h-[300px] min-[900px]:min-h-[500px]"
              />
            </div>

            {/* Text column */}
            <div className="flex flex-col justify-center">
              <p className="section-label">
                003 / Leadership
              </p>
              <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-0.05em] leading-[0.9] mt-2">
                {founder.name}
              </h1>
              <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--dim)] mt-4">
                {founder.role}
              </p>
              <p className="body-text mt-4">
                {founder.extendedBio}
              </p>
              <Link href="/" className="btn mt-6 self-start">
                Back to Home →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Divider */}
      <div className="container">
        <SectionDivider />
      </div>

      {/* Extended bio */}
      <section className="container section-padding">
        <Reveal delay={0.15}>
          <div className="max-w-[48rem]">
            <h2 className="section-heading">
              Approach
            </h2>
            <p className="body-text mt-6">
              Altcorp allows each business to retain a clear market position while benefiting from
              shared ownership and strategic direction. Group leadership across software, platforms,
              and operating brands.
            </p>
            <p className="body-text mt-4">
              His work centres on building and operating software companies, digital products, and
              category-specific platforms under the Altcorp umbrella.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
