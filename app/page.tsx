import { labsevenProjects, Projects } from "@/lib/content/projects";
import ProjectCard from "@/ui/components/project-card";
import { Label } from "@/ui/primitives/label";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <div className={"flex flex-wrap gap-8"}>
        {Projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <Label className={"my-4 text-3xl"}>labseven Projects</Label>
      <div className={"flex flex-wrap gap-6"}>
        {labsevenProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
