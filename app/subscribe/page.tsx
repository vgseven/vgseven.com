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
              "text-5xl max-md:text-4xl max-sm:text-3xl font-semibold tracking-tighter"
            }
          >
            SUBSCRIBE VGSEVEN UPDATES
          </Label>
          <Label
            className={
              "dark:text-zinc-400 text-zinc-800 my-4 leading-5 text-sm text-center"
            }
          >
            Subscibe to <b>VGSEVEN UPDATES</b> to recieve every new updates
            directly in your mailbox.
          </Label>
          <SubscribeUpdatesForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
