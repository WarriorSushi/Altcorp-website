export interface Company {
  name: string;
  description: string;
  sector: string;
  slug: string;
}

export const companies: Company[] = [
  { name: "BurnerLinks", description: "Self-destructing privacy links", sector: "Software", slug: "burnerlinks" },
  { name: "Feedbacks.dev", description: "Developer feedback collection", sector: "DevTools", slug: "feedbacks-dev" },
  { name: "Supaviewer", description: "Entertainment analytics platform", sector: "Analytics", slug: "supaviewer" },
  { name: "Verified.Doctor", description: "Medical professional verification", sector: "Healthcare", slug: "verified-doctor" },
  { name: "MyGang AI", description: "AI-native social experiences", sector: "AI / Consumer", slug: "mygang-ai" },
  { name: "Ottr Chat", description: "Privacy-first messaging", sector: "Communication", slug: "ottr-chat" },
  { name: "AFKNPC", description: "Gaming community platform", sector: "Gaming", slug: "afknpc" },
];

export const founder = {
  name: "Dr. Syed Irfan",
  role: "Founder & Group Lead",
  bio: "Oversees Altcorp's group strategy, product direction, and long-term development across all businesses and platforms.",
  extendedBio: "Dr. Syed Irfan is the founder of Altcorp and oversees its group strategy, product direction, and long-term development. His work centres on building and operating software companies, digital products, and category-specific platforms under the Altcorp umbrella.",
  image: "/founder.webp",
};

export const contact = {
  email: "contact@altcorp.in",
  location: "India",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/#companies" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];
