import { twMerge } from "tailwind-merge";

interface BrandXIconProps {
  className?: string;
  width: number;
  height: number;
}

export function BrandXIcon({
  className,
  width,
  height,
}: BrandXIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("icon icon-tabler icon-tabler-brand-x", className)}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
    </svg>
  );
}
