import { Container } from "@/shared/ui/Container";
import styles from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { Button } from "@/shared/ui/Button";
import { PhoneBtn } from "@/shared/ui/PhoneBtn";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.right}>
            <HeaderMenu />
            <div className={styles.phoneAndLang}>
              <SwitchLang />
              <PhoneBtn phone="+998 90 123 45 67" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
