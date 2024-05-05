import type { Metadata } from "next";
import "@/styles/root-layout.css";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/lib/functions/theme-provider";
import { Header } from "@/ui/components/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMonoFont, GeistSansFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "VGSEVEN",
  description:
    "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship. Chief Meme Officer of Silvi...",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "VGSEVEN",
    description:
      "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship. Chief Meme Officer of Silvi...",
    url: "https://vgseven.com",
    siteName: "VGSEVEN",
    images: [
      {
        url: "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/make-things-happen.png",
        width: 800,
        height: 600,
        alt: "VGSEVEN",
      },
      {
        url: "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/make-things-happen.png",
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
      "Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy and Entrepreneurship. Chief Meme Officer of Silvi...",
    images: [
      "https://dlaiwpar81okkqcb.public.blob.vercel-storage.com/vgseven-company/make-things-happen.png",
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
      className={`${GeistMonoFont.variable} ${GeistSansFont.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-geistMono"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
