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
      <section className="container page-intro page-intro--leadership">
        <Reveal>
          <div className="page-intro__split page-intro__split--leadership">
            <div className="page-intro__content">
              <p className="section-label">
                Leadership
              </p>
              <h1 className="page-intro__title">
                Group leadership for Altcorp and its operating companies.
              </h1>
              <p className="body-text page-intro__body">
                Altcorp is led by {founder.name}, who is responsible for group
                strategy, product direction, and long-term operating development
                across the company.
              </p>
              <div className="leadership-details">
                <div className="leadership-details__item">
                  <span className="meta-label">Leader</span>
                  <p>{founder.name}</p>
                </div>
                <div className="leadership-details__item">
                  <span className="meta-label">Role</span>
                  <p>{founder.role}</p>
                </div>
                <div className="leadership-details__item">
                  <span className="meta-label">Focus</span>
                  <p>Strategy, product direction, and long-term development</p>
                </div>
              </div>
              <Link href="/contact" className="btn btn-fill mt-8 self-start">
                Contact Altcorp
              </Link>
            </div>

            <div className="page-intro__media page-intro__media--portrait">
              <Image
                src={founder.image}
                alt="Portrait of Dr. Syed Irfan"
                width={800}
                height={1000}
                priority
                className="w-full h-full object-cover object-[center_18%] min-h-[360px] min-[900px]:min-h-[620px]"
              />
              <div className="page-intro__media-note">
                <span className="meta-label">Altcorp</span>
                <p>Parent company leadership across strategy, products, and operating direction.</p>
              </div>
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
          <div className="section-intro">
            <div>
              <p className="section-label">Approach</p>
              <h2 className="section-heading section-heading--wide">
                Leadership designed around continuity across the group.
              </h2>
            </div>
            <div>
              <p className="body-text">
                {founder.extendedBio}
              </p>
            </div>
          </div>
          <div className="leadership-notes">
            <div className="leadership-note">
              <span className="meta-label">Operating Model</span>
              <p>
                Altcorp allows each business to retain a clear market position
                while benefiting from shared ownership and strategic direction.
              </p>
            </div>
            <div className="leadership-note">
              <span className="meta-label">Group Direction</span>
              <p>
                Leadership is focused on disciplined product development,
                operational coherence, and long-term value across the company.
              </p>
            </div>
          </div>
          <div className="max-w-[48rem] mt-12">
            <h2 className="section-heading">
              Leadership overview
            </h2>
            <p className="body-text mt-6">
              Altcorp is organised so that multiple software businesses and
              platforms can operate within a common parent structure without
              losing clarity in market positioning or product direction.
            </p>
            <p className="body-text mt-4">
              The leadership role at group level is to align long-term
              priorities, support execution across companies, and ensure that
              each business is developed with the same standard of focus and
              operating discipline.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
