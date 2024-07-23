import { cn } from "@/lib/utils";
interface IconProps {
  className?: string;
  width: number;
  height: number;
}

export function BrandIconX({ height, width, className }: IconProps) {
  return (
    <svg
      aria-label="Brand Icon X"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("icon icon-tabler icon-tabler-brand-x", className)}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
