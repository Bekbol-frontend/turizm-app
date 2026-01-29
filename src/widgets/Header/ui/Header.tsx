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
import { Drawer } from "@/shared/ui/Drawer";
import { useCallback, useState } from "react";
import HeaderMenuDrawer from "./HeaderMenuDrawer/HeaderMenuDrawer";
import { useTranslations } from "next-intl";

function Header() {
  const [drawer, setDrawer] = useState(false);
  const { mobile } = useResponsive();
  const t = useTranslations("Header");

  const onShowDrawer = useCallback(() => setDrawer(true), []);
  const onCloseDrawer = useCallback(() => setDrawer(false), []);

  return (
    <>
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
                  <Button
                    variyant="secondary"
                    className={styles.menuBtn}
                    onClick={onShowDrawer}
                  >
                    <Image src={MenuIcon} alt="menu" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <Drawer title={t("Menu")} isOpen={drawer} onClose={onCloseDrawer} lazy>
        <HeaderMenuDrawer onCloseDrawer={onCloseDrawer} />
      </Drawer>
    </>
  );
}

export default Header;
