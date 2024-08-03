import { vgsevenProjects } from "@/content/projects";
import { ProjectCard } from "@/ui/components/project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { Label } from "@/ui/primitives/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/primitives/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">VGSEVEN</TabsTrigger>
          <TabsTrigger value="labseven">LABSEVEN</TabsTrigger>
          <TabsTrigger value="enriching">ENRICHING</TabsTrigger>
          <TabsTrigger value="updates">UPDATES</TabsTrigger>
          <TabsTrigger value="about">ABOUT</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className={"flex flex-wrap gap-2"}>
            {vgsevenProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="labseven">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardContent>
              <Label>Work in Progress</Label>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="enriching">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle className={"text-xl"}>Enriching Projects</CardTitle>
            </CardHeader>
            <CardContent>
              Currently, I am working on understanding the Supabase and Dub
              codebases. I want to migrate Supabase to a pnpm workspace and
              package manager, integrating Biome for formatting and linting. And
              updating Dub to use Biome additionally adding the Geist font and
              implementing a dark theme to the Dub codebase.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="updates">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardContent>No new updates yet.</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="about">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription className={"mt-4"}>
                Hey hi, I'm Vaibhav Gosavi, I'm a Developer and currently
                working on Silvi. I like to build things and learn new things.
              </CardDescription>
            </CardHeader>
            <CardContent>
              You can find me on{" "}
              <Link href={"https://x.com/vgsevenn"} target={"_blank"}>
                <b className={"text-white"}>X</b>
              </Link>{" "}
              or DM on{" "}
              <Link href={"https://x.com/vgsevenn"} target={"_blank"}>
                <b className={"text-white"}>X</b>
              </Link>{" "}
              and mail at{" "}
              <Link href={"mailto:ivaibhavgosavi@gmail.com"} target={"_blank"}>
                <b className={"text-white"}>ivaibhavgosavi@gmail.com</b>
              </Link>{" "}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
