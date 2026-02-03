import { IProduct, Product } from "@/entities/Product";
import { Container } from "@/shared/ui/Container";
import styles from "./PopularTours.module.scss";
import { API } from "@/shared/api";
import { getLocale } from "next-intl/server";
import { IData } from "@/shared/types/data";

const getPopularTours = async (lang: string) => {
  return await API.get<IData<IProduct[]>>("/tours/top-rated", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function PopularTours() {
  const locale = await getLocale();
  const res = await getPopularTours(locale);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.products}>
          {res.data.data.map((el) => (
            <Product data={el} key={el.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PopularTours;
