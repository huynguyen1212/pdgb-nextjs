import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesFooter } from "../style";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";

export default function Footer() {
  const router = useRouter();
  return (
    <StylesFooter>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} col={12}>
            <div className="col_item col_item_1">
              <div className="logo">
                <Link href="/">Logo</Link>
              </div>

              <p>
                Mobile: <a href="tel:413415315135">413415315135</a>
              </p>
              <p>Email: </p>
            </div>
          </Col>

          <Col xl={3} lg={3} md={3} sm={4} xs={12} col={12}>
            <div className="col_item">
              <div className="title">About</div>

              <div className="content">
                <div className="content_item">
                  <span
                    onClick={() => {
                      router.push("/services");
                    }}
                  >
                    Dịch vụ
                  </span>
                </div>
                <div className="content_item">
                  <span
                    onClick={() => {
                      router.push("/projects");
                    }}
                  >
                    Dự án
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={3} lg={3} md={3} sm={4} xs={12} col={12}>
            <div className="col_item">
              <div className="title">Infomation</div>

              <div className="content">
                <div className="content_item">
                  <span
                    onClick={() => {
                      router.push("/about-us");
                    }}
                  >
                    Chúng tôi là ai?
                  </span>
                </div>
                <div className="content_item">
                  <span
                    onClick={() => {
                      router.push("/about-us");
                    }}
                  >
                    Sứ mệnh
                  </span>
                </div>
                <div className="content_item">
                  <span
                    onClick={() => {
                      router.push("/about-us");
                    }}
                  >
                    Thành viên
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={2} lg={2} md={2} sm={4} xs={12} col={12}>
            <div className="col_item">
              <div className="title">Mạng xã hội</div>

              <div className="content">
                <div className="media">
                  <Link
                    target="_blank"
                    href="#"
                  >
                    <div className="media_item">
                      <BsFacebook className="media_icon" />
                    </div>
                  </Link>

                  <Link href="#">
                    <div className="media_item">
                      <SiTelegram className="media_icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StylesFooter>
  );
}
