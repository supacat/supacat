import "../styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const DESCRIPTION =
  "We create software to help people because it's fulfilling and we're passionate about it. We believe that's the best reason to do anything.";

export const metadata: Metadata = {
  metadataBase: new URL("https://supacat.io"),
  title: {
    default: "Supacat",
    template: "%s | Supacat",
  },
  description: DESCRIPTION,
  keywords: ["software", "startup", "studio", "products"],
  authors: [{ name: "Supacat", url: "https://supacat.io" }],
  creator: "Supacat",
  publisher: "Supacat",
  alternates: {
    canonical: "https://supacat.io",
  },
  openGraph: {
    title: "Supacat",
    description: DESCRIPTION,
    url: "https://supacat.io",
    siteName: "Supacat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supacat",
    description: DESCRIPTION,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <body className="flex min-h-svh flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <main className="mx-auto flex w-full max-w-[692px] flex-1 flex-col gap-12 overflow-x-hidden px-6 pt-12 pb-2 sm:pt-16 md:overflow-x-visible md:pt-20">
            <Header />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
