import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesFooter } from "../style";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoTextWhite from "src/components/Icons/LogoTextWhite";
import { useSession } from "next-auth/react";

export default function Footer() {
  const router = useRouter();
  const { data: section }: any = useSession();

  return (
    <StylesFooter>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} col={12}>
            <div className="col_item col_item_1">
              <div className="logo">
                <Link href="/">
                  <LogoTextWhite className="logo_main" />
                </Link>
              </div>

              <p>
                Mobile: <a href="tel:413415315135">413415315135</a>
              </p>
              <p>Email: </p>
            </div>
          </Col>

          {section && (
            <Col xl={3} lg={3} md={3} sm={4} xs={12} col={12}>
              <div className="col_item">
                <div className="title">Function</div>

                <div className="content">
                  <div className="content_item">
                    <span
                      onClick={() => {
                        router.push("/club");
                      }}
                    >
                      Quản lý Club
                    </span>
                  </div>
                  <div className="content_item">
                    <span
                      onClick={() => {
                        router.push("/battels");
                      }}
                    >
                      Chiến thôi
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </StylesFooter>
  );
}
