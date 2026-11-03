import Link from "next/link";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h2>Discuss a product.</h2>
            <p>Strategy, interfaces and software engineering.</p>
          </div>
          <div className="footer-contact">
            <Link href="/contact" className="btn btn-light">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="wordmark">
            altcorp.
          </Link>
          <p>India · Independent by design</p>
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
