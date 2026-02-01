import { API } from "@/shared/api";
import BannerSwiper from "./BannerSwiper/BannerSwiper";
import { IData } from "@/shared/types/data";
import { IBanner } from "../types";
import { getLocale } from "next-intl/server";

const getBanner = async (lang: string) => {
  return await API.get<IData<IBanner[]>>("/hero-slides", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function Banner() {
  const locale = await getLocale();
  const res = await getBanner(locale);

  return (
    <section>
      <BannerSwiper data={res.data.data} />
    </section>
  );
}

export default Banner;
