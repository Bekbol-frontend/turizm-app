"use client";
import { Container } from "@/shared/ui/Container";
import styles from "./Header.module.scss";
import { Logo } from "@/shared/ui/Logo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import { SwitchLang } from "@/shared/ui/SwitchLang";
import { PhoneBtn } from "@/shared/ui/PhoneBtn";
import { useResponsive } from "@/shared/lib/useResponsive";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import MenuIcon from "@/shared/assets/icons/menu.svg";

function Header() {
  const { mobile } = useResponsive();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.right}>
            {!mobile && <HeaderMenu />}
            <div className={styles.phoneAndLang}>
              {!mobile && <SwitchLang />}
              <PhoneBtn phone="+998 90 123 45 67" />
              {mobile && (
                <Button variyant="secondary" className={styles.menuBtn}>
                  <Image src={MenuIcon} alt="menu" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
