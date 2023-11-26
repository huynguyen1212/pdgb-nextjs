import SHome from "./style";
import Banner from "./Banner";
import FormRequestCreateClub from "./FormRequestCreateClub";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: section }: any = useSession();

  return (
    <SHome>
      <Banner />

      {section && <FormRequestCreateClub />}
    </SHome>
  );
}
