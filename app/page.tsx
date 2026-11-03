import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";

export const metadata: Metadata = {
  title: "Altcorp — Software, Systems & Applied AI",
  description:
    "Software for visual planning, product feedback, AI conversation, research, games and forecasting. Explore Altcorp’s selected projects and product development practice.",
  openGraph: {
    title: "Altcorp — Software, Systems & Applied AI",
    description:
      "Specific products for planning, feedback, AI conversation, research, games and forecasting.",
    images: [
      { url: "/art/tiger-monochrome.webp", width: 1536, height: 1024 },
    ],
  },
};

export default function Home() {
  return <StudioHome />;
}
