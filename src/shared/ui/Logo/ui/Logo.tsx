import Image from "next/image";
import styles from "./Logo.module.scss";
import { clsx } from "@/shared/lib/clsx";
import Link from "next/link";
import { appRoutes } from "@/shared/config/routeConfig";
import { useResponsive } from "@/shared/lib/useResponsive";

interface IProps {
  className?: string;
}

function Logo({ className = "" }: IProps) {
  const { mobile } = useResponsive();

  return (
    <div className={clsx([styles.logo, className])}>
      <Image
        src="/logo.svg"
        alt="Toktarbay aga tours"
        width={mobile ? 75 : 80}
        height={mobile ? 75 : 80}
        className={styles.img}
        priority
      />
      <Link href={appRoutes.home} className={styles.link} />
    </div>
  );
}

export default Logo;
