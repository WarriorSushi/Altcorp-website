"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

interface CompanyRowProps {
  name: string;
  description: string;
  sector: string;
  href: string;
  isFirst?: boolean;
  delay?: number;
}

export function CompanyRow({ name, description, sector, href, delay = 0 }: CompanyRowProps) {
  return (
    <Reveal delay={delay}>
      <Link href={href}>
        <motion.div
          className="company-row"
          style={{
            display: "grid",
            alignItems: "center",
            padding: "1.1rem 0",
            borderBottom: "1px solid var(--line)",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
          whileHover={{
            x: 16,
            backgroundColor: "rgba(167,139,250,0.02)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <span style={{ fontSize: "1.05rem", fontWeight: 800, letterSpacing: "-0.01em" }}>{name}</span>
          <span className="company-desc" style={{ fontSize: "0.8rem", color: "var(--dim)" }}>{description}</span>
          <span className="company-sector" style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--dim)" }}>{sector}</span>
          <motion.span
            className="company-arrow"
            style={{ fontSize: "0.9rem", color: "var(--dim)", textAlign: "right" }}
          >
            →
          </motion.span>
        </motion.div>
      </Link>
    </Reveal>
  );
}
