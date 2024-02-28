"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-mono font-semibold",
          description:
            "group-[.toast]:text-muted-foreground font-mono font-semibold",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-mono font-semibold",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-mono font-semibold",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
