import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact — Altcorp",
  description: "Contact Altcorp regarding company, product, or business enquiries.",
};

const infoCards = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Base", value: contact.location },
  { label: "Best for", value: "Company enquiries, product questions, and business discussions" },
];

export default function ContactPage() {
  return (
    <main>
      <section className="container page-intro">
        <Reveal>
          <div className="page-intro__split contact-page-intro">
            <div className="page-intro__content">
              <p className="section-label">Contact</p>
              <h1 className="page-intro__title">
                Contact Altcorp
              </h1>
              <p className="body-text page-intro__body">
                Reach out regarding Altcorp, one of its companies, or a business
                enquiry related to the group.
              </p>
            </div>
            <div className="contact-page-intro__panel">
              <span className="meta-label">Communication</span>
              <p>
                The contact page is intended for group-level enquiries, company-specific
                questions, partnership discussions, and business correspondence.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Content */}
      <section className="container section-padding">
        <Reveal>
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-shell">
              <div className="contact-form-shell__heading">
                <p className="section-label">Write</p>
                <h2 className="section-heading section-heading--wide">
                  Start the conversation.
                </h2>
              </div>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="contact-info-stack">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="contact-info-card"
                >
                  <p className="section-label mb-1">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-[var(--white)] font-bold text-[0.92rem] hover:text-[var(--accent)] transition-colors"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-[var(--white)] font-bold text-[0.92rem]">
                      {card.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
