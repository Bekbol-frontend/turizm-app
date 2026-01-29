import { SwitchLang } from "@/shared/ui/SwitchLang";
import styles from "./HeaderMenuDrawer.module.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

interface IProps {
  onCloseDrawer?: () => void;
}

function HeaderMenuDrawer({ onCloseDrawer }: IProps) {
  return (
    <div className={styles.wrapper}>
      <SwitchLang isMobile />
      <HeaderMenu isMobile onCloseDrawer={onCloseDrawer} />
    </div>
  );
}

export default HeaderMenuDrawer;
