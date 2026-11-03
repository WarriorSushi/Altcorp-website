type ContactDetails = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

export function createContactEmail({
  name,
  email,
  inquiry,
  message,
}: ContactDetails): string {
  const topic = inquiry.replace(/[\r\n]+/g, " ").trim();
  const subject = topic ? `Altcorp enquiry — ${topic}` : "Altcorp enquiry";
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
  return `mailto:contact@altcorp.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
