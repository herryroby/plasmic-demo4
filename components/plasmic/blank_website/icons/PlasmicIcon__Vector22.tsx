/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 254 91"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "m248.559 39.61-80.691 46.634c-6.484 3.748-16.289 4.153-21.906.911L3.786 4.981C1.458 3.633.234 1.868.041 0c-.288 2.298.936 4.532 3.745 6.156l142.176 82.167c5.617 3.242 15.422 2.838 21.906-.911l80.691-46.633c3.796-2.195 5.591-5.039 5.322-7.677-.289 2.292-2.084 4.635-5.322 6.509z"
        }
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
