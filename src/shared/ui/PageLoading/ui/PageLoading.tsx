import styles from "./PageLoading.module.scss";

function PageLoading() {
  return (
    <div className={styles.pageLoading}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  );
}

export default PageLoading;
