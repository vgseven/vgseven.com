import { vgsevenProjects } from "@/content/projects";
import { ProjectCard } from "@/ui/components/project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/primitives/tabs";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <Tabs defaultValue="vgseven">
        <TabsList>
          <TabsTrigger value="vgseven">VGSEVEN</TabsTrigger>
          <TabsTrigger value="labseven">LABSEVEN</TabsTrigger>
          <TabsTrigger value="updates">UPDATES</TabsTrigger>
          <TabsTrigger value="writings">WRITINGS</TabsTrigger>
          <TabsTrigger value="about">ABOUT</TabsTrigger>
        </TabsList>
        <TabsContent value="vgseven">
          <div className={"flex flex-wrap gap-2"}>
            {vgsevenProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="labseven">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle>Project EV</CardTitle>
              <CardDescription className={"mt-4"}>
                EV - The Electric Vehicles, Researching on EVs..
              </CardDescription>
            </CardHeader>
            <CardContent>
              The Most important key components of EVs are batteries and
              Software.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="updates">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle>Project EV</CardTitle>
              <CardDescription className={"mt-4"}>
                EV - The Electric Vehicles, Researching on EVs..
              </CardDescription>
            </CardHeader>
            <CardContent>
              The Most important key components of EVs are batteries and
              Software.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="writings">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle>Project EV</CardTitle>
              <CardDescription className={"mt-4"}>
                EV - The Electric Vehicles, Researching on EVs..
              </CardDescription>
            </CardHeader>
            <CardContent>
              The Most important key components of EVs are batteries and
              Software.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="about">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription className={"mt-4"}>
                Vaibhav Gosavi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              I like to build things and learn new things..
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
