import Link from "next/link";
import styles from "./post02.module.css";

export default function Post02() {
  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>Definition:</h5>
      <p className={styles.content}>
        Generative models are a type of machine learning model that can
        generate new data instances similar to the training data they were
        trained on. Generative models learn the underlying distribution of the
        data and can then create new, realistic examples.
      </p>
    </div>
  );
}
