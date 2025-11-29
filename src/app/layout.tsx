import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://supacat.io"),
  title: {
    default: "Supacat",
    template: "%s | Supacat",
  },
  description: `We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.`,
  keywords: ["software", "startup", "studio", "products"],
  authors: [{ name: "Supacat", url: "https://supacat.io" }],
  creator: "Supacat",
  publisher: "Supacat",
  alternates: {
    canonical: "https://supacat.io",
  },
  openGraph: {
    title: "Supacat",
    description: `We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.`,
    url: "https://supacat.io",
    siteName: "Supacat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supacat",
    description: `We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.`,
    site: "@joulsounet",
    creator: "@joulsounet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans", inter.variable)}>
        <main className="h-svh mx-auto flex max-w-[692px] flex-col gap-8 overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
