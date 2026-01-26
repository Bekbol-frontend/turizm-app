"use client";

import { Link } from "@/shared/config/i18n/routing";
import styles from "./HeaderMenuLink.module.scss";
import { clsx } from "@/shared/lib/clsx";
import { usePathname } from "next/navigation";

interface IProps {
  name: string;
  path: string;
  className?: string;
}

function HeaderMenuLink({ name, path, className = "" }: IProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      key={name}
      className={clsx([styles.link, className], {
        [styles.active]: pathname === path,
      })}
    >
      {name}
    </Link>
  );
}

export default HeaderMenuLink;
