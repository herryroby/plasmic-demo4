/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 37"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M36.441 36.092.947 15.577c-1.404-.809-1.225-2.227.391-3.158L21.481.775c1.616-.937 4.065-1.04 5.47-.224l35.494 20.514c1.404.809 1.225 2.227-.391 3.158L41.91 35.867c-1.616.93-4.065 1.034-5.47.225z"
        }
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
