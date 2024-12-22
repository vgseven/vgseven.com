import { cn } from "@/lib/utils";
import * as React from "react";

interface BackgroundGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BackgroundGrid = React.forwardRef<
  HTMLDivElement,
  BackgroundGridProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pointer-events-none absolute inset-0 top-0 left-0 flex h-full w-full bg-[length:25px] bg-grid-pattern bg-repeat",
      className
    )}
    style={{
      maskImage: "radial-gradient(ellipse, white, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse, white, transparent 70%)",
    }}
    {...props}
  />
));
