"use client";

import { usePathname, useRouter } from "@/shared/config/i18n/routing";
import { useLocale } from "next-intl";
import ArrowDropDown from "@/shared/assets/icons/arrow-drop-down-line.svg";
import styles from "./SwitchLang.module.scss";
import Image from "next/image";
import { clsx } from "@/shared/lib/clsx";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/shared/lib/useOnClickOutside";

type Langs = "uz" | "kk" | "ru" | "en";
type Lang = Record<Langs, string>;

const lang: Lang = {
  uz: "O'zbek",
  kk: "Qaraqalpaq",
  ru: "Русский",
  en: "English",
};

const languages: { code: Langs; name: string }[] = [
  { code: "uz", name: "O'zbek" },
  { code: "kk", name: "Qaraqalpaq" },
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
];

interface IProps {
  className?: string;
  isMobile?: boolean;
}

export default function SwitchLang({
  className = "",
  isMobile = false,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleChange = (newLocale: string) => {
    if (locale === newLocale) return;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className={clsx([styles.switchLangWrapper, className], {
        [styles.active]: isOpen,
        [styles.mobile]: isMobile,
      })}
      ref={ref}
    >
      <span
        className={styles.currentLang}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {lang[locale as Langs]}
        <Image src={ArrowDropDown} width={20} height={20} alt="icon" />
      </span>
      <div className={styles.langsWrapper}>
        <div className={styles.langs}>
          {languages.map((lang) => (
            <span
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={clsx([styles.lang], {
                [styles.active]: lang.code === locale,
              })}
            >
              {lang.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
