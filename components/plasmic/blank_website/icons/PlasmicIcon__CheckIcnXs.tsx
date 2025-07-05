/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckIcnXsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckIcnXsIcon(props: CheckIcnXsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 16 11"}
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
            "M16.296.204a.697.697 0 0 1 0 .985l-9.738 9.738a.694.694 0 0 1-.985 0L.704 6.058a.696.696 0 1 1 .985-.985l4.376 4.378L15.311.204a.697.697 0 0 1 .985 0"
          }
          clipRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"currentColor"} d={"M0 0h16v11H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckIcnXsIcon;
/* prettier-ignore-end */
