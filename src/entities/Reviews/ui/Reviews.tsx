import { Container } from "@/shared/ui/Container";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import ReviewsSwiper from "./ReviewsSwiper/ReviewsSwiper";
import styles from "./Reviews.module.scss";
import { API } from "@/shared/api";
import { getLocale, getTranslations } from "next-intl/server";
import { IData } from "@/shared/types/data";
import { IReview } from "../types";

const getReviews = async (lang: string) => {
  return await API.get<IData<IReview[]>>("/reviews", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function Reviews() {
  const locale = await getLocale();
  const res = await getReviews(locale);
  const t = await getTranslations("Reviews");

  return (
    <>
      <SectionTitle title={t("Reviews")} />
      <section className={styles.section}>
        <Container>
          <ReviewsSwiper data={res.data.data} />
        </Container>
      </section>
    </>
  );
}

export default Reviews;
