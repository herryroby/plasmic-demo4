/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector47Icon(props: Vector47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 88 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M87.792 0H0v.982h87.792z"}
        opacity={".3"}
      ></path>
    </svg>
  );
}

export default Vector47Icon;
/* prettier-ignore-end */
