import { Col, Container, Row } from "styled-bootstrap-grid";
import SClub from "./style";
import CardTeam from "src/components/CardTeam";

export default function Team({ data }: any) {
  return (
    <SClub>
      {/* {data && data.length > 0 && ( */}
        <Container>
          <Row>
            {/* {data.map((member: any) => (
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                col={12}
                key={member.id}
              >
                <CardTeam
                  avatar=""
                  name={member.name}
                  id={member.id}
                  email={member.email}
                />
              </Col>
            ))} */}
            <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                col={12}
              >
                <CardTeam
                  avatar=""
                  name=""
                  id={1}
                  email=""
                />
              </Col>
          </Row>
        </Container>
      {/* )} */}
    </SClub>
  );
}
