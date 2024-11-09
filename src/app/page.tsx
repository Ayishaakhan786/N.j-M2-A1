import Image from "next/image";

import pic1 from "./main-img/Generative_AI_(2).png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Generative AI</h1>
        <h3>It's Time to see the world with the eyes of AI</h3>
      </div>
      <div className={styles.imageContainer}>
        <Image src={pic1} alt="Generative AI" width={900} height={900} />
      </div>
    </div>
  );
}
