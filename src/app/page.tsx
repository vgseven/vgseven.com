"use client";

import { projects } from "@/lib/content";
import { ProjectCard } from "@/ui/components/project-card";
import { ProjectDetailsDialog } from "@/ui/components/project-detail-dialog";
import { Button } from "@/ui/primitives/button";
import { Dialog } from "@/ui/primitives/dialog";
import { Label } from "@/ui/primitives/label";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <div
        className={
          "mb-4 flex flex-row items-center justify-center gap-4 leading-none max-sm:flex-col"
        }
      >
        <Label
          className={
            "bg-linear-to-tl from-black via-white/60 to-white bg-clip-text p-0 font-semibold text-[4rem] text-transparent sm:text-[5rem]"
          }
        >
          VAIBHAV GOSAVI
        </Label>
      </div>

      <div className="my-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Dialog
            key={project.id}
            open={openProjectId === project.id}
            onOpenChange={(isOpen) =>
              setOpenProjectId(isOpen ? project.id : null)
            }
          >
            <ProjectCard
              project={project}
              onClick={() => setOpenProjectId(project.id)}
            />
            <ProjectDetailsDialog project={project} />
          </Dialog>
        ))}
      </div>

      <div className="my-4 flex flex-col items-center justify-center">
        <Link href="https://x.com/vgsevenn" target="_blank">
          <Button>Find More Updates</Button>
        </Link>
        <Label className={"my-2 text-center text-[12px] tracking-widest"}>
          ALL RIGHTS RESERVED. VGSEVEN &copy; {new Date().getFullYear()}
        </Label>
      </div>
    </main>
  );
}
