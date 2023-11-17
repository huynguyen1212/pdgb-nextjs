import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  size?: number;
  color?: string;
}

export default function MenuIcon({
  size = 16,
  color = "white",
  ...rest
}: Props) {
  return (
    <SMenuIcon style={{ width: size, height: size }}>
      <input type="checkbox" {...rest} />
      <svg viewBox="0 0 32 32" width={size} height={size}>
        <path
          stroke={color}
          className="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className="line" d="M7 16 27 16" stroke={color}></path>
      </svg>
    </SMenuIcon>
  );
}

const SMenuIcon = styled.label`
  pointer-events: none;
  svg {
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input {
    display: none;
    &:checked {
      & + svg {
        transform: rotate(-45deg);
        .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      }
    }
  }

  .line {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke 0.2s ease-in-out;
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }
`;
