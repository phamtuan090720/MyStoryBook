import React from "react";
import { SVGProps } from "react";

export const XCircleSmall = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6l-4 4m0-4l4 4m4.666-2A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.333 0z"
        stroke={props.color ? props.color : "#1A1A1A"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default XCircleSmall;
