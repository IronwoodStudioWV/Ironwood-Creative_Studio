import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    n: '01',
    title: 'Logo & Brand Identity',
    text: 'Marks and full identity systems built to work everywhere — from a business card to a storefront sign to the side of a truck.',
    href: '/portfolio#appalachian-timber',
    proof: 'See a full identity case study',
  },
  {
    n: '02',
    title: 'Brand Rebrands',
    text: 'Full identity refreshes for established businesses ready to look like what they have actually become.',
    href: '/portfolio#appalachian-timber',
    proof: 'See the Appalachian Timber refresh',
  },
  {
    n: '03',
    title: 'Character & Mascot Design',
    text: 'Original characters that give a business a face — where Ironwood got its start, from sketch to finished mark.',
    href: '/#creatures',
    proof: 'Meet the Creatures',
  },
  {
    n: '04',
    title: 'Vehicle Graphics',
    text: 'Truck-door graphics and wraps designed around the vehicle, not pasted onto it. Your truck becomes a billboard.',
    href: '/portfolio#final-identity',
    proof: 'See vehicle graphics in a case study',
  },
  {
    n: '05',
    title: 'Posters & Print',
    text: 'Posters, business cards, hang tags, sticker sheets — print collateral that keeps a brand consistent everywhere it shows up.',
    href: '/portfolio#selected-work',
    proof: 'See poster work',
  },
  {
    n: '06',
    title: 'Merch & Apparel',
    text: 'T-shirt, hoodie, and work-shirt designs built from your brand — wearable work that sells itself.',
    href: '/#creatures',
    proof: 'See the Bad Apple merch',
  },
  {
    n: '07',
    title: 'Web Design',
    text: 'Clean, fast websites that carry your brand online. This site was designed and built by Ironwood.',
  },
  {
    n: '08',
    title: 'AI-Assisted Design',
    text: 'Every project starts on paper. AI tools help explore and render ideas faster; every piece is then art-directed and refined by hand. You always know which parts were AI-assisted.',
    href: '/portfolio#process',
    proof: 'How I use AI',
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
              {s.href && (
                <Link href={s.href} className={styles.proof}>
                  {s.proof} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
