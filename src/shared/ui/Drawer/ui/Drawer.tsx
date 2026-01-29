"use client";
import { useResponsive } from "@/shared/lib/useResponsive";
import { Title } from "../../Title";
import styles from "./Drawer.module.scss";
import { Button } from "../../Button";
import CloseIcon from "@/shared/assets/icons/close-large-line.svg";
import Image from "next/image";
import { clsx } from "@/shared/lib/clsx";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "../../Portal";

interface IProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

function Drawer(props: IProps) {
  const { className = "", children, isOpen, onClose, lazy } = props;
  const [show, setShow] = useState(false);

  const { mobile } = useResponsive();

  const onCloseDrawer = useCallback(() => {
    setTimeout(() => onClose());
    setShow(false);
  }, [onClose]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseDrawer();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keyup", onKeyUp);
      setTimeout(() => {
        setShow(true);
      });
    }

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onCloseDrawer]);

  if (lazy && !isOpen) return null;

  return (
    <Portal>
      <div
        className={clsx([styles.drawer, className], {
          [styles.show]: show,
          [styles.hide]: !show,
        })}
        onClick={onCloseDrawer}
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.top}>
            <Title type={mobile ? "small" : "large"}>title</Title>
            <Button
              className={styles.btnClose}
              variyant="secondary"
              onClick={onCloseDrawer}
            >
              <Image src={CloseIcon} alt="close" width={15} height={15} />
            </Button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}

export default Drawer;
