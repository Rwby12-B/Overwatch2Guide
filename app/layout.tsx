import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fira_Sans_Extra_Condensed, Onest } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { heroes } from "@/data/heroes";
import { buildSearchIndex } from "@/lib/searchIndex";

// NOTE: Mongolian Ү/Ө live in the "cyrillic-ext" subset, not plain "cyrillic".
// Both fonts below were checked to actually contain those glyphs.
const display = Fira_Sans_Extra_Condensed({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Onest({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Overwatch Mongolia — Баатрын лавлах сан",
  description:
    "Overwatch-ийн бүх баатар, чадвар, Perk болон Passive-ийг Монгол хэлээр тайлбарласан лавлах сайт.",
};

export const viewport: Viewport = { themeColor: "#090e1f" };

export default function RootLayout({ children }: { children: ReactNode }) {
  const index = buildSearchIndex(heroes);
  return (
    <html lang="mn" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-void font-body text-paper antialiased">
        <a href="#main" className="skip-link">
          Агуулга руу очих
        </a>
        <Navbar index={index} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
