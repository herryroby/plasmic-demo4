/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 147"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M145.972 144.559 3.79 62.391C1.289 60.947.038 59.021 0 56.993v-7.048c.045-2.458 1.86 1.81 5.361-.212L86.051 3.1c6.484-3.748 16.289-4.153 21.907-.911l142.175 82.168c1.873 1.084 3.232-3.511 3.72-2.054.16.487.057 6.938.07 7.439.052 2.523-1.763 5.193-5.361 7.273l-80.691 46.633c-6.476 3.748-16.288 4.153-21.899.911"
        }
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
