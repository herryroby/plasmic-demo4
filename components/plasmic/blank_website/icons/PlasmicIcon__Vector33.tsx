/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector33Icon(props: Vector33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 49"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M22.627.45c-.886-.19-1.793-.3-2.69-.45h-3.066c-.122.03-.233.08-.355.09-4.948.5-9.077 2.46-12.243 5.92C.797 9.81-.642 14.19.266 19.1c.608 3.27 2.048 6.3 3.63 9.27 3.532 6.6 7.916 12.74 12.642 18.69 1.085 1.37 2.613 1.36 3.709 0 3.022-3.76 5.845-7.63 8.446-11.62 2.502-3.85 4.827-7.78 6.51-12 .83-2.09 1.538-4.21 1.594-6.45.199-7.86-5.712-14.73-14.17-16.54m-4.25 22.21c-3.665 0-6.654-2.72-6.654-6.04s3-6.02 6.675-6.02c3.665 0 6.675 2.71 6.675 6.01 0 3.35-3 6.06-6.697 6.05z"
        }
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
