import { cn } from "@/lib/utils";
import { Label } from "@/ui/primitives/label";
import type { ReactNode } from "react";

export function GradientText({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  const words = children?.toString();
  const chars = words?.split("");
  return (
    <div>
      {chars?.map((char) => (
        <Label
          key={char + Math.random()}
          className={cn(
            "bg-gradient-to-tl from-black via-black/90 to-zinc-400 bg-clip-text text-transparent",
            className
          )}
        >
          {char}
        </Label>
      ))}
    </div>
  );
}
