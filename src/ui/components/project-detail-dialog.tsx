import type { Project } from "@/lib/interface";
import { Button } from "@/ui/primitives/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/primitives/dialog";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function ProjectDetailsDialog({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-80 rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md sm:max-w-4xl sm:p-8">
      <DialogHeader className={"text-left"}>
        <DialogTitle className={"text-2xl"}>{project.name}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p className={"text-sm sm:text-base"}>{project.details}</p>
      </div>
      <DialogFooter>
        <Link href={project.link} target="_blank">
          <Button>
            Get Started <ArrowTopRightIcon />
          </Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  );
}
