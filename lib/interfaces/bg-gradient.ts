import React, { ReactNode } from "react";

export interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: "rgb(108, 0, 162)" | string;
  gradientBackgroundEnd?: "rgb(0, 17, 82)" | string;
  firstColor?: "18, 113, 255" | string;
  secondColor?: "221, 74, 255" | string;
  thirdColor?: "100, 220, 255" | string;
  fourthColor?: "200, 50, 50" | string;
  fifthColor?: "180, 180, 50" | string;
  pointerColor?: "140, 100, 255" | string;
  size?: "80%" | string;
  blendingValue?: "hard-light" | string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}
