import { VectorIcon } from "@/components/vector-icon";
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
          <p className="body-text">Product direction, strategy and software development.</p>
          <Link href="/contact" className="text-link">
            Get in touch <VectorIcon />
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

    </main>
  );
}
