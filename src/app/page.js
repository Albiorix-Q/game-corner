import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <a href="/cryptid">Go to Cryptid</a>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
