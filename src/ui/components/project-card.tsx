import type { ProjectCardProps } from "@/lib/interfaces/project-card-props";
import { Badge } from "@/ui/primitives/badge";
import { Button } from "@/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className={"my-4 rounded-xl p-2"}>
      <CardHeader>
        <div className={"flex flex-row gap-2"}>
          <Image
            src={props.profile as StaticImport}
            width={42}
            height={42}
            alt={"Profile"}
          />
          <CardTitle className={"ml-2 mt-1"}>{props.title}</CardTitle>
        </div>
        <CardDescription className={"mt-4"}>
          {props.description}
        </CardDescription>
        <CardDescription className={"mt-3 flex flex-row gap-2"}>
          <Badge className={"rounded-md max-sm:text-[12px] pt-1"}>
            {props.stage}
          </Badge>
          <Badge className={"rounded-md pt-1"} variant={"secondary"}>
            {props.launchDate}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className={"text-[14px] max-sm:text-[12px]"}>
        {props.summary}
      </CardContent>
      <CardFooter className={"flex flex-row gap-2 max-[510px]:flex-wrap"}>
        <Link href={props.official} target={"_blank"}>
          <Button className={"rounded-lg max-sm:text-[12px]"}>
            Official <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </Link>
        <Link href={props.findUpdates} target={"_blank"}>
          <Button
            className={"rounded-lg max-sm:text-[12px]"}
            variant={"outline"}
          >
            Find Updates <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </Link>
      </CardFooter>
      <CardFooter>
        <Badge className={"px-4 py-2 rounded-lg"} variant={"secondary"}>
          Update: {props.newUpdate}
        </Badge>
      </CardFooter>
    </Card>
  );
}
