import { Container } from "styled-bootstrap-grid";
import SClub from "./style";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import { Tabs, TabsProps } from "antd";
import Member from "./Member";
import Sport from "./Sport";
import Request from "./Request";

export default function Club() {
  const [listMembers, setListMember] = useState<any>([]);
  const [listTeams, setListTeam] = useState<any>([]);
  const [listSports, setListSport] = useState<any>([]);
  const [listRequests, setListRequests] = useState<any>([]);
  const [infoUser, setInfoUser] = useState<any>({});
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [trigger, setTrigger] = useState(false);

  const { data: infoClub, refetch } = useQuery(["getListClubs"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.CLUBS.DETAIL,
    });
    return response?.data.data[0];
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const tabsMember: TabsProps["items"] = [
    {
      key: "1",
      label: "Danh sách thành viên",
      children: (
        <Member
          data={listMembers}
          isAdmin={isAdmin}
          manager_id={infoClub?.manager_id}
          setTrigger={setTrigger}
          trigger={trigger}
        />
      ),
    },
    {
      key: "2",
      label: "Danh sách bộ môn",
      children: (
        <Sport
          number_of_members={infoClub?.number_of_members}
          data={listSports}
          isAdmin={isAdmin}
        />
      ),
    },
  ];

  const tabsAdmin: TabsProps["items"] = [
    {
      key: "0",
      label: "Danh sách request",
      children: (
        <Request
          data={listRequests}
          setTrigger={setTrigger}
          trigger={trigger}
        />
      ),
    },
    ...tabsMember,
  ];

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

  useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.USER_INFO,
      }),
    onSuccess(data) {
      setInfoUser(data.data.data);
    },
  });

  useEffect(() => {
    if (!infoClub) return;
    setListMember(infoClub?.members);
    setListTeam(infoClub?.teams);
    setListSport(infoClub?.sports_disciplines);
  }, [infoClub]);

  useEffect(() => {
    if (infoUser.id === infoClub?.manager_id) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [infoUser, infoClub]);

  return (
    <SClub>
      <Container>
        <div className="club_banner">
          <div className="wrap_title">
            <p className="title_little" data-aos="fade-up">
              My Club
            </p>

            <p className="title" data-aos="fade-up">
              <span className="title_black">Quản lý Club</span>
              <br />
              <span className="title_other">
                Đội hình chuyên nghiệp, tinh anh hội tụ !!
              </span>
            </p>
          </div>
        </div>

        <div className="club-info">
          <div className="item-info">
            <p className="heading">
              Tên Club:
              <span className="info">{infoClub?.name}</span>
            </p>
          </div>

          <div className="item-info">
            <p className="heading">
              Admin:
              <span className="info">{infoClub?.manager?.name}</span>
            </p>
          </div>

          <div className="item-info">
            <p className="heading">
              Thành viên:
              <span className="info">
                {infoClub?.members && infoClub?.members.length
                  ? Number(infoClub?.members.length) + 1
                  : 1}
              </span>
            </p>
          </div>

          <div className="item-info">
            <p className="heading">
              Bộ môn:
              <span className="info">
                {infoClub?.sports_disciplines &&
                  infoClub?.sports_disciplines
                    .map((sport: any) => sport.name)
                    .join(", ")}
              </span>
            </p>
          </div>
        </div>

        <Tabs
          defaultActiveKey={isAdmin ? "0" : "1"}
          items={isAdmin ? tabsAdmin : tabsMember}
          indicatorSize={(origin) => origin - 16}
          className="club-tab"
        />
      </Container>
    </SClub>
  );
}
