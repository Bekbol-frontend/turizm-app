"use client";

import { usePathname, useRouter } from "@/shared/config/i18n/routing";
import { useLocale } from "next-intl";
import ArrowDropDown from "@/shared/assets/icons/arrow-drop-down-line.svg";
import styles from "./SwitchLang.module.scss";
import Image from "next/image";

type Langs = "uz" | "qq" | "ru" | "en";
type Lang = Record<Langs, string>;

const lang: Lang = {
  uz: "O'zbek",
  qq: "Qaraqalpaq",
  ru: "Русский",
  en: "English",
};

const languages: { code: Langs; name: string }[] = [
  { code: "uz", name: "O'zbek" },
  { code: "qq", name: "Qaraqalpaq" },
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
];

export default function SwitchLang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    if (locale === newLocale) return;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={styles.switchLangWrapper}>
      <span className={styles.currentLang}>
        {lang[locale as Langs]}{" "}
        <Image src={ArrowDropDown} width={20} height={20} alt="icon" />
      </span>
      <div className={styles.langsWrapper}>
        <div className={styles.langs}>
          {languages.map((lang) => (
            <span
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={styles.lang}
            >
              {lang.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
