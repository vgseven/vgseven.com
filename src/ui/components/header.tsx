import { Label } from "@/ui/primitives/label";
import { RocketIcon } from "@radix-ui/react-icons";

export function Header() {
  return (
    <header className="mt-12 flex items-center justify-center">
      <div className="fixed flex gap-4 rounded-full bg-zinc-800 px-6 py-2 text-white dark:bg-zinc-50 dark:text-black max-sm:max-w-[22rem]">
        <Label className="flex items-center justify-center gap-4 font-bold tracking-widest">
          VGSEVEN <RocketIcon />
        </Label>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-2 max-sm:text-sm">
            Working on Personal Assistant, Say Silvi..
          </div>
        </div>
      </div>
    </header>
  );
}
