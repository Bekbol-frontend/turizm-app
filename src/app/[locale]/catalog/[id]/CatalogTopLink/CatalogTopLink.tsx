import { useTranslations } from "next-intl";
import styles from "./CatalogTopLink.module.scss";
import Link from "next/link";
import { appRoutes } from "@/shared/config/routeConfig";

interface IProps {
  title: string;
}

function CatalogTopLink({ title }: IProps) {
  const t = useTranslations("Navigation");

  return (
    <div className={styles.block}>
      <span className={styles.firstSpan}>
        {t("catalog")}
        <Link href={appRoutes.catalog} className={styles.link} />
      </span>
      <span>
        <svg
          width="7"
          height="18"
          viewBox="0 0 7 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.51528 8.96788L1.76758 0L0 0.93578L4.25228 8.96788L0 17L1.76758 17.9358L6.51528 8.96788Z"
            fill="#BAC1CE"
          />
        </svg>
      </span>
      <span className={styles.lastSpan}>
        <span>{title}</span>
      </span>
    </div>
  );
}

export default CatalogTopLink;
