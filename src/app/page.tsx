import { projects } from "@/lib/content";
import { Label } from "@/primitives/label";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <div className={"max-w-6xl"}>
        <div className={"mb-4"}>
          <Link href={"https://x.com/vgsevenn"} target={"_blank"}>
            <Label className={"text-2xl hover:cursor-pointer"}>@vgseven</Label>
          </Link>
        </div>
        {projects.map((project) => (
          <div key={project.id}>
            <Link href={project.link}>
              <Label
                className={
                  "border-secondary-foreground/40 border-b text-lg text-secondary-foreground/90 lowercase leading-10 hover:cursor-pointer"
                }
              >
                {project.name}
              </Label>
            </Link>
            <p className={"text-secondary-foreground/80 lowercase"}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
