import Footer from "@/ui/components/footer";
import ProjectCard from "@/ui/components/project-card";
import SkeletonCard from "@/ui/components/skeleton-card";
import { Label } from "@/ui/primitives/label";
import { type Metadata } from "next";
import { SacredProjectCards } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectHome() {
  return (
    <>
      <div className={"mt-28 mx-auto max-w-5xl max-[1100px]:mx-8"}>
        <div className={"my-2 flex flex-col"}>
          <Label
            className={
              "text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent my-4 bg-gradient-to-tl from-zinc-900 dark:via-gray-100 via-zinc-400 to-zinc-900"
            }
          >
            SACRED TIMELINE PROJECTS
          </Label>
          <Label className={"dark:text-zinc-400 text-zinc-800 mb-2 leading-5"}>
            The Sacred Timeline, the projects that are currently active, and I
            am working on them regularly.
          </Label>
          {SacredProjectCards.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className={"my-2 flex flex-col"}>
          <Label
            className={
              "text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent my-4 bg-gradient-to-tl from-zinc-900 dark:via-gray-100 via-zinc-400 to-zinc-900"
            }
          >
            BRANCHED TIMELINE PROJECTS
          </Label>
          <Label className={"text-zinc-400 mb-2 leading-5"}>
            The Branched Timeline, the projects that are currently active but
            need more research and extensive work, and I am researching on them
            heavily. Additionally, the projects are in their private beta stage.
          </Label>
          <SkeletonCard title={"Silvi"} />
          <SkeletonCard title={"Nebula"} />
        </div>
      </div>
      <Footer />
    </>
  );
}
