import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteNav } from "@/components/site-nav";

const inter = localFont({
  variable: "--font-inter",
  src: "./fonts/InterVariable.woff2",
  display: "swap",
});

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "./fonts/IBMPlexMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.woff2", weight: "500", style: "normal" },
  ],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olly-styles.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olly Styles",
    template: "%s · Olly Styles",
  },
  description: "AI engineer specialising in agent and LLM evaluation. Author of WorkBench.",
  openGraph: {
    title: "Olly Styles",
    description: "AI engineer specialising in agent and LLM evaluation. Author of WorkBench.",
    url: siteUrl,
    siteName: "Olly Styles",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="min-h-screen">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
