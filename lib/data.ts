export interface Company {
  name: string;
  description: string;
  sector: string;
  slug: string;
  tagline: string;
  longDescription: string;
  features: string[];
  status: "Live" | "In Development" | "Beta";
  url?: string;
}

export const companies: Company[] = [
  {
    name: "BurnerLinks",
    description: "Self-destructing privacy links",
    sector: "Software",
    slug: "burnerlinks",
    tagline: "Share links that vanish after use.",
    longDescription:
      "BurnerLinks is a privacy-first link sharing tool that creates self-destructing URLs. Whether sharing passwords, confidential documents, or sensitive information, each link expires after a set number of views or a time limit — leaving no trace behind. Built for security-conscious professionals and teams who need to share without risk.",
    features: [
      "One-time view links that self-destruct after opening",
      "Configurable expiry by time or view count",
      "End-to-end encryption for all shared content",
      "No account required — instant link creation",
      "Custom branding options for teams and businesses",
    ],
    status: "Live",
    url: "https://burnerlinks.com",
  },
  {
    name: "Feedbacks.dev",
    description: "Developer feedback collection",
    sector: "DevTools",
    slug: "feedbacks-dev",
    tagline: "Ship better software with structured feedback.",
    longDescription:
      "Feedbacks.dev is a lightweight developer tool for collecting, organising, and acting on user feedback. Designed for indie developers and small teams who want to understand what users actually need — without bloated project management tools. Embed a feedback widget in your app, collect structured feature requests, and prioritise what to build next.",
    features: [
      "Embeddable feedback widget for any web app",
      "Structured categorisation — bugs, features, improvements",
      "Public roadmap board powered by user votes",
      "Integrations with GitHub, Linear, and Slack",
      "Analytics dashboard for feedback trends",
    ],
    status: "In Development",
    url: "https://feedbacks.dev",
  },
  {
    name: "Supaviewer",
    description: "Entertainment analytics platform",
    sector: "Analytics",
    slug: "supaviewer",
    tagline: "Data-driven insights for entertainment and media.",
    longDescription:
      "Supaviewer is an analytics platform purpose-built for the entertainment industry. It tracks audience engagement, content performance, and viewership trends across multiple distribution channels. From streaming platforms to social media, Supaviewer gives creators and studios the data they need to understand what resonates with their audience.",
    features: [
      "Multi-platform audience analytics in one dashboard",
      "Content performance scoring and benchmarking",
      "Audience sentiment analysis from social signals",
      "Trend forecasting for upcoming content genres",
      "Custom reporting for studios and production houses",
    ],
    status: "Beta",
  },
  {
    name: "Verified.Doctor",
    description: "Medical professional verification",
    sector: "Healthcare",
    slug: "verified-doctor",
    tagline: "Trust, verified. For healthcare professionals.",
    longDescription:
      "Verified.Doctor is a digital verification platform for medical professionals. It provides hospitals, clinics, and patients with a reliable way to confirm the credentials, qualifications, and licensing status of healthcare practitioners. The platform streamlines the credentialing process while maintaining the highest standards of data accuracy and privacy.",
    features: [
      "Real-time credential and licence verification",
      "Digital profiles for verified medical professionals",
      "Integration with medical council registries",
      "Hospital and clinic onboarding verification workflows",
      "Patient-facing trust badges and verification pages",
    ],
    status: "In Development",
    url: "https://verified.doctor",
  },
  {
    name: "MyGang AI",
    description: "AI-native social experiences",
    sector: "AI / Consumer",
    slug: "mygang-ai",
    tagline: "Your AI crew. Always there for you.",
    longDescription:
      "MyGang AI is an AI-native social platform that reimagines companionship and entertainment. Users create and interact with AI characters that have distinct personalities, memories, and evolving relationships. Whether it's a witty best friend, a study partner, or a creative collaborator — MyGang brings AI companions to life with emotional depth and genuine personality.",
    features: [
      "Create custom AI characters with unique personalities",
      "Persistent memory — characters remember your conversations",
      "Group chats with multiple AI personalities",
      "Character marketplace to discover community creations",
      "Voice and image interactions beyond text",
    ],
    status: "In Development",
    url: "https://mygang.ai",
  },
  {
    name: "Ottr Chat",
    description: "Privacy-first messaging",
    sector: "Communication",
    slug: "ottr-chat",
    tagline: "Messaging that puts privacy first.",
    longDescription:
      "Ottr Chat is a privacy-first messaging platform built for users who value security without compromising on experience. Every message is end-to-end encrypted by default. With disappearing messages, anonymous sign-up, and zero data collection, Ottr Chat is the messaging app for people who believe private conversations should stay private.",
    features: [
      "End-to-end encryption on all messages by default",
      "Disappearing messages with customisable timers",
      "Anonymous sign-up — no phone number required",
      "Zero data collection or ad tracking",
      "Group chats with the same privacy guarantees",
    ],
    status: "In Development",
  },
  {
    name: "AFKNPC",
    description: "Gaming community platform",
    sector: "Gaming",
    slug: "afknpc",
    tagline: "The home base for gamers.",
    longDescription:
      "AFKNPC is a gaming community platform that connects players, content creators, and teams. Find your next squad, share highlights, track stats, and engage with a community built by gamers, for gamers. Whether you're a casual player or a competitive grinder, AFKNPC gives you the tools and community to level up your gaming experience.",
    features: [
      "Squad finder with skill-based matchmaking",
      "Game clip sharing and highlight reels",
      "Integrated stats tracking across popular titles",
      "Community forums and team management tools",
      "Creator profiles with audience engagement tools",
    ],
    status: "In Development",
  },
];

export const founder = {
  name: "Dr. Syed Irfan",
  role: "Founder & Group Lead",
  bio: "Oversees Altcorp's group strategy, product direction, and long-term development across all businesses and platforms.",
  extendedBio:
    "Dr. Syed Irfan is the founder of Altcorp and oversees its group strategy, product direction, and long-term development. His work centres on building and operating software companies, digital products, and category-specific platforms under the Altcorp umbrella.",
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
