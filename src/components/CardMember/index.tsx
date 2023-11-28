import React from "react";
import { StylesCard } from "./style";
import Avatar from "../Icons/Avatar";
import Image from "next/image";
import IconView from "../Icons/IconView";
import IconDelete from "../Icons/IconDelete";
import { Tooltip, message } from "antd";
import IconTick from "../Icons/IconTick";
import { useMutation } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";

export interface Props {
  avatar: string;
  name: string;
  id: number;
  email: string;
  isAdmin: boolean;
  isRequest?: boolean;
}

export default function CardMember({
  avatar,
  name,
  id,
  email,
  isAdmin,
  isRequest = false,
}: Props) {
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) =>
      requestToken({
        method: "POST",
        url: API_URL.CLUBS.REVIEW_REQUEST,
        data: data,
      }),
    onError(error: any) {
      message.error(error?.response?.data?.message || "Thất bại");
    },
  });

  const handleAccept = (values: any) => {
    mutateAsync({ ...values, request_id: id, status: 1 });
  };

  const handleReject = (values: any) => {
    mutateAsync({ ...values, request_id: id, status: 2 });
  };

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
          <Tooltip placement="topLeft" title="View info">
            <button className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
              <IconView />
            </button>
          </Tooltip>

          {isAdmin && (
            <>
              {isRequest ? (
                <>
                  <Tooltip placement="topLeft" title="Accept member">
                    <button
                      onClick={handleAccept}
                      className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200"
                    >
                      <IconTick />
                    </button>
                  </Tooltip>
                  <Tooltip placement="topLeft" title="Reject member">
                    <button
                      onClick={handleReject}
                      className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200"
                    >
                      <IconDelete />
                    </button>
                  </Tooltip>
                </>
              ) : (
                <Tooltip placement="topLeft" title="Delete member">
                  <button className="fill-slate-600 col-span-1 flex flex-column justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                    <IconDelete />
                  </button>
                </Tooltip>
              )}
            </>
          )}
        </div>
      </div>
    </StylesCard>
  );
}
