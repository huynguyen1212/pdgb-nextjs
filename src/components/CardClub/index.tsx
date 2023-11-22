import React from "react";
import { StylesCard } from "./style";

interface Props {
  avatar: string;
  name: string;
  status: string;
  member: number;
}

const CardClub = ({ avatar, name, member, status }: Props) => (
  <StylesCard>
    <div className="card">
      <div className="card-content">
        <div className="card-heading">
          <button className="card-button">Join</button>
        </div>
        <h3 className="card-name">{name}</h3>
        <p className="card-member">Member: {member}</p>
        <p className="card-status">
          Status:{" "}
          <span className={`status ${status === "Active" ? "active" : "off"}`}>
            {status}
          </span>
        </p>
      </div>
    </div>
  </StylesCard>
);

export default CardClub;
