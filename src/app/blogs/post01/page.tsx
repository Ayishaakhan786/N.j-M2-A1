import Link from "next/link";
import styles from "./post01.module.css";

export default function Post01() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>What is Generative AI?</h3>
      <p className={styles.content}>
        Generative AI refers to models that can create new content, such as
        images, text, or audio, based on patterns they learn from existing data.
        These models are trained on large datasets to recognize patterns,
        structures, and relationships within the data, which they can then use
        to generate new, original outputs that resemble the data they were
        trained on.
      </p>
    </div>
  );
}

