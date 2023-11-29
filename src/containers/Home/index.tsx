import SHome, { SFormRequestCreateClub } from "./style";
import Banner from "./Banner";
import FormRequestCreateClub from "./FormRequestCreateClub";
import { useSession } from "next-auth/react";
import ListClubs from "./ListClubs";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import { useState } from "react";
import API_URL from "src/api/url";
import { Container } from "styled-bootstrap-grid";

export default function Home() {
  // api
  const { data: section }: any = useSession();
  const [check, setCheck] = useState<boolean>(false);
  const [infoUser, setInfoUser] = useState<any>({});

  useQuery({
    queryKey: ["CHECK_IS_IN_CLUB", section],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.CLUBS.CHECK_IS_IN_CLUB,
      }),
    onError() {
      setCheck(false);
    },
    onSuccess() {
      setCheck(true);
    },
  });

  useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () =>
      requestToken({
        method: "GET",
        url: API_URL.USER_INFO,
      }),
    onSuccess(data) {
      setInfoUser(data.data.data);
    },
  });

  return (
    <SHome>
      <Banner />

      {section && !check && (
        <>
          {infoUser && infoUser?.request_club ? (
            <>
              <SFormRequestCreateClub>
                <Container>
                  <div className="form_request_create_club text-center">
                    Đã gửi yêu cầu tạo club!
                  </div>
                </Container>
              </SFormRequestCreateClub>
            </>
          ) : (
            <>
              <ListClubs />
              <FormRequestCreateClub />
            </>
          )}
        </>
      )}
    </SHome>
  );
}
