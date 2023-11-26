import React from "react";
import { StylesCard } from "./style";
import Avatar from "../Icons/Avatar";
import Image from "next/image";
import IconSad from "../Icons/IconSad";
import IconSmile from "../Icons/IconSmile";

export interface Props {
  avatar: string;
  name: string;
  id: number;
  email: string;
}

export default function CardMember({ avatar, name, id, email }: Props) {
  return (
    <StylesCard>
      <div className="card">
        <div className="card-border-top"></div>
        <div className="img">
          {avatar ? <Image src={avatar} fill alt="avatar" /> : <Avatar />}
        </div>
        <span> {name}</span>
        <p className="email">{email}</p>
        <div className="button">
          <button className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
            <IconSmile />
          </button>
          <button className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
            <IconSad />
          </button>
        </div>
      </div>
    </StylesCard>
  );
}
