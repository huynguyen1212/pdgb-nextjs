import React from "react";
import { StylesCard } from "./style";
import Avatar from "../Icons/Avatar";
import Image from "next/image";
import IconFirstMember from "../Icons/IconFirstMember";
import IconSecondMember from "../Icons/IconSecondMember";
import { SPORT_TYPE } from "src/constants/sport";

export interface Props {
  avatar?: string;
  name: string;
  id: number;
  member: number;
  description?: string;
  type?: number;
}

export default function CardTeam({
  avatar,
  name,
  id,
  member,
  description = "",
  type = 0,
}: Props) {
  return (
    <StylesCard>
      <div className={`card ${type ? `card__${SPORT_TYPE[type]}` : ""}`}>
        <div className="card__inner">
          <div className="card__wrapper">
            <div className="card___wrapper-acounts">
              <div className="card__score">+{member}</div>
              <div className="card__acounts">
                <IconFirstMember />
              </div>
              <div className="card__acounts">
                <IconSecondMember />
              </div>
            </div>
            <div className="card__menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={4}
                viewBox="0 0 4 20"
                height={20}
                fill="none"
              >
                <g fill="#000">
                  <path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z" />
                  <path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z" />
                  <path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{description}</div>
          <div className="card__indicator">
            <span className="card__indicator-amount">135</span> Works /{" "}
            <span className="card__indicator-percentage">45%</span>
          </div>
          <div className="card__progress">
            <progress max={100} value={40} />
          </div>
        </div>
      </div>
    </StylesCard>
  );
}
