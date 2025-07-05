/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AntDesignTwitterOutlinedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AntDesignTwitterOutlinedIcon(
  props: AntDesignTwitterOutlinedIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8.41 18.882c8.303 0 12.845-6.927 12.845-12.923 0-.194 0-.39-.009-.584A9.2 9.2 0 0 0 23.5 3.018a9.1 9.1 0 0 1-2.597.717 4.57 4.57 0 0 0 1.99-2.515c-.888.529-1.858.9-2.87 1.098a4.49 4.49 0 0 0-5.425-.897 4.54 4.54 0 0 0-1.985 2.133 4.58 4.58 0 0 0-.285 2.909c-1.795-.09-3.55-.56-5.153-1.378a12.8 12.8 0 0 1-4.151-3.37 4.58 4.58 0 0 0-.492 3.313 4.55 4.55 0 0 0 1.891 2.754 4.55 4.55 0 0 1-2.043-.564v.062a4.57 4.57 0 0 0 1.021 2.877A4.5 4.5 0 0 0 6 11.735a4.4 4.4 0 0 1-1.19.16q-.425 0-.844-.08c.289.903.85 1.693 1.607 2.258a4.5 4.5 0 0 0 2.61.895 9.02 9.02 0 0 1-5.61 1.948 9 9 0 0 1-1.072-.062 12.8 12.8 0 0 0 6.91 2.028z"
        }
      ></path>
    </svg>
  );
}

export default AntDesignTwitterOutlinedIcon;
/* prettier-ignore-end */
