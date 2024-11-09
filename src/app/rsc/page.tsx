import styles from "./rsc.module.css";

export default function Resources() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Resources</h1>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Documentation and Guides:</h1>
        <ul className={styles.ulList}>
          <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
          <li><a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
          <li><a href="https://www.tensorflow.org/">TensorFlow Documentation</a></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Tutorials and Courses:</h1>
        <ul className={styles.ulList}>
          <li><a href="https://www.coursera.org/">Coursera - AI Courses</a></li>
          <li><a href="https://www.smashingmagazine.com/">Smashing Magazine</a></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>Tools and Libraries:</h1>
        <ul className={styles.ulList}>
          <li><a href="https://runwayml.com/">RunwayML</a></li>
          <li><a href="https://deepai.org/">DeepAI Tools</a></li>
        </ul>
      </section>
    </div>
  );
}
