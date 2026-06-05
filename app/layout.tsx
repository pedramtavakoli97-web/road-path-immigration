import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Canadian Immigration Consulting`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Canadian Immigration Consulting`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/toronto-skyline.png", width: 1600, height: 900 }],
    locale: "en_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Canadian Immigration Consulting`,
    description: site.description,
    images: ["/images/toronto-skyline.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
