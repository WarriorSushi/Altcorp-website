import { Reveal } from "@/components/reveal";
import { SectionDivider } from "@/components/section-divider";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact — Altcorp",
  description: "Get in touch with Altcorp.",
};

const infoCards = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Base", value: contact.location },
  { label: "Best for", value: "Company enquiries, product questions, and business discussions" },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "clamp(8rem, 14vw, 12rem) 0 clamp(4rem, 6vw, 5rem)" }}>
        <div className="container">
          <Reveal>
            <p style={{
              color: "var(--dim)",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}>
              Contact
            </p>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}>
              Get in touch
            </h1>
            <p style={{
              color: "var(--ghost)",
              fontSize: "0.92rem",
              lineHeight: 1.7,
              maxWidth: "36rem",
              marginTop: "0.8rem",
            }}>
              Reach out regarding Altcorp, one of its companies, or a business enquiry related to the group.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Content */}
      <section style={{ padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className="container">
          <Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.7fr",
              gap: "4rem",
              alignItems: "start",
            }} className="contact-grid">
              {/* Form */}
              <div>
                <ContactForm />
              </div>

              {/* Info */}
              <div>
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    style={{
                      padding: "1rem 0",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    <p style={{
                      color: "var(--dim)",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}>
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        style={{ color: "var(--white)", fontWeight: 700, fontSize: "0.92rem" }}
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p style={{ color: "var(--white)", fontWeight: 700, fontSize: "0.92rem" }}>
                        {card.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}
