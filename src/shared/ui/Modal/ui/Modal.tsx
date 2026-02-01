"use client";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import { Portal } from "../../Portal";
import styles from "./Modal.module.scss";

interface IProps {
  children: ReactNode;
  lazy?: boolean;
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
}

function Modal({
  children,
  lazy,
  isOpen,
  onClose,
  closeOnBackdrop = true,
  closeOnEsc = true,
}: IProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (!modalRef.current) return;

    modalRef.current.classList.add(styles.closing);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop) {
      handleClose();
    }
  }, [closeOnBackdrop, handleClose]);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeOnEsc, handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (lazy && !isOpen) return null;

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={handleBackdropClick}
      >
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
