import styles from './Services.module.css';

const services = [
  {
    n: '01',
    title: 'Logo Design',
    text: 'Marks built to work everywhere — from a business card to a storefront sign to the side of a truck.',
  },
  {
    n: '02',
    title: 'Character & Mascot Design',
    text: 'Original characters that give a business a face. The work Ironwood is known for — from sketch to finished mark.',
  },
  {
    n: '03',
    title: 'Vehicle Wraps',
    text: 'Full and partial wraps designed around the vehicle, not pasted onto it. Your truck becomes a billboard.',
  },
  {
    n: '04',
    title: 'Posters & Print',
    text: 'Posters, business cards, hang tags, sticker sheets — print collateral that keeps a brand consistent everywhere it shows up.',
  },
  {
    n: '05',
    title: 'Merch & Apparel',
    text: 'T-shirt, hoodie, and merch designs built from your brand — wearable work that sells itself.',
  },
  {
    n: '06',
    title: 'Brand Rebrands',
    text: 'Full identity refreshes for established businesses ready to look like what they have actually become.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <p className={styles.kicker}>What we do</p>
        <h2>Services</h2>
        <p className={styles.lede}>
          Full-service creative support, from first sketch to final launch.
        </p>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.n} className={styles.card}>
              <span className={styles.num}>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
