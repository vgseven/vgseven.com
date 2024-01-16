import { Footer } from "@/ui/components/footer";
import SubscribeUpdatesForm from "@/ui/components/subscribe-updates-form";
import { Label } from "@/ui/primitives/label";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to VGSEVEN Updates",
};

export default function SubscribePage() {
  return (
    <>
      <div className={"mt-28 mx-auto max-w-5xl max-[1100px]:mx-8"}>
        <div className={"my-2 flex flex-col justify-start items-center"}>
          <Label
            className={
              "text-3xl font-bold tracking-tighter sm:text-3xl xl:text-4xl bg-clip-text text-transparent my-4 bg-gradient-to-tl from-zinc-900 dark:via-gray-100 via-zinc-400 to-zinc-900"
            }
          >
            SUBSCRIBE VGSEVEN UPDATES
          </Label>
          <Label className={"dark:text-zinc-400 text-zinc-800 mb-2 leading-5"}>
            Subscibe to VGSEVEN Updates to recieve every new updates directly in
            your mailbox.
          </Label>
          <SubscribeUpdatesForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
