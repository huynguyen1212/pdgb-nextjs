import { Col, Container, Row } from "styled-bootstrap-grid";
import SClub from "./style";
import CardMember from "src/components/CardMember";

export default function Member({ data }: any) {
  return (
    <SClub>
      {data && data.length > 0 && (
        <Container>
          <Row>
            {data.map((member: any) => (
              <Col
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                col={12}
                key={member.id}
                className="item-member"
              >
                <CardMember
                  avatar=""
                  name={member.name}
                  id={member.id}
                  email={member.email}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </SClub>
  );
}
