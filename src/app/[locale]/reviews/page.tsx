import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ISectionBanner, SectionBanner } from "@/shared/ui/SectionBanner";
import { getLocale } from "next-intl/server";
import ReviewsItems from "./ReviewsItems/ReviewsItems";
import { FAQ } from "@/entities/FAQ";
import { ContactServer } from "@/entities/Contact";

const getBannerReview = async (lang: string) => {
  return await API.get<IData<ISectionBanner>>("reviews/banner", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function ReviewsPage() {
  const locale = await getLocale();
  const res = await getBannerReview(locale);

  return (
    <>
      <SectionBanner data={res.data.data} />
      <ReviewsItems />
      <FAQ />
      <ContactServer />
    </>
  );
}

export default ReviewsPage;
