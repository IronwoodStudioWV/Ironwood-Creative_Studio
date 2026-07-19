import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bannerBackground}>
        <Image
          src="/images/facebook-banner.png"
          alt="Ironwood Creative Studio Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={85}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Forged in the Mountains</h1>
          <h2>Made to Last</h2>
          <p>Appalachian-rooted branding, web design, and creative solutions built with craftsmanship and purpose.</p>
          <button className={styles.cta}>
            <a href="#contact">Start Your Project</a>
          </button>
        </div>
      </div>
    </section>
  );
}
