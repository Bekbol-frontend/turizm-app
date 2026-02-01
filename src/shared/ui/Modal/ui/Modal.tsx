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
  showCloseButton?: boolean;
  title?: string;
}

function Modal({
  children,
  lazy,
  isOpen,
  onClose,
  closeOnBackdrop = true,
  closeOnEsc = true,
  showCloseButton = true,
  title,
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
          {showCloseButton && (
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Yopish"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          {title && (
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
            </div>
          )}

          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
