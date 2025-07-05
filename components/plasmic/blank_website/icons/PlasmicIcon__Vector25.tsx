/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 182 198"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M145.181 197.033c-.93 0-1.827-.244-2.661-.725L2.678 115.495a5.356 5.356 0 0 1-2.468-6.124L30.67 3.89C31.446 1.2 33.818 0 35.832 0c.936 0 1.828.244 2.661.725L178.335 81.54a5.36 5.36 0 0 1 2.469 6.123l-30.461 105.481c-.769 2.69-3.148 3.89-5.162 3.89z"
        }
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
