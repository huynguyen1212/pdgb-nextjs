import { Col, Container, Row } from "styled-bootstrap-grid";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";
import CardClub from "src/components/CardClub";
import { SListClubs } from "./style";
import { useSession } from "next-auth/react";

export default function ListClubs() {
  const { data: section }: any = useSession();

  const {
    data: listClubs,
    refetch,
    isError,
  } = useQuery(["listOtherClubs"], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.LIST_OTHER_CLUBS,
    });
    return response?.data.data;
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  if (isError || !(listClubs && listClubs.length > 0)) {
    return <></>;
  }

  return (
    <SListClubs>
      <Container>
        <div className="list-clubs">
          <h3 className="page-content-title title_clubs">
            Danh sách các clubs
          </h3>

          <Row>
            {listClubs.map((club: any) => (
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
    </SListClubs>
  );
}
