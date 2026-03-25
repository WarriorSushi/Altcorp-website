"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_URL = "https://formspree.io/f/FORM_ID"; // Replace FORM_ID with your Formspree form ID

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.015)",
  border: "1px solid var(--line)",
  borderRadius: 0,
  color: "var(--white)",
  padding: "1rem 1rem",
  fontSize: "0.92rem",
  fontFamily: "inherit",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
};

const labelStyle: React.CSSProperties = {
  color: "var(--dim)",
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "0.4rem",
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.3)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--line)";
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-state">
        <span className="meta-label">Sent</span>
        <p style={{ color: "var(--white)", fontWeight: 700, fontSize: "0.92rem", marginTop: "0.35rem" }}>
        Message sent. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label style={labelStyle} htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="inquiry">Inquiry Type</label>
        <input
          id="inquiry"
          name="inquiry"
          type="text"
          placeholder="Partnership / Business / Product"
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          width: "100%",
          minHeight: 52,
          background: "var(--white)",
          color: "#000",
          fontWeight: 800,
          textTransform: "uppercase",
          fontSize: "0.78rem",
          letterSpacing: "0.1em",
          border: "none",
          borderRadius: 0,
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          opacity: status === "submitting" ? 0.5 : 1,
          fontFamily: "inherit",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => {
          if (status !== "submitting") e.currentTarget.style.background = "var(--dim)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--white)";
        }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p style={{ color: "var(--ghost)", fontSize: "0.82rem" }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
