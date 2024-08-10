"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
    },
    defaultVariants: {
      variant: "sm",
    },
  }
);

interface LabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof labelVariants> {}

export const Label = React.forwardRef<HTMLDivElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(labelVariants(), className)} {...props} />
  )
);

Label.displayName = "Label";
