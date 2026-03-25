export interface Company {
  name: string;
  description: string;
  sector: string;
  slug: string;
  tagline: string;
  longDescription: string;
  positioning: string;
  operatingModel: string;
  primaryMarket: string;
  features: string[];
  status: "Operating";
  url?: string;
}

export const companies: Company[] = [
  {
    name: "BurnerLinks",
    description: "Secure file and link distribution",
    sector: "Security Software",
    slug: "burnerlinks",
    tagline: "Secure sharing built around controlled access and expiry.",
    longDescription:
      "BurnerLinks is a privacy-first sharing product designed for controlled distribution of files, passwords, and sensitive information. Links can expire by time or view count, helping individuals and teams share confidential material with greater control and lower operational risk.",
    positioning:
      "A focused security product for controlled digital distribution where confidentiality, expiry, and access discipline matter.",
    operatingModel: "Security SaaS",
    primaryMarket: "Professionals, teams, and privacy-sensitive workflows",
    features: [
      "One-time view links that self-destruct after opening",
      "Configurable expiry by time or view count",
      "End-to-end encryption for all shared content",
      "No account required — instant link creation",
      "Custom branding options for teams and businesses",
    ],
    status: "Operating",
    url: "https://burnerlinks.com",
  },
  {
    name: "Feedbacks.dev",
    description: "Structured customer feedback management",
    sector: "Developer Software",
    slug: "feedbacks-dev",
    tagline: "Structured feedback collection for product teams.",
    longDescription:
      "Feedbacks.dev is a product feedback platform built for founders, teams, and software companies that need clearer customer signals. It is designed to collect, organise, and prioritise feedback in a more structured way, helping teams convert user input into better product decisions.",
    positioning:
      "A product feedback system for software teams that want cleaner customer input and more decisive prioritisation.",
    operatingModel: "B2B SaaS",
    primaryMarket: "Software teams, founders, and product organisations",
    features: [
      "Embeddable feedback widget for any web app",
      "Structured categorisation — bugs, features, improvements",
      "Public roadmap board powered by user votes",
      "Integrations with GitHub, Linear, and Slack",
      "Analytics dashboard for feedback trends",
    ],
    status: "Operating",
    url: "https://feedbacks.dev",
  },
  {
    name: "Supaviewer",
    description: "Media intelligence and distribution platform",
    sector: "Media Technology",
    slug: "supaviewer",
    tagline: "Audience, performance, and distribution intelligence for media.",
    longDescription:
      "Supaviewer is a media intelligence platform designed for digital entertainment, audience analytics, and distribution visibility. It brings together performance signals across channels and helps creators, studios, and media operators understand audience behaviour, content performance, and reach.",
    positioning:
      "A media intelligence product built around measurement, visibility, and distribution insight for modern digital entertainment.",
    operatingModel: "Media analytics platform",
    primaryMarket: "Studios, creators, and digital media operators",
    features: [
      "Multi-platform audience analytics in one dashboard",
      "Content performance scoring and benchmarking",
      "Audience sentiment analysis from social signals",
      "Trend forecasting for upcoming content genres",
      "Custom reporting for studios and production houses",
    ],
    status: "Operating",
  },
  {
    name: "Verified.Doctor",
    description: "Medical professional verification",
    sector: "Healthcare",
    slug: "verified-doctor",
    tagline: "Trust, verified. For healthcare professionals.",
    longDescription:
      "Verified.Doctor is a digital verification platform for medical professionals. It provides hospitals, clinics, and patients with a reliable way to confirm the credentials, qualifications, and licensing status of healthcare practitioners. The platform streamlines the credentialing process while maintaining the highest standards of data accuracy and privacy.",
    positioning:
      "A healthcare trust and credential-verification layer designed for medical identity, institutional assurance, and patient confidence.",
    operatingModel: "Healthcare verification platform",
    primaryMarket: "Healthcare providers, clinics, hospitals, and patients",
    features: [
      "Real-time credential and licence verification",
      "Digital profiles for verified medical professionals",
      "Integration with medical council registries",
      "Hospital and clinic onboarding verification workflows",
      "Patient-facing trust badges and verification pages",
    ],
    status: "Operating",
    url: "https://verified.doctor",
  },
  {
    name: "MyGang AI",
    description: "AI-native social interaction platform",
    sector: "AI Platforms",
    slug: "mygang-ai",
    tagline: "Group-based AI interaction designed as a social product.",
    longDescription:
      "MyGang AI is a consumer platform built around multi-agent social interaction. It is designed as a group-based AI product in which users engage with multiple AI personalities inside a shared environment, creating a more social and layered interaction model than a one-to-one assistant.",
    positioning:
      "A consumer AI platform positioned around group interaction, social dynamics, and multi-agent engagement rather than one-to-one prompting.",
    operatingModel: "Consumer AI platform",
    primaryMarket: "Consumer internet users and AI-native social products",
    features: [
      "Create custom AI characters with unique personalities",
      "Persistent memory — characters remember your conversations",
      "Group chats with multiple AI personalities",
      "Character marketplace to discover community creations",
      "Voice and image interactions beyond text",
    ],
    status: "Operating",
    url: "https://mygang.ai",
  },
  {
    name: "Ottr Chat",
    description: "Private communication platform",
    sector: "Communications",
    slug: "ottr-chat",
    tagline: "Private messaging built around focused communication.",
    longDescription:
      "Ottr Chat is a private messaging platform built around secure, focused communication. It is designed for users who want stronger privacy controls, a cleaner messaging experience, and communication products that are not built around public feeds or advertising incentives.",
    positioning:
      "A private communications product focused on trust, signal quality, and a cleaner messaging experience.",
    operatingModel: "Private communications product",
    primaryMarket: "Privacy-conscious users and focused messaging use cases",
    features: [
      "End-to-end encryption on all messages by default",
      "Disappearing messages with customisable timers",
      "Anonymous sign-up — no phone number required",
      "Zero data collection or ad tracking",
      "Group chats with the same privacy guarantees",
    ],
    status: "Operating",
  },
  {
    name: "AFKNPC",
    description: "Persistent gaming and community infrastructure",
    sector: "Gaming Platforms",
    slug: "afknpc",
    tagline: "Persistent systems for online games and player communities.",
    longDescription:
      "AFKNPC is a gaming platform focused on persistent online systems, community infrastructure, and player engagement. It is positioned around the idea that modern game ecosystems require stronger tools for interaction, continuity, and community participation beyond isolated play sessions.",
    positioning:
      "A gaming infrastructure product centred on persistent online systems, continuity, and community participation beyond single sessions.",
    operatingModel: "Gaming platform",
    primaryMarket: "Online game communities, players, and creators",
    features: [
      "Squad finder with skill-based matchmaking",
      "Game clip sharing and highlight reels",
      "Integrated stats tracking across popular titles",
      "Community forums and team management tools",
      "Creator profiles with audience engagement tools",
    ],
    status: "Operating",
  },
];

export const founder = {
  name: "Dr. Syed Irfan",
  role: "Founder and Group Lead",
  bio: "Responsible for Altcorp's group strategy, operating direction, and long-term development across its businesses and platforms.",
  extendedBio:
    "Dr. Syed Irfan is the founder of Altcorp and leads the group across strategy, product direction, and long-term operating development. His work is focused on building and managing software businesses, digital products, and category-specific platforms under the Altcorp umbrella.",
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
