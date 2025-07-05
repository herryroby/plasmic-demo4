/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcnArrowRightIcnXsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcnArrowRightIcnXsIcon(props: IcnArrowRightIcnXsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 12 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M0 5c0-.19.079-.371.22-.505a.77.77 0 0 1 .53-.21h8.688l-3.22-3.064a.7.7 0 0 1-.22-.506c0-.19.08-.371.22-.506A.77.77 0 0 1 6.75 0c.2 0 .39.075.531.21l4.5 4.284A.7.7 0 0 1 12 5a.7.7 0 0 1-.22.506L7.28 9.79a.77.77 0 0 1-.53.209.77.77 0 0 1-.532-.21.7.7 0 0 1-.22-.505c0-.19.08-.372.22-.506l3.22-3.065H.75a.77.77 0 0 1-.53-.209A.7.7 0 0 1 0 5"
          }
          clipRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"currentColor"} d={"M0 0h12v10H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IcnArrowRightIcnXsIcon;
/* prettier-ignore-end */
