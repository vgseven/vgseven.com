"use client";

import { BrandXIcon } from "@/ui/icons/brand-x-icon";
import { Label } from "@/ui/primitives/label";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function Footer() {
  const { setTheme } = useTheme();
  return (
    <footer className={"flex justify-center items-center flex-col my-6"}>
      <div className={"flex flex-row ml-4 gap-4 mb-3"}>
        <a href={"https://x.com/vgsevenn/"} target="_blank">
          <BrandXIcon width={16} height={16} className={"mr-1"} />
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
      <Label className={"tracking-widest"}>
        VGSEVEN &copy; {new Date().getFullYear()}
      </Label>
    </footer>
  );
}

export { Footer };
