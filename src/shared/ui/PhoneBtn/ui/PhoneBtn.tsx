import { Button } from "../../Button";
import Image from "next/image";
import PhoneIcon from "@/shared/assets/icons/phone.svg";
import styles from "./PhoneBtn.module.scss";

interface IProps {
  phone: string;
  className?: string;
}

function PhoneBtn({ phone, className = "" }: IProps) {
  return (
    <Button className={styles.phoneBtn}>
      <Image src={PhoneIcon} alt="turizm phone" width={20} height={20} />

      {phone}
    </Button>
  );
}

export default PhoneBtn;
