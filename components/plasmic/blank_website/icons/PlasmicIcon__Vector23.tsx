/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 210"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M145.699 208.173 5.857 127.36a11.72 11.72 0 0 1-5.4-13.39L30.919 8.482C33.022 1.165 41.435-2.23 48.021 1.576l139.841 80.813a11.72 11.72 0 0 1 5.4 13.39l-30.46 105.487c-2.104 7.324-10.517 10.72-17.103 6.907"
        }
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
