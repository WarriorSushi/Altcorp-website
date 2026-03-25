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
        </Reveal>
      </section>

      <div className="container"><SectionDivider /></div>

      {/* Content */}
      <section className="container section-padding">
        <Reveal>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_0.7fr] gap-8 min-[900px]:gap-16 items-start">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="py-5 border-b border-[var(--line)]"
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
