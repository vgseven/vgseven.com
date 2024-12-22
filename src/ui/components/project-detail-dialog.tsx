import type { Project } from "@/lib/interface";
import Link from "next/link";
import { Button } from "../primitives/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../primitives/dialog";

export function ProjectDetailsDialog({ project }: { project: Project }) {
  return (
    <DialogContent className="max-w-4xl p-8">
      <DialogHeader>
        <DialogTitle className={"text-2xl"}>{project.name}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p>{project.details}</p>
      </div>
      <DialogFooter>
        <Link href={project.link} target="_blank">
          <Button>Get Started</Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  );
}
