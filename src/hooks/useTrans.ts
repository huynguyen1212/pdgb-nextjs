import { useRouter } from "next/router";
import en from "../assets/languages/en";
import vi from "../assets/languages/vi";

const useTrans = () => {
  const { locale } = useRouter();
  const trans = locale === "vi" ? vi : en;
  return trans;
};

export default useTrans;
