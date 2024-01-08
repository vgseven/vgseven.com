import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";

export const PatriotFont = localFont({
  src: "./Patriot.otf",
  display: "swap",
  variable: "--fontPatriot",
  weight: "400",
});

export const GeistSansFont = GeistSans;
