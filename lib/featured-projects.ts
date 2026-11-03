export interface FeaturedProject {
  name: string;
  category: string;
  status: string;
  description: string;
  focus: string[];
  href?: string;
}

// Approved displayed selection. Legacy company records and routes remain intact.
export const featuredProjects: FeaturedProject[] = [
  {
    name: "Hyperstate",
    category: "Planning software",
    status: "Live product",
    description:
      "Projects, tasks and notes in a connected visual workspace. Map and nested-list views keep the same plan in context; Today brings scheduled tasks together.",
    focus: ["Map + Thread views", "Tasks + notes", "MCP connections"],
    href: "https://hyperstate.io/",
  },
  {
    name: "Feedbacks.dev",
    category: "Product feedback",
    status: "Public product",
    description:
      "In-product feedback capture with useful page context, a triage dashboard, public feedback boards and product updates. A continuous path from customer input to the next product decision.",
    focus: ["Embeddable widgets", "Feedback triage", "Boards + updates"],
    href: "https://www.feedbacks.dev/",
  },
  {
    name: "MyGang.ai",
    category: "Conversational AI",
    status: "Public product",
    description:
      "AI group conversations with multiple characters and distinct personalities. The product explores shared chat dynamics, conversation history and persistent memory.",
    focus: [
      "Multi-character chat",
      "Distinct personalities",
      "Conversation memory",
    ],
    href: "https://www.mygang.ai/",
  },
  {
    name: "research.cheap",
    category: "Research software",
    status: "Public preview",
    description:
      "Tools for preparing and screening research citations: import records, identify duplicates, apply eligibility criteria and inspect the evidence behind title-and-abstract screening decisions.",
    focus: ["Citation import", "Deduplication", "Inspectable screening"],
    href: "https://research.cheap/",
  },
  {
    name: "SOVLR",
    category: "Puzzle game",
    status: "Web game",
    description:
      "A sliding-letter word game with a structured 310-puzzle career. The work combines tactile puzzle interaction, deterministic progression and saved player progress.",
    focus: ["Sliding-letter puzzles", "Career progression", "Saved progress"],
    href: "https://sovlr.com/",
  },
  {
    name: "KeyboardShortcuts",
    category: "Interface development",
    status: "In development",
    description:
      "Interface and interaction work focused on keyboard-led software use. The project is currently in development.",
    focus: ["Keyboard interaction", "Interface design", "Ongoing development"],
  },
  {
    name: "forecast.social",
    category: "Forecasting network",
    status: "Invitation access",
    description:
      "A reputation-based network for probability forecasts, timestamped calls and resolved outcomes. Forecasting builds a visible track record, with access currently by invitation and no wagering.",
    focus: [
      "Probability forecasts",
      "Timestamped records",
      "Reputation scoring",
    ],
    href: "https://www.forecast.social/",
  },
];
