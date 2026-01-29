"use client";

import { Link } from "@/shared/config/i18n/routing";
import styles from "./HeaderMenuLink.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

interface IProps {
  name: string;
  path: string;
  className?: string;
  onCloseDrawer?: () => void;
}

function HeaderMenuLink({ name, path, className = "", onCloseDrawer }: IProps) {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const pathnameWithoutLocale = pathname.replace(/^\/(ru|en|uz|qq)/, "") || "/";

  const onClose = useCallback(() => {
    onCloseDrawer?.();
  }, [onCloseDrawer]);

  return (
    <Link
      href={path}
      key={name}
      className={clsx([styles.link, className], {
        [styles.active]: pathnameWithoutLocale === path,
      })}
      onClick={onClose}
    >
      {t(name)}
    </Link>
  );
}

export default HeaderMenuLink;
