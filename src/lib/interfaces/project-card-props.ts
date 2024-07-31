import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectCardProps = {
  title: string;
  stage:
    | "Research"
    | "Development"
    | "Alpha"
    | "Beta"
    | "Preview"
    | "Production";
  launchDate: string;
  summary: string;
  official: string;
  findUpdates: string;
  profile: string | StaticImport;
  newUpdate: string;
};
