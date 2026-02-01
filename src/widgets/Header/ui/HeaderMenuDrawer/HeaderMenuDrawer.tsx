import { SwitchLang } from "@/shared/ui/SwitchLang";
import styles from "./HeaderMenuDrawer.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { ContactSocial } from "@/entities/Contact";

interface IProps {
  onCloseDrawer?: () => void;
}

function HeaderMenuDrawer({ onCloseDrawer }: IProps) {
  return (
    <div className={styles.wrapper}>
      <HeaderMenu isMobile onCloseDrawer={onCloseDrawer} />
      <SwitchLang isMobile />
    </div>
  );
}

export default HeaderMenuDrawer;
