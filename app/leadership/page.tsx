import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/data";

export const metadata = {
  title: "Leadership — Altcorp",
  description:
    "Dr. Syed Irfan, founder of Altcorp. Strategy, product direction and long-term development.",
};

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <section className="container founder-section">
        <div className="founder-copy">
          <p className="section-label">Leadership</p>
          <h1>
            Dr. Syed
            <br />
            <em>Irfan.</em>
          </h1>
          <p className="founder-role">{founder.role}</p>
          <p className="lead-copy">
            Independent perspective.
            <br />
            Long-term commitment.
          </p>
          <p className="body-text">{founder.extendedBio}</p>
          <Link href="/contact" className="text-link">
            Start a conversation ↗
          </Link>
        </div>
        <figure className="founder-photo">
          <Image
            src={founder.image}
            alt="Portrait of Dr. Syed Irfan, founder of Altcorp"
            width={800}
            height={1000}
            priority
          />
          <figcaption>Dr. Syed Irfan / Founder, Altcorp</figcaption>
        </figure>
      </section>
      <section className="container founder-note">
        <p className="section-label">Direction & continuity</p>
        <h2>
          Clear direction.
          <br />
          <em>Room to develop.</em>
        </h2>
        <p className="body-text">
          Each product in the Altcorp portfolio serves a distinct audience.
          Leadership brings continuity to the work through shared strategy,
          focused product development and the patience to build over time.
        </p>
      </section>
    </main>
  );
}
