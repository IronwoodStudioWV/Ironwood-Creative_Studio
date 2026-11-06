import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.kicker}>Who we are</p>
        <h2>Built with Appalachian craftsmanship</h2>
        <div className={styles.body}>
          <p>
            I&rsquo;m Josh Mitchell. I run Ironwood Creative Studio out of
            Clendenin, West Virginia, while studying graphic design (web design
            concentration) at Southern New Hampshire University.
          </p>
          <p>
            I&rsquo;m an honest, hard-working family man, and I&rsquo;ve been
            drawing since I could hold a pencil. Before design, I spent my
            working life in warehouses, on concrete and framing crews, in
            manufacturing, and running a restaurant cleaning business. Those
            are the people I design for now, so I build identities that hold
            up on a truck door, a hard hat, and a storefront, not just on a
            screen.
          </p>
          <p>
            My process starts on paper. I use AI tools to explore and render
            ideas faster, then art-direct and refine every piece by hand, and
            I&rsquo;m upfront about which parts were AI-assisted. Strong,
            honest work that&rsquo;s built to last, not just to launch.
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
