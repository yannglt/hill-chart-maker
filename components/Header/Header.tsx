import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hill Chart Maker</h1>
      <div className={styles.creator}>Made by <Link href="https://twitter.com/yannglt" target="_blank">@yannglt</Link></div>
    </header>
  )
};