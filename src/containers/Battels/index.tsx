import { Container } from "styled-bootstrap-grid";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import SBattels from "./style";

import Schedules from "./Schedules";
import CreateRoom from "./CreateRoom";
import ChallengeList from "./ChallengeList";

export default function Battels() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tạo Match",
      children: <CreateRoom />,
    },
    {
      key: "2",
      label: "Lời khiêu chiến",
      children: <ChallengeList />,
    },
    {
      key: "3",
      label: "Lịch thi đấu",
      children: <Schedules />,
    },
  ];

  return (
    <SBattels>
      <Container>
        <div className="battels_banner">
          <div className="wrap_title">
            <p className="title_little" data-aos="fade-up">
              MatchUp
            </p>

            <p className="title" data-aos="fade-up">
              <span className="title_black">Sân chơi thể thao Amela</span>
              <br />
              <span className="title_other">
                Mở rộng phong trào thể thao, gắn kết cán bộ nhân viên bằng những
                trận đấu hay và đẹp !!
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <Tabs
            defaultActiveKey="1"
            items={items}
            indicatorSize={(origin) => origin - 16}
          />
        </div>
      </Container>
    </SBattels>
  );
}
