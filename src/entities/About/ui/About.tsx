import { Container } from "@/shared/ui/Container";
import styles from "./About.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import Image from "next/image";
import { Heading } from "@/shared/ui/Heading";
import { Paragraph } from "@/shared/ui/Paragraph";
import AboutSwiper from "./AboutSwiper/AboutSwiper";
import { Title } from "@/shared/ui/Title";
import { API, imgUrl } from "@/shared/api";
import { getLocale, getTranslations } from "next-intl/server";
import { IData } from "@/shared/types/data";
import { IAbout } from "../types";

const getAbout = async (lang: string) => {
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Get about data from API
   * @param {string} lang - language code, e.g. en, ru, etc.
   * @returns {Promise<IData<IAbout>>} - Promise with data from API
   */
  /*******  14a63139-0f3c-4309-b9ca-8f01e4f04d7f  *******/ return await API.get<
    IData<IAbout>
  >("/about", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function About() {
  const locale = await getLocale();
  const res = await getAbout(locale);
  const t = await getTranslations("About");

  const { title, description, images } = res.data.data;

  return (
    <>
      <SectionTitle title={t("About")} />
      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <div className={styles.mainImgWrapper}>
              <Image
                src={`${imgUrl}/${images[0].image_path}`}
                alt={title}
                width={500}
                height={500}
                className={styles.img}
              />
            </div>

            <div className={styles.textBlock}>
              <Heading type="small" className={styles.title}>
                {title}
              </Heading>
              <Title type="small" className={styles.titleMobile}>
                {title}
              </Title>
              <Paragraph type="medium" className={styles.desc}>
                {description}
              </Paragraph>
              <Paragraph type="small" className={styles.descMobile}>
                {description}
              </Paragraph>
            </div>

            <AboutSwiper data={res.data.data.images} />
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
