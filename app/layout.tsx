import type { Metadata } from "next";
import { Geist, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const editorial = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.altcorp.in"),
  title: "Altcorp — Exploration, Strategy & Production",
  description:
    "An independent digital and AI studio. Exploring possibilities, shaping strategy and bringing considered products to life.",
  openGraph: {
    title: "Altcorp — Instinct meets intelligence.",
    description:
      "Exploration, strategy and production for a world being reshaped by AI.",
    type: "website",
    siteName: "Altcorp",
    images: [
      {
        url: "/art/material-study.webp",
        width: 1536,
        height: 1024,
        alt: "Original frosted glass and enamel material study for Altcorp",
      },
    ],
  },
  icons: { icon: "/brand-icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${editorial.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
