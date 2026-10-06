import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url || "http://localhost:3000"),
  title: {
    default: "Hudmeta — Independent Design & Development Studio",
    template: "%s — Hudmeta",
  },
  description: site.description,
  ...(site.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Hudmeta — Distinct by design. Built to perform.",
    description: site.description,
    siteName: "Hudmeta",
    locale: "en_US",
    type: "website",
    ...(site.url ? { url: site.url } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudmeta — Distinct by design. Built to perform.",
    description: site.description,
  },
  robots: site.url
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#171817" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
