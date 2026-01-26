import Image from "next/image";
import styles from "./Logo.module.scss";
import { clsx } from "@/shared/lib/clsx";
import Link from "next/link";
import { appRoutes } from "@/shared/config/routeConfig";

interface IProps {
  className?: string;
}

function Logo({ className = "" }: IProps) {
  return (
    <div className={clsx([styles.logo, className])}>
      <Image
        src="/logo.svg"
        alt="Toktarbay aga tours"
        width={80}
        height={80}
        className={styles.img}
        priority
      />
      <Link href={appRoutes.home} className={styles.link} />
    </div>
  );
}

export default Logo;
