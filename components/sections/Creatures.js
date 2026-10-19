import Image from 'next/image';
import styles from './Creatures.module.css';

const creatures = [
  {
    src: '/images/bad-apple-origin.jpg',
    alt: 'Bad Apple #1 — the original rotting apple core study, before the character',
    name: 'Bad Apple #1 — where it started',
    text: 'Before the gloves, before the attitude: a rotting apple core, studied and rendered. Every character starts as an observation. This is the observation Bad Apple grew out of.',
    link: '/bad-apple-origin.pdf',
    linkLabel: 'See the first sketch (PDF)',
  },
  {
    src: '/images/bad-apple.jpg',
    alt: 'Bad Apple — a grumpy half-eaten apple core character in boxing gloves',
    name: 'Bad Apple',
    text: 'A bruised apple core in boxing gloves, ready for a fight. Started as a doodle on my wife Tessie\u2019s leg early in our relationship — she kept it, and I kept drawing.',
  },
  {
    src: '/images/bad-seed.jpg',
    alt: 'Bad Seed — a smug rotten pear character shown in rendered and line-art styles side by side',
    name: 'Bad Seed',
    text: 'My son heard his mom was Bad Apple and figured that made him a bad seed. I heard him say it and had the character drawn in under ten minutes — shown here in both rendered and line-art styles.',
  },
  {
    src: '/images/dusty.jpg',
    alt: 'Dusty — a friendly blue anthropomorphic vacuum cleaner character',
    name: 'Dusty',
    text: 'A cheerful vacuum with a big smile. Proof a mascot can make even a household chore look fun — built for product branding and family-friendly businesses.',
  },
  {
    src: '/images/warhead.png',
    alt: 'Warhead — an angry militaristic bomb character riding itself, cigar in mouth',
    name: 'Warhead',
    text: 'A flying bomb riding itself like a vehicle, cigar lit. Rat-rod and lowbrow style for brands that want attitude — skate shops, taprooms, garages.',
  },
  {
    src: '/images/bad-apple-tee.png',
    alt: 'Bad Apple graphic t-shirt mockup',
    name: 'Bad Apple, on merch',
    text: 'The character line lives on shirts, stickers, and prints. Ironwood designs the face — then puts it on everything.',
  },
];

export default function Creatures() {
  return (
    <section id="creatures" className={styles.creatures}>
      <div className={styles.container}>
        <p className={styles.kicker}>Character work</p>
        <h2>The Creatures</h2>
        <p className={styles.lede}>
          Original characters and mascots — the work Ironwood is known for.
          Every business deserves a face. These are ours.
        </p>
        <div className={styles.grid}>
          {creatures.map((c) => (
            <article key={c.name} className={styles.card}>
              <div className={styles.frame}>
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={600}
                  height={600}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>{c.name}</h3>
              <p>{c.text}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className={styles.originLink}>
                  {c.linkLabel}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
