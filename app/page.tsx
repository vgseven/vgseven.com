import { Button } from "@/ui/primitives/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BackgroundGradientAnimation } from "@/ui/components/bg-gradient";
import { Label } from "@/ui/primitives/label";

export default function Home() {
  return (
    <main>
      <BackgroundGradientAnimation>
        <div
          className={
            "flex flex-col justify-center items-center top-2/4 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        >
          <Label
            className={
              "text-9xl max-sm:text-7xl font-bold font-geistSans text-center"
            }
          >
            VGSEVEN
          </Label>
          <Label
            className={
              "text-2xl tracking-tighter mt-4 max-sm:text-xl font-geistMono text-center"
            }
          >
            Cheif Meme Officer of Silvi.
          </Label>
        </div>
      </BackgroundGradientAnimation>
      <Link href={"/projects"}>
        <Button
          className={
            "fixed mt-16 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base rounded-full py-6 px-8"
          }
        >
          Explore Projects
          <ArrowRightIcon
            height={30}
            width={30}
            className={
              "rounded-full ml-4 dark:bg-black bg-white dark:text-white text-black p-2"
            }
          />
        </Button>
      </Link>
    </main>
  );
}
