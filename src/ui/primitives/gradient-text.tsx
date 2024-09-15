import { cn } from "@/lib/utils";
import { Label } from "@/ui/primitives/label";
import * as React from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GradientText = React.forwardRef<HTMLDivElement, GradientTextProps>(
  ({ className, children, ...props }, ref) => {
    const words = children?.toString();
    const chars = words?.split("");
    return (
      <div className={"flex flex-row"} ref={ref} {...props}>
        {chars?.map((char) => (
          <Label
            key={char + Math.random()}
            className={cn(
              "m-0 bg-gradient-to-tl from-black via-black/90 to-zinc-400 bg-clip-text p-0 font-semibold text-transparent",
              className
            )}
          >
            {char}
          </Label>
        ))}
      </div>
    );
  }
);

GradientText.displayName = "GradientText";
