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
import { default as Link } from "next/link";

export default function Home() {
  return (
    <div className={"mx-20 mt-16 flex flex-col max-sm:mx-4"}>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">PROJECTS</TabsTrigger>
          <TabsTrigger value="labseven">LABSEVEN</TabsTrigger>
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
            <CardHeader>
              <CardTitle>Project Social Media</CardTitle>
              <CardDescription className={"mt-4"}>
                I don't have any performant name for this project yet but I'm
                working on it, The First step we have is Persona. Project
                Persona is something intresting and I'm working on it..
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <b className={"text-white"}>Persona</b>, The First Internet
                Presence. Persona is something on which you'll able to create
                your public persona and highlight all your special things at
                one. Such as social links, writings, projects, achievements,
                etc.
              </p>
              <p>
                Currently Persona is in research phase, stay tuned here and on{" "}
                <Link href={"https://x.com/vgsevenn"} target={"_blank"}>
                  <b className={"text-white"}>X</b>
                </Link>{" "}
                and for updates.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="updates">
          <Card className={"my-6 rounded-xl p-2"}>
            <CardHeader>
              <CardTitle className={"text-xl"}>
                Project Titanium, Liquid and Capital is moved from labseven to
                VGSEVEN Projects.
              </CardTitle>
              <CardDescription className={"mt-4"}>
                Titanium, Liquid and Capital is moved from labseven to VGSEVEN,
                Titanium is security platform, Liquid is Content Ecosystem and
                Capital is Personal Finance Assistant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Titanium, Liquid and Capital is currently in development phase and
              will be released soon.
            </CardContent>
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
              <Link href={"mailto:contact@vgseven.com"} target={"_blank"}>
                <b className={"text-white"}>contact@vgseven.com</b>
              </Link>{" "}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
