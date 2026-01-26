import { Container } from "@/shared/ui/Container";
import styles from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { SwitchLang } from "@/shared/ui/SwitchLang";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.right}>
            <HeaderMenu />
            <SwitchLang />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
