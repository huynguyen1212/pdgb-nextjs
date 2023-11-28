import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const IconTick: React.FC<IconType> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#2E2E2E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconTick;
