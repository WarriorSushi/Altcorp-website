import { VectorIcon } from "@/components/vector-icon";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/lib/data";

export const metadata = {
  title: "Contact — Altcorp",
  description:
    "Explore a product, a partnership or a new possibility with Altcorp. Contact contact@altcorp.in.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="container editorial-intro contact-intro">
        <p className="section-label">Contact</p>
        <h1>Let’s <em>talk.</em></h1>
        <p className="lead-copy">Tell us what you have in mind.</p>
      </section>
      <section className="container contact-layout">
        <div className="contact-aside">
          <p className="section-label">Write to Altcorp</p>
          <a href={`mailto:${contact.email}`} className="contact-email">
            {contact.email} <VectorIcon />
          </a>

          <div className="contact-detail">
            <span className="section-label">Based in</span>
            <p>{contact.location}</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
