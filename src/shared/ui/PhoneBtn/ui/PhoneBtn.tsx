import { Button } from "../../Button";
import Image from "next/image";
import PhoneIcon from "@/shared/assets/icons/phone.svg";
import styles from "./PhoneBtn.module.scss";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  phone: string;
  className?: string;
}

function PhoneBtn({ phone, className = "" }: IProps) {
  return (
    <Button className={clsx([styles.phoneBtn, className])}>
      <Image src={PhoneIcon} alt="turizm phone" width={20} height={20} />
      {phone}

      <a href={`tel:${phone}`} className={styles.link} />
    </Button>
  );
}

export default PhoneBtn;
