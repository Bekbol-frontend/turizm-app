"use client";

import {
  useEffect,
  useCallback,
  useRef,
  useState,
  MouseEvent,
  WheelEvent,
} from "react";
import Image from "next/image";
import styles from "./AwardModal.module.scss";
import { IAboutAward } from "../../types";
import { Portal } from "@/shared/ui/Portal";

interface IProps {
  images: IAboutAward["images"];
  imgUrl: string;
  activeId: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

function AwardModal({
  images,
  imgUrl,
  activeId,
  onClose,
  onPrev,
  onNext,
}: IProps) {
  const activeImage = images.find((img) => img.id === activeId) ?? null;

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateRef = useRef({ x: 0, y: 0 });

  const resetZoom = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    translateRef.current = { x: 0, y: 0 };
  }, []);

  const zoomIn = useCallback(() => {
    setScale((s) => Math.min(parseFloat((s + ZOOM_STEP).toFixed(1)), MAX_ZOOM));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(
        parseFloat((prev - ZOOM_STEP).toFixed(1)),
        MIN_ZOOM,
      );
      if (next === MIN_ZOOM) {
        setTranslate({ x: 0, y: 0 });
        translateRef.current = { x: 0, y: 0 };
      }
      return next;
    });
  }, []);

  const handlePrev = useCallback(() => {
    resetZoom();
    onPrev();
  }, [resetZoom, onPrev]);

  const handleNext = useCallback(() => {
    resetZoom();
    onNext();
  }, [resetZoom, onNext]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "=" || e.key === "+") zoomIn();
      if (e.key === "-") zoomOut();
      if (scale === 1) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    },
    [onClose, zoomIn, zoomOut, scale, handlePrev, handleNext],
  );

  useEffect(() => {
    if (!activeImage) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage, handleKeyDown]);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scale === 1) return;
    isPanning.current = true;
    panStart.current = {
      x: e.clientX - translateRef.current.x,
      y: e.clientY - translateRef.current.y,
    };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isPanning.current) return;
    const x = e.clientX - panStart.current.x;
    const y = e.clientY - panStart.current.y;
    translateRef.current = { x, y };
    setTranslate({ x, y });
  };

  const handleMouseUp = () => {
    isPanning.current = false;
  };

  if (!activeImage) return null;

  const currentIndex = images.findIndex((img) => img.id === activeId);
  const isZoomed = scale > 1;
  const zoomPercent = Math.round(scale * 100);

  return (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/* Close */}
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Prev */}
          {!isZoomed && (
            <button
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={handlePrev}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13 4l-7 6 7 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className={`${styles.imageWrap} ${isZoomed ? styles.panning : ""}`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className={styles.imageInner}
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              }}
            >
              <Image
                src={`${imgUrl}/${activeImage.image_path}`}
                alt={`Award ${activeImage.id}`}
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                style={{ objectFit: "contain" }}
                className={styles.image}
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Next */}
          {!isZoomed && (
            <button
              className={`${styles.nav} ${styles.navNext}`}
              onClick={handleNext}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 4l7 6-7 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Counter */}
          {!isZoomed && (
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>{currentIndex + 1}</span>
              <span className={styles.counterSep}>/</span>
              <span className={styles.counterTotal}>{images.length}</span>
            </div>
          )}

          {/* Zoom Bar */}
          <div className={styles.zoomBar}>
            <button
              className={styles.zoomBtn}
              onClick={zoomOut}
              disabled={scale <= MIN_ZOOM}
              aria-label="Zoom out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.zoomTrack}>
              <div
                className={styles.zoomFill}
                style={{
                  width: `${((scale - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * 100}%`,
                }}
              />
            </div>

            <button
              className={styles.zoomBtn}
              onClick={zoomIn}
              disabled={scale >= MAX_ZOOM}
              aria-label="Zoom in"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className={styles.zoomPercent}>{zoomPercent}%</span>
          </div>

          {/* Dots */}
          {!isZoomed && (
            <div className={styles.dots}>
              {images.map((img, i) => (
                <button
                  key={img.id}
                  className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
                  onClick={() => {
                    const diff = i - currentIndex;
                    if (diff > 0) for (let j = 0; j < diff; j++) handleNext();
                    else for (let j = 0; j < Math.abs(diff); j++) handlePrev();
                  }}
                  aria-label={`Go to award ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
}

export default AwardModal;
