import Image from "next/image";
import Link from "next/link";
import { companies } from "@/lib/data";

const approach = [
  {
    title: "Exploration",
    description:
      "Research, experiments and prototypes. Making the unfamiliar useful.",
  },
  {
    title: "Strategy",
    description:
      "A clear point of view. Product direction, positioning and a plan worth pursuing.",
  },
  {
    title: "Production",
    description:
      "Digital products and AI experiences. Thoughtfully designed, engineered and brought to life.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="studio-hero">
        <Image
          src="/art/material-study.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-art"
        />
        <div className="container hero-content">
          <h1>
            Instinct meets
            <br />
            <em>intelligence.</em>
          </h1>
          <p>
            Exploration, strategy and production for a world
            <br className="desktop-break" /> being reshaped by AI.
          </p>
          <Link href="#companies" className="btn btn-fill">
            Explore our work <span aria-hidden="true">↘</span>
          </Link>
        </div>
        <div className="container hero-baseline">
          <span>Independent thinking.</span>
          <span>Digital craft.</span>
          <span>Long-term ambition.</span>
        </div>
      </section>

      <section
        id="approach"
        className="container approach-section section-padding"
      >
        <div className="approach-intro">
          <p className="section-label">01 / Our approach</p>
          <h2>
            From the first
            <br />
            question to the
            <br />
            <em>finished thing.</em>
          </h2>
          <p className="body-text">
            We explore what is possible, decide what matters, and build with
            intention.
          </p>
        </div>
        <div className="approach-list">
          {approach.map((item, i) => (
            <article key={item.title}>
              <span className="approach-number">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="craft-band">
        <p>Curiosity is the beginning. Craft is the difference.</p>
      </div>

      <section
        id="companies"
        className="container portfolio-section section-padding"
      >
        <div className="portfolio-intro">
          <div>
            <p className="section-label">02 / Portfolio</p>
            <h2>
              Ideas with a life
              <br />
              <em>of their own.</em>
            </h2>
          </div>
          <p>
            A family of products across AI, software, healthcare and media.
            Different disciplines. One considered approach.
          </p>
        </div>
        <div className="portfolio-layout">
          <div className="portfolio-list">
            {companies.map((company, i) => (
              <Link
                href={`/companies/${company.slug}`}
                key={company.slug}
                className="portfolio-row"
              >
                <span className="portfolio-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="portfolio-name">{company.name}</span>
                <span className="portfolio-sector">{company.sector}</span>
                <span className="portfolio-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container studio-note">
        <p className="section-label">03 / The studio</p>
        <div>
          <h2>
            Many possibilities.
            <br />
            <em>A considered point of view.</em>
          </h2>
          <div className="studio-note-body">
            <p className="body-text">
              Altcorp brings independent products and specialist platforms
              together through shared strategy, thoughtful design and long-term
              development.
            </p>
            <Link href="/about" className="text-link">
              Get to know Altcorp <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
