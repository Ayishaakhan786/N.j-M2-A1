import Link from "next/link";
import styles from './Footer.module.css'; // Import the CSS module

export default function Footer() {
  return (
    <div className={styles['footer-container']}>
      <h4>
        <span>created by @AK Soft Tech</span>
      </h4>
    </div>
  );
}
