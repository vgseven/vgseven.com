import { fonts } from "@/lib/fonts";
import "@/styles/root-layout.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VGSEVEN",
  description: "Make Happen.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "VGSEVEN",
    description: "Make Happen.",
    url: "https://vgseven.com",
    siteName: "VGSEVEN",
    images: [
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
        width: 800,
        height: 600,
        alt: "VGSEVEN",
      },
      {
        url: "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
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
    description: "Make Happen.",
    images: [
      "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg",
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
      className={`${fonts.GeistMono.variable} ${fonts.GeistSans.variable} font-geistMono`}
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
