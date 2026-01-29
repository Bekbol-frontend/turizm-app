"use client";

import { Link } from "@/shared/config/i18n/routing";
import styles from "./HeaderMenuLink.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface IProps {
  name: string;
  path: string;
  className?: string;
}

function HeaderMenuLink({ name, path, className = "" }: IProps) {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const pathnameWithoutLocale = pathname.replace(/^\/(ru|en|uz|qq)/, "") || "/";

  return (
    <Link
      href={path}
      key={name}
      className={clsx([styles.link, className], {
        [styles.active]: pathnameWithoutLocale === path,
      })}
    >
      {t(name)}
    </Link>
  );
}

export default HeaderMenuLink;
