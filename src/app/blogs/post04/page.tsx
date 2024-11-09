
import styles from "./post04.module.css";

export default function Post04() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Examples:</h3>
      <p className={styles.content}>
        GANs, Variational Autoencoders (VAEs), and Diffusion Models are
        common types of generative models, each with different methods for
        generating new data.
      </p>
    </div>
  );
}
