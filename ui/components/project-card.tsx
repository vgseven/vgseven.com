import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { Button } from "@/ui/primitives/button";
import { BrandIconX } from "@/ui/icons/brand-icon-x";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/ui/primitives/badge";
import { ProjectCardProps } from "@/lib/schemas/project-card-props";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className={"my-4 p-2 rounded-3xl"}>
      <CardHeader>
        <div className={"flex flex-row gap-2"}>
          <Image
            className={"mb-1 rounded-full"}
            src={props.profile as StaticImport}
            width={42}
            height={42}
            alt={"Profile"}
          />
          <CardTitle>{props.title}</CardTitle>
        </div>
        <CardDescription className={"mt-4"}>
          {props.description}
        </CardDescription>
        <CardDescription className={"flex flex-row gap-2 mt-3"}>
          <Badge className={"rounded-2xl max-sm:text-[12px]"}>
            {props.stage}
          </Badge>
          <Badge className={"rounded-3xl"} variant={"secondary"}>
            {props.date}
          </Badge>
          <Badge className={"rounded-3xl"} variant={"outline"}>
            {props.timeline}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className={"max-sm:text-[12px]"}>
        {props.summary}
      </CardContent>
      <CardFooter className={"flex flex-row gap-2 max-[510px]:flex-wrap"}>
        <a href={props.official} target={"_blank"}>
          <Button className={"rounded-3xl max-sm:text-[12px]"}>
            Official <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </a>
        <a href={props.knowMore} target={"_blank"}>
          <Button
            className={"rounded-3xl max-sm:text-[12px]"}
            variant={"secondary"}
          >
            Know More <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </a>
        <a href={props.findUpdates} target={"_blank"}>
          <Button
            className={"rounded-3xl max-sm:text-[12px]"}
            variant={"outline"}
          >
            Find Updates
            <BrandIconX height={15} width={15} className={"ml-2"} />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
