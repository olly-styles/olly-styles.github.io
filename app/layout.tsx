import "./globals.css";

import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";

import { SiteNav } from "@/components/site-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olly-styles.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olly Styles",
    template: "%s · Olly Styles",
  },
  description: "ML engineer, researcher, ex-founder.",
  openGraph: {
    title: "Olly Styles",
    description: "ML engineer, researcher, ex-founder.",
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
