import { cn } from "@/lib/utils";
import * as React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("inline-block text-base leading-relaxed", className)}
      {...props}
    />
  )
);

Paragraph.displayName = "Paragraph";
