import React from "react";
import { StylesCard } from "./style";
import IconFirstMember from "../Icons/IconFirstMember";
import IconSecondMember from "../Icons/IconSecondMember";
import { SPORT_TYPE } from "src/constants/sport";

export interface Props {
  avatar?: string;
  name: string;
  id: number;
  members: number;
  description?: string;
  type?: number;
  number_of_members?: number;
}

export default function CardTeam({
  avatar,
  name,
  id,
  members,
  description = "",
  type = 0,
  number_of_members = 0,
}: Props) {
  return (
    <StylesCard>
      <div className={`card ${type ? `card__${SPORT_TYPE[type]}` : ""}`}>
        <div className="card__inner">
          <div className="card__wrapper">
            <div className="card___wrapper-acounts">
              {members < 3 ? (
                <>
                  {members === 1 ? (
                    <div className="card__acounts">
                      <IconFirstMember />
                    </div>
                  ) : (
                    <>
                      <div className="card__acounts">
                        <IconFirstMember />
                      </div>

                      <div className="card__acounts">
                        <IconSecondMember />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="card__score">+{Number(members - 2)}</div>
                  <div className="card__acounts">
                    <IconFirstMember />
                  </div>

                  <div className="card__acounts">
                    <IconSecondMember />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="card__title">{name}</div>

          {description && (
            <div className="card__subtitle">Description: {description}</div>
          )}

          <div className="card__indicator">
            <span className="card__indicator-amount">{members}</span>/
            {number_of_members} Members
          </div>

          <div className="card__progress">
            <progress
              max={100}
              value={Math.round(Number((members / number_of_members) * 100))}
            />
          </div>
        </div>
      </div>
    </StylesCard>
  );
}
