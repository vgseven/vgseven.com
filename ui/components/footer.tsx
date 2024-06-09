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
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const { setTheme } = useTheme();
  return (
    <footer className={"my-6 flex flex-col items-center justify-center pt-6"}>
      <Label
        className={
          "bg-gradient-to-tl from-black via-zinc-500 to-zinc-200 bg-clip-text text-[14rem] tracking-tighter text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-700 max-lg:text-[12rem] max-md:text-[10rem] max-sm:text-[5rem]"
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
            height={28}
            width={28}
            src={
              "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-favicon-4zdpqmlPhdE6ctpA3GP1DopxLzVOI6.png"
            }
            alt={"silver-company"}
          />
        </Link>
        <Link href={"https://x.com/vgsevenn/"} target="_blank">
          <BrandIconX
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
        <Link href={"https://github.com/vgseven"} target="_blank">
          <GitHubLogoIcon
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
        <Link href={"https://linkedin.com/in/vgseven"} target="_blank">
          <LinkedInLogoIcon
            width={25}
            height={25}
            className={
              "rounded-full bg-white p-1 text-black hover:bg-black hover:text-white"
            }
          />
        </Link>
        <MoonIcon
          onClick={() => setTheme("dark")}
          width={30}
          height={30}
          className={
            "rounded-full bg-white p-2 text-black hover:cursor-pointer hover:bg-black hover:text-white"
          }
        />

        <SunIcon
          onClick={() => setTheme("light")}
          width={30}
          height={30}
          className={
            "rounded-full bg-white p-2 text-black hover:cursor-pointer hover:bg-black hover:text-white"
          }
        />
      </div>
      <Label
        className={
          "font-mono text-base tracking-tighter text-black dark:text-zinc-400"
        }
      >
        VGSEVEN &copy; {new Date().getFullYear()}
      </Label>
    </footer>
  );
}
