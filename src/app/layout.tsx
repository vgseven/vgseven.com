import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/root-layout.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "vgseven",
  description: "make happen.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "vgseven",
    description: "make happen.",
    url: "https://vgseven.com",
    siteName: "vgseven",
    images: [
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/makehappen-banner.png",
        width: 800,
        height: 600,
        alt: "vgseven",
      },
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/makehappen-banner.png",
        width: 1800,
        height: 1600,
        alt: "vgseven",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vgseven",
    description: "make happen.",
    images: [
      "https://odouepjkxheu5esn.public.blob.vercel-storage.com/vgseven/makehappen-banner.png",
    ],
  },
  metadataBase: new URL("https://vgseven.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  other: {
    "google-adsense-account": "ca-pub-4155181137197417",
  },
};

// <meta name="google-adsense-account" content="ca-pub-4155181137197417">

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        "font-geist-sans",
        fonts.GeistSans.variable,
        fonts.GeistMono.variable
      )}
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
