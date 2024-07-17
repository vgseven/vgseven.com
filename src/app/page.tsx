import { vgsevenProjects, labsevenProjects } from "@/content/projects";
import ProjectCard from "@/ui/components/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/primitives/tabs";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <Tabs defaultValue="vgsevencompany">
        <TabsList>
          <TabsTrigger value="vgsevencompany">VGSEVEN</TabsTrigger>
          <TabsTrigger value="labseven">LABSEVEN</TabsTrigger>
        </TabsList>
        <TabsContent value="vgsevencompany">
          <div className={"flex flex-wrap gap-2"}>
            {vgsevenProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="labseven">
          <div className={"flex flex-wrap gap-2"}>
            {labsevenProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
