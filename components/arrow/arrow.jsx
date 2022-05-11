import styles from "./arrow.module.scss"

const Arrow = () => {
  return (
    <div className={styles.arrow}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Arrow;
