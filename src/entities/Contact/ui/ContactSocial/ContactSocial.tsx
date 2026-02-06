import LocationIcon from "@/shared/assets/icons/location.svg";
import PhoneIcon from "@/shared/assets/icons/phone-contact.svg";
import TelegramIcon from "@/shared/assets/icons/telegram.svg";
import { Paragraph } from "@/shared/ui/Paragraph";
import styles from "./ContactSocial.module.scss";
import Image from "next/image";
import { IContact } from "../../types";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  data: IContact;
}

function ContactSocial({ data }: IProps) {
  const { address, phone, email, telegram_username, telegram_url } = data;

  console.log(data);

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
