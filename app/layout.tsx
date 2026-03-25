import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Altcorp — Companies, Products, and Platforms",
  description: "The parent company behind software products, digital platforms, and operating brands.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[family-name:var(--font-geist)]">
        <Header />
        {children}
        <Footer />
        <Grain />
      </body>
    </html>
  );
}
