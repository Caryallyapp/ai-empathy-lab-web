import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, League_Spartan } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Analytics } from "@vercel/analytics/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE } from "@/content/site";

const display = League_Spartan({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const text = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-text",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "AI Empathy Lab | Research in Empathic Human-AI Interaction",
  description: SITE.description,
  openGraph: {
    siteName: SITE.name,
    images: ["/brand/og.png"],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#F4F6FB",
};

/**
 * Stamps html.js before first paint, so the scroll-reveal styles only hide
 * content when JavaScript is there to reveal it again.
 */
const jsStamp = `document.documentElement.classList.add("js")`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the inline script adds the js class to <html>
    // before React hydrates, which is an expected attribute mismatch.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${text.variable} ${mono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: jsStamp }} />
        {/* Vercel Web Analytics: cookieless, so no consent banner is owed.
            Counts nothing until Web Analytics is switched on in the Vercel
            project dashboard; harmless in local dev. */}
        <Analytics />
        <ScrollReveal />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
