/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 108"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillOpacity={".4"}
        d={
          "m37.517 28.711 3.188 10.864h-8.127c-6.052 0-7.647 2.974-7.647 15.003 0 12.16 1.592 15.004 7.647 15.004h8.127L37.517 80.45c-1.751.648-3.982 1.036-5.577 1.036-12.028 0-14.976-5.305-14.976-26.903 0-21.469 2.948-26.903 14.976-26.903 1.595-.005 3.826.384 5.577 1.031"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillOpacity={".4"}
        d={
          "M0 53.547C0 13.32 8.365 0 33.376 0s33.376 13.324 33.376 53.547c0 21.469-2.39 35.311-8.442 43.46l-4.78-9.055c4.381-6.725 6.212-17.718 6.212-34.405 0-32.337-6.77-43.072-26.366-43.072S7.01 21.21 7.01 53.547c0 30.525 6.53 43.201 22.384 43.201 8.841 0 11.31-3.103 11.31-16.557v-51.48h7.967v51.48c0 20.956-3.586 27.033-20.074 27.033C8.602 107.224 0 91.184 0 53.547"
        }
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
