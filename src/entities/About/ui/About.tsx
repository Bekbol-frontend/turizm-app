import { Container } from "@/shared/ui/Container";
import styles from "./About.module.scss";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import MainImg from "@/shared/assets/about/about.png";
import Image from "next/image";
import { Heading } from "@/shared/ui/Heading";
import { Paragraph } from "@/shared/ui/Paragraph";
import AboutSwiper from "./AboutSwiper/AboutSwiper";

function About() {
  return (
    <>
      <SectionTitle title={"About"} />
      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <div className={styles.mainImgWrapper}>
              <Image
                src={MainImg}
                alt="about"
                width={500}
                height={500}
                className={styles.img}
              />
            </div>
            <div className={styles.textBlock}>
              <Heading type="small" className={styles.title}>
                Ваш надежный проводник в мире приключений
              </Heading>
              <Paragraph type="medium">
                Мы организуем комфортные экспедиции по самым труднодоступным и
                живописным местам Каракалпакстана. В нашем арсенале — надежные
                внедорожники для покорения пустыни, опытные гиды-историки и
                собственный уютный хостел для отдыха после долгой дороги. Мы
                берем на себя все заботы: от трансфера и питания до выбора
                лучших локаций для фото, чтобы вы могли просто наслаждаться
                моментом.
              </Paragraph>
            </div>

            <AboutSwiper />
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
