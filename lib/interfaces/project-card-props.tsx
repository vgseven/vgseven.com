import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProjectCardProps = {
  title: string;
  description: string;
  stage:
    | "Research"
    | "Development"
    | "Alpha"
    | "Beta"
    | "Preview"
    | "Production";
  date: string;
  summary: string;
  official: string;
  findUpdates: string;
  profile: string | StaticImport;
};
