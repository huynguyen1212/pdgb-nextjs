import SHome from "./style";
import Banner from "./Banner";
import FormRequestCreateClub from "./FormRequestCreateClub";
import { useSession } from "next-auth/react";
import ListClubs from "./ListClubs";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import API_URL from "src/api/url";

export default function Home() {
  // api
  const { data: section }: any = useSession();

  const { data: check } = useQuery(["CHECK_IS_IN_CLUB", section], async () => {
    const response = await requestToken({
      method: "GET",
      url: API_URL.CLUBS.CHECK_IS_IN_CLUB,
    });
    return response?.status === 200 ? true : false;
  });

  return (
    <SHome>
      <Banner />

      {check !== false ? (
        <></>
      ) : (
        <>
          <FormRequestCreateClub />

          <ListClubs />
        </>
      )}
    </SHome>
  );
}
