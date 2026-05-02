import type { Metadata } from "next";
import { Inter, Playfair_Display, Allura, Montserrat, Dancing_Script, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stephanie Pinos | PR Portfolio",
  description: "Fashion PR portfolio showcasing luxury brand experience and strategic storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${allura.variable} ${dancingScript.variable} ${greatVibes.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
