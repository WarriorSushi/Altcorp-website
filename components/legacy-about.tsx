import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Altcorp",
  description:
    "Independent thinking, considered products. Meet the digital and AI studio behind Altcorp’s portfolio.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="container editorial-intro">
        <p className="section-label">About Altcorp</p>
        <h1>
          Independent thinking.
          <br />
          <em>Considered creation.</em>
        </h1>
        <div className="editorial-intro-bottom">
          <p className="lead-copy">
            A digital and AI studio working at the intersection of curiosity,
            product strategy and craft.
          </p>
          <p className="body-text">
            Altcorp builds and develops a family of software products, digital
            platforms and specialist brands. Our work spans AI, software,
            healthcare, media and communications.
          </p>
        </div>
      </section>
      <section className="container about-story">
        <div className="about-art">
          <Image
            src="/art/material-study-monochrome.webp"
            alt="Frosted glass sculpture with smooth enamel edges"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="section-label">A shared point of view</p>
          <h2>
            Different disciplines.
            <br />
            <em>The same intention.</em>
          </h2>
          <p className="body-text">
            Each product begins with a particular question and a particular
            audience. The answer deserves its own identity, its own way of
            working and the attention to develop over time.
          </p>
          <p className="body-text">
            Altcorp connects these independent directions through shared
            strategy, product development and a long-term view. Exploration
            leads to a clear direction. Production gives it form.
          </p>
          <Link href="/#companies" className="text-link">
            Discover the portfolio ↗
          </Link>
        </div>
      </section>
      <section className="container principles-section">
        <p className="section-label">What guides the work</p>
        <div className="principles-grid">
          {[
            {
              title: "Ask better questions.",
              text: "Understand the audience, the context and the purpose before deciding what to build.",
            },
            {
              title: "Make deliberate choices.",
              text: "Give every product a clear position and every detail a reason to exist.",
            },
            {
              title: "Build for what follows.",
              text: "Think beyond the first release. Leave room for products and ideas to develop.",
            },
          ].map((item, i) => (
            <article key={item.title}>
              <span className="section-label">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p className="body-text">{item.text}</p>
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
