import { VectorIcon } from "@/components/vector-icon";
import Link from "next/link";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2>Let’s build.</h2>
          </div>
          <div className="footer-contact">
            <Link href="/contact" className="btn btn-light">
              Talk to us <VectorIcon />
            </Link>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="wordmark">
            altcorp.
          </Link>
          <p>© {new Date().getFullYear()} Altcorp</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
