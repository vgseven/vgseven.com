import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const GeistSansFont = GeistSans;
export const GeistMonoFont = GeistMono;

export const SFProTextFont = localFont({
  src: "../public/assets/fonts/SFProText-Regular.ttf",
  variable: "--font-sfprotext",
  weight: "400",
  fallback: ["--font-geist"],
  display: "swap",
});

export const SFMonoFont = localFont({
  src: "../public/assets/fonts/SFMono-Regular.ttf",
  variable: "--font-sfmono",
  weight: "400",
  fallback: ["--font-geist-mono"],
  display: "swap",
});
