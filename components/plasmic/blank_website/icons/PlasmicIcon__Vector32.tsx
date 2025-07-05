/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M1.336 13.736 21.48 2.093c1.616-.937 4.065-1.04 5.47-.225l35.494 20.515c.359.205.609.45.763.719.378-.739.147-1.515-.763-2.041L26.949.546C25.544-.263 23.1-.16 21.479.77L1.336 12.414c-1.205.7-1.61 1.663-1.154 2.446.205-.411.584-.796 1.154-1.123z"
        }
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
