"use client";

import styles from "./Empty.module.scss";

function Empty() {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="50" fill="#F3F4F6" />
          <path
            d="M45 50C45 47.2386 47.2386 45 50 45H70C72.7614 45 75 47.2386 75 50V70C75 72.7614 72.7614 75 70 75H50C47.2386 75 45 72.7614 45 70V50Z"
            fill="#D1D5DB"
          />
          <path
            d="M50 55H70M50 62H70M50 69H62"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="85" cy="85" r="8" fill="#9CA3AF" />
          <line
            x1="90"
            y1="90"
            x2="100"
            y2="100"
            stroke="#9CA3AF"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h3 className={styles.title}>Hech narsa topilmadi</h3>

      <p className={styles.description}>
        Filter sozlamalarini ozgartirib koring
      </p>
    </div>
  );
}

export default Empty;
