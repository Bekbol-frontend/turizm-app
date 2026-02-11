import { Container } from "@/shared/ui/Container";
import styles from "./Footer.module.scss";
import { API } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IContact } from "@/entities/Contact/types";
import { getLocale, getTranslations } from "next-intl/server";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import Link from "next/link";
import { appRoutes } from "@/shared/config/routeConfig";
import Image from "next/image";

import TelegramIcon from "@/shared/assets/icons/social/telegram-fill.svg";
import InstagramIcon from "@/shared/assets/icons/social/instagram-fill.svg";
import YoutubeIcon from "@/shared/assets/icons/social/youtube-fill.svg";
import FacebookIcon from "@/shared/assets/icons/social/facebook-circle-fill.svg";

const getContactData = async (lang: string) => {
  return await API.get<IData<IContact>>("/contact", {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};

async function Footer() {
  const locale = await getLocale();
  const { data } = await getContactData(locale);
  const t = await getTranslations("Navigation");

  const {
    data: {
      phone,
      email,
      address,
      telegram_url,
      telegram_username,
      instagram_url,
      youtube_url,
      facebook_url,
    },
  } = data;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Title type="small" className={styles.phone}>
              {phone}
            </Title>
            <Title type="small" className={styles.email}>
              {email}
            </Title>
            <Paragraph className={styles.address}>{address}</Paragraph>
          </div>
          <div className={styles.right}>
            <div className={styles.socialWrapper}>
              <Paragraph className={styles.topDesc}>
                {t("Мы в соцсетях")}
              </Paragraph>
              <div className={styles.social}>
                <a
                  href={telegram_url}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src={TelegramIcon}
                    alt={telegram_username}
                    width={27}
                    height={27}
                  />
                </a>
                <a
                  href={instagram_url}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src={InstagramIcon}
                    alt="tokarbay_aga_tours"
                    width={27}
                    height={27}
                  />
                </a>
                <a
                  href={youtube_url}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src={YoutubeIcon}
                    alt="tokarbay_aga_tours"
                    width={27}
                    height={27}
                  />
                </a>
                <a
                  href={facebook_url}
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src={FacebookIcon}
                    alt="tokarbay_aga_tours"
                    width={27}
                    height={27}
                  />
                </a>
              </div>
            </div>

            <div className={styles.linksWrapper}>
              <Paragraph className={styles.topDesc}>
                {t("Карта сайта")}
              </Paragraph>
              <div className={styles.links}>
                <Link className={styles.link} href={appRoutes.catalog}>
                  {t("catalog")}
                </Link>
                <Link className={styles.link} href={appRoutes.about}>
                  {t("about")}
                </Link>
                <Link className={styles.link} href={appRoutes.reviews}>
                  {t("reviews")}
                </Link>
                <Link className={styles.link} href={appRoutes.contacts}>
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
