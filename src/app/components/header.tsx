import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles['header-container']}>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/rsc">Resources</Link>
        </li>
        <li>
          <Link href="/contact">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

