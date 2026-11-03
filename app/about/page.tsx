import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Altcorp",
  description:
    "Product strategy, interface design and software engineering across planning, feedback, AI conversation, research, games and forecasting.",
};

const disciplines = [
  {
    title: "Product systems",
    description:
      "Connected planning in Hyperstate and product feedback workflows in Feedbacks.dev. Software that organises work and keeps useful context close.",
  },
  {
    title: "AI interactions",
    description:
      "Multi-character conversations in MyGang.ai and evidence-led research workflows in research.cheap. Different interaction models for different tasks.",
  },
  {
    title: "Play and participation",
    description:
      "Sliding-letter puzzles in SOVLR, reputation-based calls in forecast.social, and keyboard-led interface work in development.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="container editorial-intro">
        <p className="section-label">About Altcorp</p>
        <h1>
          Product direction.
          <br />
          <em>Software in practice.</em>
        </h1>
        <div className="editorial-intro-bottom">
          <p className="lead-copy">
            A software and AI practice led by Dr. Syed Irfan.
          </p>
          <p className="body-text">
            Altcorp develops products across planning, feedback, AI
            conversation, research workflows, games and forecasting. The
            portfolio includes public products, invitation-based access and work
            in development.
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
            A planning tool needs a way to preserve relationships between tasks.
            A feedback system needs to carry evidence from a user’s report into
            a product decision. A word game needs clear rules, progression and
            responsive interaction.
          </p>
          <p className="body-text">
            These are the kinds of product questions Altcorp works through:
            define the problem, choose the interaction model, then design,
            engineer and verify the software.
          </p>
          <Link href="/#work" className="text-link">
            Explore the selected projects ↗
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
          Meet the founder ↗
        </Link>
      </section>
    </main>
  );
}
