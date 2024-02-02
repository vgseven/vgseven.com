"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { Button } from "@/ui/primitives/button";
import vgseven from "../../public/favicon.png";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { BrandIconX } from "@/ui/icons/brand-icon-x";

export function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number = scrollY.getPrevious() as number;

    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowNav(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`z-50 fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-primary font-medium flex max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full h-14 p-5 overflow-hidden text-black`}
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,

          alignItems: "center",
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 280,
          borderRadius: 22,
          alignItems: "start",
          transition: { delay: 0 },
        },
      }}
      initial={"short"}
      animate={[hidden ? "short" : "long", showNav ? "showNav" : "hideNav"]}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 14,
      }}
    >
      <Link href="/">
        <Image
          src={vgseven}
          alt="logo"
          width={44}
          height={44}
          className={"rounded-full"}
        />
      </Link>

      <motion.ul
        className={`w-full dark:text-black text-white ${
          showNav
            ? "[--display-from:none] [--display-to:flex]"
            : "max-sm:[--display-from:none] sm:[--display-to:flex]"
        }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-5 max-sm:gap-5 max-sm:pt-10`}
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            opacity: "var(--opacity-from, 1)",
            transition: { duration: 0.1, delay: 0 },
          },
          visible: {
            display: "var(--display-to, none)",
            opacity: "var(--opacity-to, 1)",
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        initial={"hidden"}
        animate={[
          hidden && !showNav ? "hidden" : "visible",
          showNav ? "visible" : "",
        ]}
      >
        <li
          className={
            "rounded-2xl text-base font-medium hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white text-white dark:text-black px-4 py-[0.35rem]"
          }
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={
            "rounded-2xl text-base font-medium hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white text-white dark:text-black px-4 py-[0.35rem]"
          }
        >
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li
          className={
            "rounded-2xl text-base font-medium hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white text-white dark:text-black px-4 py-[0.35rem]"
          }
        >
          <Link href={"/subscribe"}>Subscribe</Link>
        </li>
        <li>
          <a href={"https://x.com/vgsevenn/"} target={"_blank"}>
            <Button variant={"secondary"} className={"rounded-2xl"}>
              Find More Updates
              <BrandIconX height={16} width={16} className={"ml-2 mt-0"} />
            </Button>
          </a>
        </li>
      </motion.ul>

      <motion.div
        className="w-full [--display-from:none][--display-to:inline-block] "
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            transition: { delay: 0, duration: 0.3 },
          },
          visible: {
            display: "var(--display-to)",
            transition: { delay: 0.2, duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={hidden ? "visible" : "hidden"}
      >
        <Link href={"/"}>
          <Button variant={"secondary"} className="w-full rounded-2xl">
            VGSEVEN
          </Button>
        </Link>
      </motion.div>

      <Button
        size={"icon"}
        variant={"secondary"}
        className="rounded-full min-w-[40px] sm:hidden"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
      >
        {showNav ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
    </motion.nav>
  );
}
