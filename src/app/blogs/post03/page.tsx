
import styles from "./post03.module.css";

export default function Post03() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>The main purpose of these are:</h3>
      <p className={styles.content}>
        These models are designed to model complex data distributions (like
        images, text, or sounds) so they can generate data that looks like the
        training set but is not an exact copy.
      </p>
    </div>
  );
}
