import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.kicker}>Get in touch</p>
        <h2>Let&rsquo;s build something that lasts</h2>
        <p className={styles.lede}>
          Tell me a bit about your business and what you&rsquo;re looking
          for — I&rsquo;ll get back to you personally. Email is preferred.
        </p>
        <div className={styles.details}>
          <a href="mailto:hello@ironwoodcreativestudio.shop">
            hello@ironwoodcreativestudio.shop
          </a>
          <a href="tel:+16812820426">(681) 282-0426</a>
          <span>West Virginia, USA</span>
        </div>
      </div>
    </section>
  );
}
