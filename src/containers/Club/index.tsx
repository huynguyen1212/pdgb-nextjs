import { Col, Container, Row } from "styled-bootstrap-grid";
import banner from "src/assets/image/logo_banner/bg-club.png";
import SClub from "./style";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { Tabs, TabsProps } from "antd";
import Member from "./Member";
import Sport from "./Sport";

export default function Club() {
  const [infoClub, setInfoClub] = useState<any>({});
  const [listMembers, setListMember] = useState<any>([]);
  const [listTeams, setListTeam] = useState<any>([]);
  const [listSports, setListSport] = useState<any>([]);
  const [listRequests, setListRequests] = useState<any>([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Danh sách thành viên",
      children: <Member data={listMembers} />,
    },
    {
      key: "2",
      label: "Danh sách bộ môn",
      children: (
        <Sport
          number_of_members={infoClub?.number_of_members}
          data={listSports}
        />
      ),
    },
    {
      key: "3",
      label: "Danh sách request",
      children: <Member data={listRequests} />,
    },
  ];

  useQuery({
    queryKey: ["getListClubs"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.CLUBS.DETAIL,
      }),
    onSuccess(data) {
      setInfoClub(data.data.data[0]);
    },
  });

  useQuery({
    queryKey: ["getListRequests"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.CLUBS.LIST_REQUESTS,
      }),
    onSuccess(data) {
      setListRequests(data.data.data);
    },
  });

  useEffect(() => {
    if (!infoClub) return;
    setListMember(infoClub.members);
    setListTeam(infoClub.teams);
    setListSport(infoClub.sports_disciplines);
  }, [infoClub]);

  return (
    <SClub>
      <div className="club-banner">
        <Image src={banner} fill alt="banner" />
      </div>
      <Container>
        <div className="club-info">
          <div className="item-info">
            <div className="heading">Club name:</div>
            <div className="info">{infoClub?.name}</div>
          </div>
          <div className="item-info">
            <div className="heading">Admin:</div>
            <div className="info">{infoClub?.manager_id}</div>
          </div>
          <div className="item-info">
            <div className="heading">Members:</div>
            <div className="info">{infoClub?.members?.length}</div>
          </div>
          <div className="item-info">
            <div className="heading">Sports:</div>
            <div className="info">
              {infoClub?.sports_disciplines &&
                infoClub.sports_disciplines
                  .map((sport: any) => sport.name)
                  .join(", ")}
            </div>
          </div>
        </div>
        <Tabs
          defaultActiveKey="1"
          items={items}
          indicatorSize={(origin) => origin - 16}
          className="club-tab"
        />
      </Container>
    </SClub>
  );
}
