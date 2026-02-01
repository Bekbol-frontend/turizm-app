import { Container } from "@/shared/ui/Container";
import styles from "./About.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import MainImg from "@/shared/assets/about/about.png";
import Image from "next/image";
import { Heading } from "@/shared/ui/Heading";
import { Paragraph } from "@/shared/ui/Paragraph";
import AboutSwiper from "./AboutSwiper/AboutSwiper";
import { Title } from "@/shared/ui/Title";
import { API, baseURL } from "@/shared/api";
import { getLocale } from "next-intl/server";
import { IData } from "@/shared/types/data";
import { IAbout } from "../types";

const getAbout = async (lang: string) => {
  return await API.get<IData<IAbout>>("/about", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function About() {
  const locale = await getLocale();
  const res = await getAbout(locale);

  const { image, title, description } = res.data.data;

  return (
    <>
      <SectionTitle title={"About"} />
      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <div className={styles.mainImgWrapper}>
              <Image
                src={`${baseURL}/${image}`}
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
