import { Projects } from "@/content/projects";
import ProjectCard from "@/ui/components/project-card";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <div className={"flex flex-wrap gap-6"}>
        {Projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
