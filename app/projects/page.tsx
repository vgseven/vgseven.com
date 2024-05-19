import { BranchedProjects, Projects } from "@/lib/content/projects";
import { Footer } from "@/ui/components/footer";
import ProjectCard from "@/ui/components/project-card";
import { Label } from "@/ui/primitives/label";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectHome() {
  return (
    <>
      <div className={"mx-20 mt-28 flex flex-col max-sm:mx-4"}>
        <div className={"flex flex-wrap gap-8"}>
          {Projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <Label className={"my-4 text-3xl"}>
          Branched - Open Source Projects
        </Label>
        <div className={"flex flex-wrap gap-6"}>
          {BranchedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
