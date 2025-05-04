import { projects } from "@/lib/content";
import { Label } from "@/primitives/label";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">
      <div className="mx-auto my-8 w-full max-w-3xl">
        <div className="mb-6 sm:mb-8">
          <Link href="https://x.com/vgsevenn" target="_blank">
            <Label className="text-xl transition-colors duration-200 hover:cursor-pointer sm:text-2xl md:text-3xl">
              @vgseven
            </Label>
          </Link>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="space-y-2">
              <Link href={project.link}>
                <Label className="border-secondary-foreground/40 border-b text-base text-secondary-foreground/90 lowercase leading-8 transition-colors duration-200 hover:cursor-pointer hover:text-secondary-foreground sm:text-lg sm:leading-10 md:text-xl">
                  {project.name}
                </Label>
              </Link>
              <p className="text-secondary-foreground/80 text-sm lowercase sm:text-base md:text-lg">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
