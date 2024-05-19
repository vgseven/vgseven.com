import { BackgroundGradientAnimation } from "@/ui/components/bg-gradient";
import { Button } from "@/ui/primitives/button";
import { Label } from "@/ui/primitives/label";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <BackgroundGradientAnimation>
        <div
          className={
            "absolute left-1/2 top-2/4 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center"
          }
        >
          <Label
            className={
              "text-center font-geistSans text-9xl font-bold max-sm:text-7xl"
            }
          >
            VGSEVEN
          </Label>
          <Label
            className={
              "mt-4 text-center font-geistMono text-2xl tracking-tighter max-sm:text-xl"
            }
          >
            Cheif Meme Officer of Silvi.
          </Label>
        </div>
      </BackgroundGradientAnimation>
      <Link href={"/projects"}>
        <Button
          className={
            "fixed left-1/2 top-3/4 mt-16 -translate-x-1/2 -translate-y-1/2 rounded-full px-8 py-6 text-base"
          }
        >
          Explore Projects
          <ArrowRightIcon
            height={30}
            width={30}
            className={
              "ml-4 rounded-full bg-white p-2 text-black dark:bg-black dark:text-white"
            }
          />
        </Button>
      </Link>
    </main>
  );
}
