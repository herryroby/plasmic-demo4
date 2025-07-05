/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 49"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M20.44.45c-.8-.19-1.62-.3-2.43-.45h-2.77c-.11.03-.21.08-.32.09-4.47.5-8.2 2.46-11.06 5.92C.72 9.81-.58 14.19.24 19.1c.55 3.27 1.85 6.3 3.28 9.27 3.19 6.6 7.15 12.74 11.42 18.69.98 1.37 2.36 1.36 3.35 0 2.73-3.76 5.28-7.63 7.63-11.62 2.26-3.85 4.36-7.78 5.88-12 .75-2.09 1.39-4.21 1.44-6.45.18-7.86-5.16-14.73-12.8-16.54M16.6 22.66c-3.31 0-6.01-2.72-6.01-6.04s2.71-6.02 6.03-6.02c3.31 0 6.03 2.71 6.03 6.01 0 3.35-2.71 6.06-6.05 6.05"
        }
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
