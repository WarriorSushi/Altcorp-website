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
    description: "Controlled file and link distribution",
    sector: "Security Software",
    slug: "burnerlinks",
    tagline: "Secure distribution for sensitive links, files, and access flows.",
    longDescription:
      "BurnerLinks is a security-focused distribution product for files, passwords, and sensitive information. It gives users tighter control over how material is shared, how long it remains available, and who can access it, helping reduce exposure in workflows where confidentiality and controlled delivery matter.",
    positioning:
      "A security software product positioned around controlled digital distribution, expiry-based access, and lower-risk handling of confidential material.",
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
    description: "Structured product feedback operations",
    sector: "Developer Software",
    slug: "feedbacks-dev",
    tagline: "Feedback infrastructure for software teams that need clear product signals.",
    longDescription:
      "Feedbacks.dev is a feedback operations platform for software teams that need clearer customer input and stronger prioritisation. It is designed to capture, organise, and structure product feedback so teams can convert user demand into decisions, roadmaps, and measurable product improvements.",
    positioning:
      "A developer software product positioned around structured customer input, prioritisation discipline, and better product decision-making.",
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
    description: "Media intelligence and audience analytics",
    sector: "Media Technology",
    slug: "supaviewer",
    tagline: "Audience analytics and distribution visibility for modern media operators.",
    longDescription:
      "Supaviewer is a media intelligence platform built for digital entertainment, audience analytics, and distribution visibility. It consolidates performance signals across channels and gives creators, studios, and media operators a clearer view of audience behaviour, content performance, and commercial reach.",
    positioning:
      "A media technology product positioned around audience measurement, cross-channel visibility, and performance intelligence for digital entertainment.",
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
    description: "Medical credential verification infrastructure",
    sector: "Healthcare",
    slug: "verified-doctor",
    tagline: "Verification infrastructure for medical identity and professional trust.",
    longDescription:
      "Verified.Doctor is a healthcare verification platform for medical professionals, institutions, and patient-facing systems. It enables reliable confirmation of credentials, qualifications, and licensing status, helping healthcare organisations streamline trust workflows while maintaining strong standards of accuracy, privacy, and institutional confidence.",
    positioning:
      "A healthcare infrastructure product positioned around medical identity, credential verification, and institutional trust across digital care systems.",
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
    tagline: "A social AI product built around multi-agent interaction and shared environments.",
    longDescription:
      "MyGang AI is a consumer AI platform built around multi-agent social interaction. Instead of a one-to-one assistant model, it is structured as a shared environment where users engage with multiple AI personalities, creating a more social, persistent, and product-like interaction layer.",
    positioning:
      "A consumer AI platform positioned around social interaction, group dynamics, and multi-agent engagement rather than single-assistant utility.",
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
    description: "Private-first messaging platform",
    sector: "Communications",
    slug: "ottr-chat",
    tagline: "Private messaging designed for signal, trust, and focused communication.",
    longDescription:
      "Ottr Chat is a private messaging platform designed for secure, focused communication. It is built for users who want stronger privacy controls, a cleaner product experience, and a communications tool that is not shaped by feeds, surveillance-style engagement loops, or advertising incentives.",
    positioning:
      "A communications product positioned around privacy, trusted exchange, and higher-signal messaging behaviour.",
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
    tagline: "Infrastructure for persistent online game systems and player communities.",
    longDescription:
      "AFKNPC is a gaming platform focused on persistent online systems, player community infrastructure, and continuity across sessions. It is built around the view that modern game ecosystems require stronger community, coordination, and engagement tools beyond isolated play sessions or single-title utility features.",
    positioning:
      "A gaming platform positioned around persistence, community infrastructure, and deeper continuity in online player ecosystems.",
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
