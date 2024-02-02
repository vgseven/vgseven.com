import { Skeleton } from "@/ui/primitives/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { ProjectCardProps } from "@/lib/schemas/project-card-props";
import { Badge } from "@/ui/primitives/badge";

export default function SkeletonCard(props: ProjectCardProps) {
  return (
    <Card className={"my-4 p-2 rounded-3xl"}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription className="flex flex-col gap-2">
          {props.description}
        </CardDescription>
        <CardDescription className="flex flex-row gap-2 mt-3">
          <Badge className={"rounded-3xl"}>{props.stage}</Badge>
          <Badge className={"rounded-3xl"} variant={"secondary"}>
            {props.date}
          </Badge>
          <Badge className={"rounded-3xl"} variant={"outline"}>
            {props.timeline}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className={"flex flex-col gap-3"}>
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
      </CardContent>
      <CardFooter className={"flex flex-row gap-2"}>
        <Skeleton className="h-8 w-[70px] rounded-2xl" />
        <Skeleton className="h-8 w-[70px] rounded-2xl" />
        <Skeleton className="h-8 w-[70px] rounded-2xl" />
      </CardFooter>
    </Card>
  );
}
