import { Skeleton } from "@/ui/primitives/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";

export default function SkeletonCard({ title }: { title: string }) {
  return (
    <Card className={"my-4 p-2"}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <Skeleton className="h-3 w-[350px] max-[470px]:w-auto" />
          <Skeleton className="h-3 w-[350px] max-[470px]:w-auto" />
        </CardDescription>
        <CardDescription className="flex flex-row gap-2 mt-3">
          <Skeleton className="h-3 w-[50px]" />
          <Skeleton className="h-3 w-[50px]" />
          <Skeleton className="h-3 w-[50px]" />
        </CardDescription>
      </CardHeader>
      <CardContent className={"flex flex-col gap-3"}>
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
        <Skeleton className="h-4 w-auto" />
      </CardContent>
      <CardFooter className={"flex flex-row gap-2"}>
        <Skeleton className="h-8 w-[70px]" />
        <Skeleton className="h-8 w-[70px]" />
        <Skeleton className="h-8 w-[70px]" />
      </CardFooter>
    </Card>
  );
}
