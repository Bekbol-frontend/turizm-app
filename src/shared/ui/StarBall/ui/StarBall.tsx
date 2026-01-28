import styles from "./StarBall.module.scss";

interface IProps {
  rating: number;
}

function StarBall({ rating = 0 }: IProps) {
  return (
    <div className={styles.starBallWrapper}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          const starValue = i + 1;

          let starClass = styles.star;

          if (rating >= starValue) {
            starClass += " " + styles.full;
          } else if (rating >= starValue - 0.5) {
            starClass += " " + styles.half;
          }

          return <span className={starClass} key={i} />;
        })}
    </div>
  );
}

export default StarBall;
