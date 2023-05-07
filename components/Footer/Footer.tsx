import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Hill Charts are an original idea of Basecamp, learn more about how they work here.</p>
      <p>Built with Next.js and Framer Motion · Deployed with Vercel</p>
    </footer>
  )
};