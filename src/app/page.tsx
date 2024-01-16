import { cn } from "@/lib/utils";
import { PatriotFont } from "@/ui/fonts/fonts";
import { Canvas } from "@/ui/components/canvas";
import { Button } from "@/ui/primitives/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div>
      <h1
        className={cn(
          "fixed top-72 max-sm:top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-9xl max-sm:text-7xl text-center text-white",
          PatriotFont.className
        )}
      >
        <div className="relative tracking-normal">
          <span>THE</span>
        </div>
        <div className="relative tracking-tighter">
          <span>VGSEVEN</span>
        </div>
      </h1>
      <h1
        className={
          "fixed top-3/4 max-sm:top-96 mt-4 max-sm:mt-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-center text-white"
        }
      >
        Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy
        and Entrepreneurship..
      </h1>
      <Link href={"/projects"}>
        <Button
          className={
            "fixed mt-24 max-sm:mt-10 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base rounded-full py-6 px-8"
          }
        >
          Explore Projects
          <ArrowRightIcon
            height={30}
            width={30}
            className={
              "rounded-full ml-4 bg-black text-white p-2 hover:animate-pulse"
            }
          />
        </Button>
      </Link>
      <Canvas />
    </div>
  );
}
