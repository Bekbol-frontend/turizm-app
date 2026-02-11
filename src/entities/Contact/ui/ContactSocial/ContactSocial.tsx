import LocationIcon from "@/shared/assets/icons/location.svg";
import PhoneIcon from "@/shared/assets/icons/phone-contact.svg";
import TelegramIcon from "@/shared/assets/icons/telegram.svg";
import InstagramIcon from "@/shared/assets/icons/social/instagram-fill.svg";
import FacebookIcon from "@/shared/assets/icons/social/facebook-circle-fill.svg";
import { Paragraph } from "@/shared/ui/Paragraph";
import styles from "./ContactSocial.module.scss";
import Image from "next/image";
import { IContact } from "../../types";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  data: IContact;
}

function ContactSocial({ data }: IProps) {
  const {
    address,
    phone,
    email,
    telegram_username,
    telegram_url,
    instagram_url,
    facebook_url,
    whatsapp_phone,
  } = data;

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
        <span className={clsx([styles.iconSpan, styles.whatsapp])}>
          <i className={clsx(["fa-brands fa-whatsapp", styles.whatsappIcon])} />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">{whatsapp_phone}</Paragraph>
        </div>
      </div>

      <div className={styles.item}>
        <a href={instagram_url} target="_blank" className={styles.link} />
        <span className={clsx([styles.iconSpan, styles.instagram])}>
          <Image
            src={InstagramIcon}
            alt={instagram_url}
            width={20}
            height={20}
            className={styles.img}
          />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">toktarbay_instagram</Paragraph>
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

      <div className={styles.item}>
        <a href={facebook_url} target="_blank" className={styles.link} />
        <span className={clsx([styles.iconSpan, styles.facebook])}>
          <Image
            src={FacebookIcon}
            alt={facebook_url}
            width={20}
            height={20}
            className={styles.img}
          />
        </span>
        <div className={styles.right}>
          <Paragraph type="small">toktarbay_facebook</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default ContactSocial;
