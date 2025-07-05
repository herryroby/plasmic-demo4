/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 103 231"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M51.243 230.42c28.301 0 51.244-51.581 51.244-115.21S79.544 0 51.243 0 0 51.581 0 115.21s22.942 115.21 51.243 115.21"
        }
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
