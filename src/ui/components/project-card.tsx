import type { Project } from "@/lib/interface";
import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <Button
      className={
        "flex h-14 flex-row justify-start gap-4 rounded-lg border-ring/40 bg-secondary/30 hover:cursor-pointer sm:h-16"
      }
      onClick={onClick}
      variant={"outline"}
    >
      <ArrowTopRightIcon className={"h-2 w-2 sm:h-5 sm:w-5"} />
      <div className={"flex flex-col place-items-start justify-start gap-2"}>
        <Label>{project.name}</Label>
        <Label>{project.description}</Label>
      </div>
    </Button>
  );
}
