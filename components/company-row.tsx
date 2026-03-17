"use client";

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

export function CompanyRow({ name, description, sector, href, isFirst, delay = 0 }: CompanyRowProps) {
  return (
    <Reveal delay={delay}>
      <motion.a
        href={href}
        className="company-row"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1.5fr 1fr 0.5fr",
          alignItems: "center",
          padding: "1.1rem 0",
          borderBottom: "1px solid var(--line)",
          borderTop: isFirst ? "1px solid var(--line)" : undefined,
          textDecoration: "none",
          color: "inherit",
          transition: "all 0.25s ease",
        }}
        whileHover={{
          paddingLeft: 12,
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        <span style={{ fontSize: "1.1rem", fontWeight: 800 }}>{name}</span>
        <span className="company-desc" style={{ fontSize: "0.82rem", color: "var(--dim)" }}>{description}</span>
        <span className="company-sector" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--dim)" }}>{sector}</span>
        <motion.span
          className="company-arrow"
          style={{ fontSize: "1.2rem", color: "var(--dim)", textAlign: "right" }}
        >
          →
        </motion.span>
      </motion.a>
    </Reveal>
  );
}
