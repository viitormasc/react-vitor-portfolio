import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LogoImgProps = {
  size?: number;
  height?: number;
  className?: string;
};
