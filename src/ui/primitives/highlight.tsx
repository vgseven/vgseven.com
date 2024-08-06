import { cn } from "@/lib/utils";
import * as React from "react";

interface HighlightProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Highlight = React.forwardRef<HTMLDivElement, HighlightProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex border-b-2 cursor-pointer border-zinc-800",
          className
        )}
        {...props}
      />
    );
  }
);

Highlight.displayName = "Highlight";
