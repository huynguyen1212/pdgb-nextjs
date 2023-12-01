import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const IconAvatar: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={40} height={40} rx={20} fill="#D1DEFD" />
    <path
      d="M26.1399 29.62C25.2599 29.88 24.2199 30 22.9999 30H16.9999C15.7799 30 14.7399 29.88 13.8599 29.62C14.0799 27.02 16.7499 24.97 19.9999 24.97C23.2499 24.97 25.9199 27.02 26.1399 29.62Z"
      stroke="#1C48E7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 10H17C12 10 10 12 10 17V23C10 26.78 11.14 28.85 13.86 29.62C14.08 27.02 16.75 24.97 20 24.97C23.25 24.97 25.92 27.02 26.14 29.62C28.86 28.85 30 26.78 30 23V17C30 12 28 10 23 10ZM20 22.17C18.02 22.17 16.42 20.56 16.42 18.58C16.42 16.6 18.02 15 20 15C21.98 15 23.58 16.6 23.58 18.58C23.58 20.56 21.98 22.17 20 22.17Z"
      stroke="#1C48E7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.5799 18.58C23.5799 20.56 21.9799 22.17 19.9999 22.17C18.0199 22.17 16.4199 20.56 16.4199 18.58C16.4199 16.6 18.0199 15 19.9999 15C21.9799 15 23.5799 16.6 23.5799 18.58Z"
      stroke="#1C48E7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconAvatar;
