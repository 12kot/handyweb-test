import React from "react";

interface Props {
  isYellow: boolean;
}

export const SVGStar = ({ isYellow }: Props) => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.48184 0L5.48807 3.45157H8.74432L6.10996 5.58475L7.1162 9.03632L4.48184 6.90313L1.84748 9.03632L2.85371 5.58475L0.219357 3.45157H3.4756L4.48184 0Z"
        fill={isYellow ? "#FFC700" : "#E6E6E6"}
      />
    </svg>
  );
};
