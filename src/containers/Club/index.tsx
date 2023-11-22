import { Col, Container, Row } from "styled-bootstrap-grid";
import CardClub from "src/components/CardClub";
import banner from "src/assets/image/logo_banner/bg-club.png"
import SClub from "./style";
import Image from "next/image";

export default function Club() {
  return (
    <SClub>
      <div className="club-banner">
        <Image src={banner} fill alt="banner" />
      </div>
      <Container>
        <div className="list-clubs">
          <h3 className="page-content-title title_clubs">List Clubs</h3>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12} xs={12} col={12} className="item-club">
              <CardClub
                name="Cầu lông"
                member={12}
                status="Active"
                avatar="https://hvshop.vn/wp-content/uploads/2021/10/qua-cau-long-hvshop.jpeg"
              />
            </Col>
            <Col xl={4} lg={4} md={6} sm={12} xs={12} col={12} className="item-club">
              <CardClub
                name="Bi lắc"
                member={12}
                status="Off"
                avatar="https://lzd-img-global.slatic.net/g/p/f63e7ee691205425d130ceab784b5223.jpg_720x720q80.jpg"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </SClub>
  );
}
