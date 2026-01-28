import styles from "./StarBall.module.scss";

function StarBall() {
  return (
    <div className={styles.starBallWrapper}>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <span className={styles.star} key={i} />
        ))}
    </div>
  );
}

export default StarBall;
