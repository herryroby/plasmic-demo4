/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 154 210"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M147.851 82.382 8.016 1.57A11.6 11.6 0 0 0 0 .208a11.6 11.6 0 0 1 7.105 1.489L146.947 82.51a11.72 11.72 0 0 1 5.399 13.39l-30.46 105.488c-1.289 4.48-4.938 7.478-9.087 8.267 4.515-.494 8.619-3.594 9.998-8.396l30.46-105.487a11.73 11.73 0 0 0-5.406-13.39"
        }
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
