import { BackgroundGrid } from "@/ui/components/bg-grids";
import { BrandIconX } from "@/ui/icons/brand-icon-x";
import { Button } from "@/ui/primitives/button";
import { GradientText } from "@/ui/primitives/gradient-text";
import { Highlight } from "@/ui/primitives/highlight";
import { Label } from "@/ui/primitives/label";
import { Paragraph } from "@/ui/primitives/paragraph";
import {
  ArrowTopRightIcon,
  BookmarkFilledIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  HeartFilledIcon,
  LinkedInLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={
        "relative flex h-screen flex-col items-center justify-center max-lg:mx-4"
      }
    >
      <BackgroundGrid className={"z-0"} />
      <div
        className={
          "flex flex-row items-center justify-center gap-6 max-sm:flex-col max-sm:gap-0"
        }
      >
        <GradientText
          className={
            "text-[6rem] max-sm:text-[3rem] max-md:text-[4rem] max-lg:text-[5rem]"
          }
        >
          VAIBHAV
        </GradientText>
        <GradientText
          className={
            "text-[6rem] max-sm:text-[3rem] max-md:text-[4rem] max-lg:text-[5rem]"
          }
        >
          GOSAVI
        </GradientText>
      </div>
      <div className={"z-10 my-4 max-w-[42rem] text-center font-medium"}>
        <Paragraph className={"font-bold text-[14px] max-md:text-[11px]"}>
          Hello World, I'm Vaibhav Gosavi (@vgseven), Creator of{" "}
          <Highlight>Radium</Highlight>, <Highlight>Elementary</Highlight>, and
          Upcoming project Personal Assistant <Highlight>Silvi</Highlight>.
        </Paragraph>
        <div
          className={"mt-10 flex flex-wrap items-center justify-center gap-2"}
        >
          <Link href={"https://radium.vgseven.com"} target="_blank">
            <Button
              className={"flex flex-row items-center gap-2"}
              variant={"secondary"}
            >
              <RocketIcon /> Use Radium
              <ArrowTopRightIcon />
            </Button>
          </Link>
          <Link href={"https://elementary.vgseven.com"} target="_blank">
            <Button
              className={"flex flex-row items-center gap-2"}
              variant={"secondary"}
            >
              <BookmarkFilledIcon /> Ship with Elementary
              <ArrowTopRightIcon />
            </Button>
          </Link>
          <Link href={"https://silvi.vgseven.com/waitlist"} target="_blank">
            <Button className={"flex flex-row items-center gap-2"}>
              <HeartFilledIcon /> Join Waitlist for Silvi
              <ArrowTopRightIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"my-4 flex flex-col items-center justify-center"}>
        <div className={"flex flex-row items-center justify-center gap-6"}>
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
        <Label className={"my-2 text-center text-[12px] tracking-widest"}>
          ALL RIGHTS RESERVED. VGSEVEN &copy; {new Date().getFullYear()}
        </Label>
      </div>
    </main>
  );
}
