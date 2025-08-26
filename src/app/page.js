import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Link href="/cryptid">Go to Cryptid</Link>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
