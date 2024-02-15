import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectCardProps = {
  title: string;
  description: string;
  stage:
    | "Pre-Development"
    | "In-Development"
    | "Alpha"
    | "Beta"
    | "Preview"
    | "Live";
  date: string;
  timeline: "Sacred" | "Branched" | "Forked";
  summary?: string;
  official?: string;
  knowMore?: string;
  findUpdates?: string;
  profile?: string | StaticImport;
};
