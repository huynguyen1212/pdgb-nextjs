import { Col, Container, Row } from "styled-bootstrap-grid";
import SClub from "./style";
import CardTeam from "src/components/CardTeam";

export interface Props {
  data: any;
  number_of_members: number;
}

export default function Sport({ data, number_of_members }: Props) {
  return (
    <SClub>
      {data && data.length > 0 && (
        <Container>
          <Row>
            {data.map((sport: any) => (
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                col={12}
                key={sport.id}
                className="item-sport"
              >
                <CardTeam
                  avatar=""
                  name={sport.name}
                  id={sport.id}
                  members={sport.number_of_participants}
                  type={sport.id}
                  number_of_members={number_of_members}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </SClub>
  );
}
