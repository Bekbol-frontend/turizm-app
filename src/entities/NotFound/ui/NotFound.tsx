"use client";

import Image from "next/image";
import styles from "./NotFound.module.scss";
import ImgNotFound from "@/shared/assets/404-images/404.jpg";
import { Title } from "@/shared/ui/Title";
import { Paragraph } from "@/shared/ui/Paragraph";
import { clsx } from "@/shared/lib/clsx";
import { Button } from "@/shared/ui/Button";
import { useResponsive } from "@/shared/lib/useResponsive";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/shared/config/routeConfig";
import { useTranslations } from "next-intl";

function NotFound() {
  const { mobile } = useResponsive();
  const router = useRouter();
  const t = useTranslations("NotFound");

  const goToHome = () => {
    router.push(appRoutes.home);
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imgBlock}>
          <Image src={ImgNotFound} alt="404" width={250} height={250} />
        </div>
        <div className={styles.textBlock}>
          <Title
            type={mobile ? "small" : "large"}
            className={styles.titleColor}
          >
            404.
          </Title>
          <Title
            type={mobile ? "small" : "large"}
            className={clsx([styles.title, styles.titleColor])}
          >
            {t("It seems you took a wrong turn")}
          </Title>
          <Paragraph type="medium" className={styles.desc}>
            {t(
              "This page was lost in the sands of Karakalpakstan or was just a mirage",
            )}
          </Paragraph>
          <Button variyant="secondary" onClick={goToHome}>
            {t("Return to home")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
