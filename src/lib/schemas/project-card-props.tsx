export type ProjectCardProps = {
  title: string;
  description: string;
  stage: "Pre-Alpha" | "Alpha" | "Private-Beta" | "Public-Beta" | "Live";
  date: string;
  timeline: "Sacred" | "Branched";
  summary?: string;
  official?: string;
  knowMore?: string;
  findUpdates?: string;
};
