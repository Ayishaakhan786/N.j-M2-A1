
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <h1>AK Soft Tech</h1>
      <h2 className={styles.subheading}>Email Address</h2>
      <h3>
        <a href="mailto:ayeshakhan228276@gmail.com" className={styles.link}>
          ayeshakhan228276@gmail.com
        </a>
      </h3>
      <h2 className={styles.subheading}>GitHub Repository</h2>
      <h3>
        <a href="https://github.com/Ayishaakhan786" className={styles.link}>
          Ayishakhan786
        </a>
      </h3>
      <h2 className={styles.subheading}>LinkedIn</h2>
      <h3>
        <a
          href="https://www.linkedin.com/in/ayesha-khan-8103a7246/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BACltPS2BQTyWXxYwH4g0JA%3D%3D"
          className={styles.link}
        >
          Ayishakhan786
        </a>
      </h3>
      <h2 className={styles.subheading}>YouTube</h2>
      <h3>
        <a
          href="http://www.youtube.com/@Buggs_____________bunnyyy"
          className={styles.link}
        >
          http://www.youtube.com/@Buggs_____________bunnyyy
        </a>
      </h3>
    </div>
  );
}
