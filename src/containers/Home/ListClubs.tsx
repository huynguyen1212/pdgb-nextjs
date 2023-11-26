import { Col, Container, Row } from "styled-bootstrap-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import CardClub from "src/components/CardClub";
import { SListClubs } from "./style";

export default function ListClubs() {
  const [listClubs, setListClubs] = useState<any[]>([]);

  useQuery({
    queryKey: ["listOtherClubs"],
    queryFn: () =>
    requestToken({
        method: "GET",
        url: API_URL.LIST_OTHER_CLUBS,
      }),
    onSuccess(data) {
      setListClubs(data.data.data);
    },
  });

  console.log(listClubs);

  return (
    <SListClubs>
      {listClubs && listClubs.length > 0 && (
        <Container>
          <div className="list-clubs">
            <h3 className="page-content-title title_clubs">
              List Other Clubs
            </h3>

            <Row>
              {listClubs.map((club) => (
                <Col
                  key={club.id}
                  xl={3}
                  lg={3}
                  md={4}
                  sm={12}
                  xs={12}
                  col={12}
                  className="item-club"
                >
                  <CardClub
                    name={club.name}
                    members={club.members.length}
                    status={club.status}
                    id={club.id}
                    description={club.description}
                    teams_count={club.teams.length}
                    number_of_members={club.number_of_members}
                    sports_disciplines={club.sports_disciplines}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      )}
    </SListClubs>
  );
}
