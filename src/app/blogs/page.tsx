import Link from "next/link";
import Image from "next/image";
import Post01 from "./images/Post01.jpg";
import Post02 from "./images/Post02.jpg";
import Post03 from "./images/Post03.jpg";
import Post04 from "./images/Post04.png";
import styles from "./Blogs.module.css";

export default function Blogs() {
  return (
    <section>
      <div className={styles.ParentContainer}>
        <div className={styles.ChildContainer}>
          <h1>Blogs</h1>
        </div>
        <div className={styles.grid}>
          {post01()}
          {post02()}
          {post03()}
          {post04()}
        </div>
      </div>
    </section>
  );
}

function post01() {
  return (
    <div className={styles.Items}>
      <Image src={Post01} alt="img" width={500} height={300} />
      <h2>Introduction to Generative AI</h2>
      <Link href="/blogs/post01">
        <button className={styles.button}>Show Post</button>
      </Link>
    </div>
  );
}

function post02() {
  return (
    <div className={styles.Items}>
      <Image src={Post02} alt="img" width={500} height={300} />
      <h2>Generative Models</h2>
      <Link href="/blogs/post02">
        <button className={styles.button}>Show Post</button>
      </Link>
    </div>
  );
}

function post03() {
  return (
    <div className={styles.Items}>
      <Image src={Post03} alt="img" width={500} height={300} />
      <h2>Purpose:</h2>
      <Link href="/blogs/post03">
        <button className={styles.button}>Show Post</button>
      </Link>
    </div>
  );
}

function post04() {
  return (
    <div className={styles.Items}>
      <Image src={Post04} alt="img" width={500} height={300} />
      <h2>Examples:</h2>
      <Link href="/blogs/post04">
        <button className={styles.button}>Show Post</button>
      </Link>
    </div>
  );
}
