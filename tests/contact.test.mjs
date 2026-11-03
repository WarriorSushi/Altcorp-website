import test from "node:test";
import assert from "node:assert/strict";
import { createContactEmail } from "../lib/contact.ts";

test("email draft preserves Unicode and query characters without changing recipient", () => {
  const url = new URL(
    createContactEmail({
      name: " Zoë & Co ",
      email: "zoe@example.com",
      inquiry: "AI & strategy?",
      message: "Explore #1 + #2?\nBudget: ₹100",
    }),
  );
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "contact@altcorp.in");
  assert.equal(
    url.searchParams.get("subject"),
    "Altcorp enquiry — AI & strategy?",
  );
  assert.equal(
    url.searchParams.get("body"),
    "Name: Zoë & Co\nEmail: zoe@example.com\n\nExplore #1 + #2?\nBudget: ₹100",
  );
});

test("blank optional inquiry uses a clear subject and strips line breaks from subject", () => {
  const blank = new URL(
    createContactEmail({
      name: "A",
      email: "a@example.com",
      inquiry: " ",
      message: "Hello",
    }),
  );
  assert.equal(blank.searchParams.get("subject"), "Altcorp enquiry");
  const multiline = new URL(
    createContactEmail({
      name: "A",
      email: "a@example.com",
      inquiry: "Partnership\r\nBcc: other@example.com",
      message: "Hello",
    }),
  );
  assert.equal(multiline.searchParams.get("subject").includes("\n"), false);
  assert.equal(multiline.searchParams.has("bcc"), false);
});
