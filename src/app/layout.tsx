import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Supacat",
    template: "%s | Supacat",
  },
  description: `We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.`,
  openGraph: {
    title: "Supacat",
    description: `We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.`,
    url: baseUrl,
    siteName: "Supacat",
    locale: "en_US",
    type: "website",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

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
      <body className={cx("bg-gray-100 font-sans", inter.variable)}>
        <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 flex gap-8 flex-col py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
