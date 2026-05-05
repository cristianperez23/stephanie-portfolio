import type { Metadata } from "next";
import { Inter, Playfair_Display, Allura, Montserrat, Dancing_Script, Great_Vibes } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.stephaniepinos.com";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stephanie Pinos | Fashion PR Portfolio",
    template: "%s | Stephanie Pinos",
  },
  description:
    "Stephanie Pinos is a public relations and social media professional specializing in fashion PR, luxury brand communications, strategic storytelling, and media relations.",
  applicationName: "Stephanie Pinos Portfolio",
  authors: [{ name: "Stephanie Pinos", url: siteUrl }],
  creator: "Stephanie Pinos",
  publisher: "Stephanie Pinos",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Stephanie Pinos",
    "Stephanie Maria Pinos",
    "fashion PR",
    "public relations portfolio",
    "luxury brand communications",
    "media relations",
    "social media strategy",
    "Purple PR",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "P-IFHGCkEFAYSRxvDFi1i4Sn1ZUqrv1xL7YUrbKV35U",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Stephanie Pinos",
    title: "Stephanie Pinos | Fashion PR Portfolio",
    description:
      "Explore Stephanie Pinos' fashion PR portfolio, featuring luxury brand communications, showroom experience, campaign strategy, and media relations work.",
    images: [
      {
        url: "/SP_logo5.png",
        width: 300,
        height: 300,
        alt: "Stephanie Pinos logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Stephanie Pinos | Fashion PR Portfolio",
    description:
      "Fashion PR portfolio for Stephanie Pinos, a public relations and social media professional focused on luxury brand storytelling.",
    images: ["/SP_logo5.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Stephanie Pinos",
      alternateName: "Stephanie Maria Pinos",
      url: siteUrl,
      email: "mailto:stephaniemariapinos@gmail.com",
      jobTitle: "Public Relations and Social Media Professional",
      sameAs: ["https://www.linkedin.com/in/stephanie-maria-pinos/"],
      knowsAbout: [
        "Fashion PR",
        "Luxury Brand Communications",
        "Media Relations",
        "Social Media Strategy",
        "Brand Storytelling",
        "Showroom Operations",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Montclair State University",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Stephanie Pinos",
      url: siteUrl,
      description:
        "A fashion PR portfolio showcasing Stephanie Pinos' brand communications, campaign strategy, and public relations experience.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
