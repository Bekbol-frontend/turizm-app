import LocationIcon from "@/shared/assets/icons/location.svg";
import PhoneIcon from "@/shared/assets/icons/phone-contact.svg";
import TelegramIcon from "@/shared/assets/icons/telegram.svg";
import { Paragraph } from "@/shared/ui/Paragraph";
import styles from "./ContactSocial.module.scss";
import Image from "next/image";
import { IContact } from "../../types";
import { clsx } from "@/shared/lib/clsx";

const contactItems = [
  {
    icon: LocationIcon,
    title: "Нукус",
    body: "Нукус, Республика Каракалпакстан",
    bgIcon: "#F0D81B",
    link: false,
  },
  {
    icon: PhoneIcon,
    title: "+998 90 123 45 67",
    body: "tokarbay@info.uz",
    bgIcon: "#042A2B",
    link: true,
  },
  {
    icon: TelegramIcon,
    title: "@welcome_to_karakalpakistan",
    body: "+998 90 123 45 67",
    bgIcon: "#2BE5EB",
    link: true,
  },
];

interface IProps {
  data: IContact;
}

function ContactSocial({ data }: IProps) {
  const { address, phone, email, telegram_username, telegram_url } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span className={clsx([styles.iconSpan, styles.map])}>
          <Image
            src={LocationIcon}
            alt={address}
            width={18}
            height={18}
            className={styles.img}
          />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">{address}</Paragraph>
        </div>
      </div>
      <div className={styles.item}>
        <span className={clsx([styles.iconSpan, styles.phone])}>
          <Image
            src={PhoneIcon}
            alt={phone}
            width={18}
            height={18}
            className={styles.img}
          />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">{phone}</Paragraph>
          <Paragraph type="small">{email}</Paragraph>
        </div>
      </div>
      <div className={styles.item}>
        <a href={telegram_url} target="_blank" className={styles.link} />
        <span className={clsx([styles.iconSpan, styles.telegram])}>
          <Image
            src={TelegramIcon}
            alt={phone}
            width={18}
            height={18}
            className={styles.img}
          />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">{telegram_username}</Paragraph>
          <Paragraph type="small">{phone}</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default ContactSocial;
