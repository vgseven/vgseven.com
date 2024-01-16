import type { Metadata } from "next";
import "@/styles/root-layout.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/lib/functions/theme-provider";
import { Header } from "@/ui/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/ui/primitives/sonner";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "VGSEVEN",
  description:
    "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "VGSEVEN",
    description:
      "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship.",
    url: "https://vgseven.com",
    siteName: "VGSEVEN",
    images: [
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company.png",
        width: 1800,
        height: 1600,
        alt: "VGSEVEN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGSEVEN",
    description:
      "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship.",
    siteId: "7777",
    creator: "@vgsevenn",
    creatorId: "0707",
    images: [
      "https://eo4grnhr9puxdgdq.public.blob.vercel-storage.com/vgseven-company.png",
    ],
  },
  metadataBase: new URL("https://vgseven.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={"font-sans"}>{children}</main>
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
