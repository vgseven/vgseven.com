import { Footer } from "@/ui/components/footer";
import ProjectCard from "@/ui/components/project-card";
import { type Metadata } from "next";
import { BranchedProjects, Projects } from "@/lib/content/projects";
import { Label } from "@/ui/primitives/label";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectHome() {
  return (
    <>
      <div className={"mt-28 mx-16 max-sm:mx-4 flex flex-col"}>
        <div className={"my-2 flex flex-wrap gap-6"}>
          {Projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <Label className={"text-3xl my-4"}>Branched Projects</Label>
        <div className={"my-2 flex flex-wrap gap-6"}>
          {BranchedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
