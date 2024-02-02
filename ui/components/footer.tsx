"use client";

import { BrandIconX } from "@/ui/icons/brand-icon-x";
import { Label } from "@/ui/primitives/label";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function Footer() {
  const { setTheme } = useTheme();
  return (
    <footer className={"flex justify-center items-center flex-col my-6"}>
      <div
        className={
          "flex flex-row gap-6 mb-3 justify-center items-center dark:text-zinc-300 text-black"
        }
      >
        <a href={"https://x.com/vgsevenn/"} target="_blank">
          <BrandIconX width={16} height={16} />
        </a>
        <a href={"https://github.com/thevgseven"} target="_blank">
          <GitHubLogoIcon height={16} width={16} />
        </a>
        <a href={"https://linkedin.com/in/vgseven"} target="_blank">
          <LinkedInLogoIcon height={16} width={16} />
        </a>
        <MoonIcon
          onClick={() => setTheme("dark")}
          width={16}
          height={16}
          className={"cursor-pointer"}
        />

        <SunIcon
          onClick={() => setTheme("light")}
          width={16}
          height={16}
          className={"cursor-pointer"}
        />
      </div>
      <Label className={"tracking-tighter dark:text-zinc-400 text-black"}>
        VGSEVEN &copy; {new Date().getFullYear()}
      </Label>
    </footer>
  );
}
