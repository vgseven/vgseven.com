export type ProjectCardProps = {
  title: string;
  description: string;
  stage: "Pre-Alpha" | "Alpha" | "Beta" | "Live";
  date: string;
  timeline: "Sacred" | "Forked" | "Branched";
  summary: string;
  official: string;
  knowMore: string;
  findUpdates: string;
};
