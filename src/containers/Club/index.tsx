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
import Team from "./Team";

export default function Club() {
  const [infoClub, setInfoClub] = useState<any>({});
  const [listMembers, setListMember] = useState<any>([]);
  const [listTeams, setListTeam] = useState<any>([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Danh sách thành viên",
      children: <Member data={listMembers} />,
    },
    {
      key: "2",
      label: "Danh sách team",
      children: <Team data={listTeams} />,
    },
  ];

  useQuery({
    queryKey: ["getListClubs"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.CLUB_DETAIL,
      }),
    onSuccess(data) {
      setInfoClub(data.data.data[0]);
    },
  });

  useEffect(() => {
    if (!infoClub) return;
    setListMember(infoClub.members);
    setListTeam(infoClub.teams)
  }, [infoClub]);

  console.log("detail ", infoClub);
  console.log("listTeams: ", listTeams)

  return (
    <SClub>
      <div className="club-banner">
        <Image src={banner} fill alt="banner" />
      </div>
      <Container>
        <Tabs
          defaultActiveKey="1"
          items={items}
          indicatorSize={(origin) => origin - 16}
        />
      </Container>
    </SClub>
  );
}
