"use client";

import { VectorIcon } from "@/components/vector-icon";

import { useState, type FormEvent } from "react";
import { createContactEmail } from "@/lib/contact";

export function ContactForm() {
  const [draft, setDraft] = useState<string>();
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const href = createContactEmail({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      inquiry: String(form.get("inquiry") ?? ""),
      message: String(form.get("message") ?? ""),
    });
    setDraft(href);
    window.location.href = href;
  }
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      action="mailto:contact@altcorp.in"
      method="post"
      encType="text/plain"
    >
      <div className="form-pair">
        <div>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="inquiry">
          What would you like to explore? <span>(optional)</span>
        </label>
        <input
          id="inquiry"
          name="inquiry"
          placeholder="A product, a partnership, a possibility…"
          maxLength={160}
        />
      </div>
      <div>
        <label htmlFor="message">A little more about your idea</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={4000}
          required
        />
      </div>
      <p className="form-note" id="email-note">
        This opens your email app with a prepared draft. Nothing is sent
        automatically.
      </p>
      <button
        type="submit"
        className="btn btn-fill"
        aria-describedby="email-note"
      >
        Prepare email <VectorIcon />
      </button>
      {draft ? (
        <p className="form-feedback" role="status">
          Your draft is ready. Finish sending in your email app.{" "}
          <a href={draft}>Open the draft again <VectorIcon /></a>
        </p>
      ) : null}
    </form>
  );
}
