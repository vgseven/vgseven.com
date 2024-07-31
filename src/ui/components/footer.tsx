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
import { default as Image } from "next/image";
import { default as Link } from "next/link";

export function Footer() {
  const { setTheme } = useTheme();
  return (
    <footer className={"my-6 flex flex-col items-center justify-center pt-6"}>
      <Label
        className={
          "bg-gradient-to-tr from-black to-zinc-300 bg-clip-text text-[14rem] tracking-tighter text-transparent dark:from-white dark:to-zinc-700 max-lg:text-[12rem] max-md:text-[10rem] max-sm:text-[5rem]"
        }
      >
        VGSEVEN
      </Label>
      <div
        className={
          "mb-3 flex flex-row items-center justify-center gap-6 text-black dark:text-zinc-400"
        }
      >
        <Link href={"https://silver.vgseven.com"} target="_blank">
          <Image
            width={32}
            height={32}
            className={
              "rounded-full border border-ring dark:border-white border-black"
            }
            src={
              "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-favicon-4zdpqmlPhdE6ctpA3GP1DopxLzVOI6.png"
            }
            alt={"silver-company"}
          />
        </Link>
        <Link href={"https://x.com/vgsevenn/"} target="_blank">
          <BrandIconX
            width={32}
            height={32}
            className={"rounded-full p-2 border border-ring"}
          />
        </Link>
        <Link href={"https://github.com/vgseven"} target="_blank">
          <GitHubLogoIcon
            width={32}
            height={32}
            className={"rounded-full p-2 border border-ring"}
          />
        </Link>
        <Link href={"https://linkedin.com/in/vgseven"} target="_blank">
          <LinkedInLogoIcon
            width={32}
            height={32}
            className={"rounded-full p-2 border border-ring"}
          />
        </Link>
        <MoonIcon
          onClick={() => setTheme("dark")}
          width={32}
          height={32}
          className={"rounded-full p-2 border border-ring hover:cursor-pointer"}
        />

        <SunIcon
          onClick={() => setTheme("light")}
          width={32}
          height={32}
          className={"rounded-full p-2 border border-ring hover:cursor-pointer"}
        />
      </div>
      <Label
        className={"text-base tracking-widest text-black dark:text-zinc-300"}
      >
        VGSEVEN &copy; {new Date().getFullYear()}
      </Label>
    </footer>
  );
}
