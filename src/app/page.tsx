import { cn } from "@/lib/utils/cn";
import { PatriotFont } from "@/ui/fonts/fonts";
import { Canvas } from "@/ui/components/canvas";

export default function Home() {
  return (
    <div>
      <h1
        className={cn(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl md:text-8xl text-center text-white",
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
        className={cn(
          "fixed top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-center text-white"
        )}
      >
        Obsessed with AI, Quantum Computing, Space, Psychology and Philosophy
        and Entrepreneurship..
      </h1>
      <Canvas />
    </div>
  );
}
