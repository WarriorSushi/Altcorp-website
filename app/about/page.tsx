import { VectorIcon } from "@/components/vector-icon";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Altcorp",
  description:
    "Product strategy, interface design and software engineering across planning, feedback, AI conversation, research, games and forecasting.",
};

const disciplines = [
  { title: "Product systems", description: "Connected planning and product feedback." },
  { title: "AI interactions", description: "Conversation, memory and research workflows." },
  { title: "Play and participation", description: "Puzzles, forecasting and keyboard-led interfaces." },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="container editorial-intro">
        <p className="section-label">About Altcorp</p>
        <h1>
          Software.
          <br />
          <em>With purpose.</em>
        </h1>
        <div className="editorial-intro-bottom">
          <p className="lead-copy">
            A software and AI practice led by Dr. Syed Irfan.
          </p>
          <p className="body-text">
            Independent product strategy, interface design and engineering.
          </p>
        </div>
      </section>
      <section className="container about-story">
        <div className="about-art">
          <Image
            src="/art/material-study-monochrome.webp"
            alt="Charcoal frosted glass with smooth neutral enamel edges"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="section-label">The work behind the practice</p>
          <h2>
            Specific problems.
            <br />
            <em>Distinct products.</em>
          </h2>
          <p className="body-text">
            Define the problem. Choose the interaction. Build and verify the software.
          </p>
          <Link href="/#work" className="text-link">
            Selected work <VectorIcon />
          </Link>
        </div>
      </section>
      <section className="container principles-section">
        <p className="section-label">Areas of work</p>
        <div className="principles-grid">
          {disciplines.map((item, i) => (
            <article key={item.title}>
              <span className="section-label">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p className="body-text">{item.description}</p>
            </article>
          ))}
        </div>
        <Link href="/leadership" className="text-link">
          Meet the founder <VectorIcon />
        </Link>
      </section>
    </main>
  );
}
