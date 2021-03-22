import styles from "./styles.module.scss";
const LoadingSpinner = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default LoadingSpinner;
