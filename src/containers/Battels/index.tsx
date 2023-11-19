import { Container } from "styled-bootstrap-grid";
import SBattels from "./style";
import { Calendar } from "antd";

export default function Battels() {
  return (
    <SBattels>
      <Container>
        <div className="battels_banner">
          <div className="wrap_title">
            <p className="title_little" data-aos="fade-up">
            Battels
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
      </Container>

      <>
        <Calendar />
      </>
    </SBattels>
  );
}
