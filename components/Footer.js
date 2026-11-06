import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            src="/images/ironwood-logo-light.png"
            alt="Ironwood Creative Studio logo"
            width={72}
            height={72}
            style={{ objectFit: 'contain' }}
          />
          <div>
            <p className={styles.name}>Ironwood Creative Studio</p>
            <p className={styles.tag}>Forged in the Mountains. Made to Last.</p>
            <p className={styles.tag}>Hand-sketched. AI-assisted. Human-finished.</p>
          </div>
        </div>
        <p className={styles.copy}>
          &copy; 2026 Ironwood Creative Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
