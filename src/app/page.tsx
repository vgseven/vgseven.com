import { BackgroundGrid } from "@/ui/components/bg-square";
import { BrandIconX } from "@/ui/icons/brand-icon-x";
import { Button } from "@/ui/primitives/button";
import { GradientText } from "@/ui/primitives/gradient-text";
import { Highlight } from "@/ui/primitives/highlight";
import { Label } from "@/ui/primitives/label";
import {
  ArrowTopRightIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={
        "h-screen relative flex flex-col items-center justify-center max-lg:mx-4"
      }
    >
      <BackgroundGrid className={"z-0"} />
      <div className={"text-center"}>
        <GradientText
          className={
            "text-[6rem] max-lg:text-[5rem] max-md:text-[4rem] max-sm:text-[3rem]"
          }
        >
          VAIBHAV GOSAVI
        </GradientText>
      </div>
      <div className={"z-10 text-center max-w-[56rem] my-4 font-medium"}>
        <div className={"text-[14px] max-md:text-[13px] font-bold"}>
          Hello World, I'm Vaibhav Gosavi (@vgseven) - Creator of{" "}
          <Highlight>Radium</Highlight> - Make Ship Happen,{" "}
          <Highlight>Substance</Highlight> - Make Development Happen and
          Upcoming Personal Assistant - Say <Highlight>Silvi</Highlight> - Make
          Jarvis Happen.
        </div>
        <div
          className={
            "flex flex-row items-center justify-center gap-6 my-4 max-md:flex-col max-md:gap-2"
          }
        >
          <Link href={"https://silver.vgseven.com/radium"} target="_blank">
            <Button variant={"secondary"}>
              <Image
                src={
                  "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/radium-favicon.png"
                }
                alt="radium"
                width={20}
                height={20}
                className={"mr-2"}
              />{" "}
              Know More About Radium
              <ArrowTopRightIcon className={"ml-2"} />
            </Button>
          </Link>
          <Link href={"https://silver.vgseven.com/substance"} target="_blank">
            <Button variant={"secondary"}>
              <Image
                src={
                  "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/substance-favicon.png"
                }
                alt="substance"
                width={20}
                height={20}
                className={"mr-2"}
              />{" "}
              Know More About Substance
              <ArrowTopRightIcon className={"ml-2"} />
            </Button>
          </Link>
          <Link href={"https://silver.vgseven.com/silvi"} target="_blank">
            <Button>
              <Image
                src={
                  "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-fill-favicon.png"
                }
                alt="silver"
                width={20}
                height={20}
                className={"mr-2"}
              />{" "}
              Know More About Silvi
              <ArrowTopRightIcon className={"ml-2"} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"flex flex-col items-center justify-center my-4"}>
        <div className={"flex flex-row items-center justify-center gap-6"}>
          <Link href={"https://silver.vgseven.com"} target="_blank">
            <Image
              width={28}
              height={28}
              className={"rounded-full mix-blend-multiply"}
              src={
                "https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/silver-white-fill-favicon.png"
              }
              alt={"silver-company"}
            />
          </Link>
          <Link href={"https://x.com/vgsevenn/"} target="_blank">
            <BrandIconX width={16} height={16} />
          </Link>
          <Link href={"https://github.com/vgseven"} target="_blank">
            <GitHubLogoIcon width={16} height={16} />
          </Link>
          <Link href={"https://linkedin.com/in/vgseven"} target="_blank">
            <LinkedInLogoIcon width={16} height={16} />
          </Link>
          <Link href={"mailto:ivaibhavgosavi@gmail.com"} target="_blank">
            <EnvelopeOpenIcon width={16} height={16} />
          </Link>
        </div>
        <Label className={"text-[12px] tracking-widest my-2 text-center"}>
          ALL RIGHTS RESERVED. VGSEVEN &copy; {new Date().getFullYear()}
        </Label>
      </div>
    </main>
  );
}
