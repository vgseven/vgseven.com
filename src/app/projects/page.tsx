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
              "text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent my-4 bg-gradient-to-tl from-purple-200 dark:via-purple-400 via-purple-500 to-purple-800"
            }
          >
            FORKED TIMELINE PROJECTS
          </Label>
          <Label className={"text-zinc-400 mb-2 leading-5"}>
            The Forked Timeline, the projects that are currently active but need
            more research and extensive work, and I am researching them.
            Additionally, the projects are in their private beta stage.
          </Label>
          <SkeletonCard title={"Silvi"} />
          <SkeletonCard title={"Capital"} />
          <SkeletonCard title={"Timeline"} />
        </div>
        <div className={"my-2 flex flex-col"}>
          <Label
            className={
              "text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent my-4 bg-gradient-to-tl dark:from-green-200 from-green-300 dark:to-green-900 to-green-700"
            }
          >
            BRANCHED TIMELINE PROJECTS
          </Label>
          <Label className={"text-zinc-400 mb-2 leading-5"}>
            The Branched Timeline, the projects that are currently upcoming, and
            I am researching them. Additionally, the projects are in their alpha
            stage.
          </Label>
          <SkeletonCard title={"Nebula"} />
          <SkeletonCard title={"Silvimail"} />
        </div>
      </div>
      <Footer />
    </>
  );
}
