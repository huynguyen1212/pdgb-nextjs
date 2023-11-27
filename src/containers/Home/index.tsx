import SHome from "./style";
import Banner from "./Banner";
import FormRequestCreateClub from "./FormRequestCreateClub";
import { useSession } from "next-auth/react";
import ListClubs from "./ListClubs";
import { useQuery } from "react-query";
import { requestToken } from "src/api/axios";
import { useState } from "react";
import API_URL from "src/api/url";

export default function Home() {
  // api
  const { data: section }: any = useSession();
  const [check, setCheck] = useState<boolean>(false);
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
    onSuccess(data) {
      setCheck(true);
    },
  });

  console.log(check, "Check");

  return (
    <SHome>
      <Banner />

      {section && !check && (
        <>
          <FormRequestCreateClub />

          <ListClubs />
        </>
      )}
    </SHome>
  );
}
