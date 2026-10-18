import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.kicker}>Who we are</p>
        <h2>Built with Appalachian craftsmanship</h2>
        <div className={styles.body}>
          <p>
            I&rsquo;m Josh Mitchell. I run Ironwood Creative Studio out of the
            mountains of West Virginia.
          </p>
          <p>
            I&rsquo;m an honest, hard-working family man. I enjoy art enough
            that it seems like a passion — drawing was my main source of
            entertainment as a child, and as I grew up it seemed like the
            best fit for me.
          </p>
          <p>
            Ironwood builds authentic brands through thoughtful design,
            craftsmanship, and purpose-driven storytelling — strong, honest
            work that&rsquo;s built to last, not just to launch.
          </p>
        </div>
        <ul className={styles.values}>
          <li>Strong</li>
          <li>Honest</li>
          <li>Creative</li>
          <li>Hands-On</li>
          <li>Reliable</li>
          <li>Appalachian-Rooted</li>
        </ul>
      </div>
    </section>
  );
}
