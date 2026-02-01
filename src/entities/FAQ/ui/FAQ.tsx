import { Container } from "@/shared/ui/Container";
import styles from "./FAQ.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { Accordion } from "@/shared/ui/Accordion";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IFAQ } from "../types";
import { getLocale } from "next-intl/server";

const getFaqItems = async (lang: string) => {
  return await API.get<IData<IFAQ[]>>("/faq", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function FAQ() {
  const locale = await getLocale();
  const res = await getFaqItems(locale);

  return (
    <>
      <SectionTitle title="FAQ" />
      <section className={styles.section}>
        <Container>
          <div className={styles.accordionList}>
            {res.data.data.map((item) => (
              <Accordion data={item} key={item.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default FAQ;
