import LocationIcon from "@/shared/assets/icons/location.svg";
import PhoneIcon from "@/shared/assets/icons/phone-contact.svg";
import TelegramIcon from "@/shared/assets/icons/telegram.svg";
import { Paragraph } from "@/shared/ui/Paragraph";
import styles from "./ContactSocial.module.scss";
import Image from "next/image";

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

function ContactSocial() {
  return (
    <div className={styles.wrapper}>
      {contactItems.map((el) => (
        <div key={el.title} className={styles.item}>
          <span
            style={{ backgroundColor: el.bgIcon }}
            className={styles.iconSpan}
          >
            <Image
              src={el.icon}
              alt={el.title}
              width={18}
              height={18}
              className={styles.img}
            />
          </span>
          <div className={styles.right}>
            <Paragraph type="small">
              {el.title}
              {el.link && <a href={`tel:${el.title}`} />}
            </Paragraph>
            <Paragraph type="small">{el.body}</Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactSocial;
