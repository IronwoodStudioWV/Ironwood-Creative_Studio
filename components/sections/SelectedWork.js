import Image from 'next/image';
import Link from 'next/link';
import styles from './SelectedWork.module.css';

const pieces = [
  {
    src: '/images/atc/final-board.png',
    alt: 'Appalachian Timber Co. final identity board: stamp logo, ATC monogram, palette, typography, and applications',
    title: 'Appalachian Timber Co.',
    label: 'Case study · Brand identity',
    text: 'A full identity system for a family-owned timber supplier: research, hand sketches, three refinement rounds, and a final system with logo, monogram, palette, type, and applications from shop signs to vehicle graphics.',
    href: '/portfolio#appalachian-timber',
    cta: 'Read the case study →',
  },
  {
    src: '/images/merritt-group.png',
    alt: 'Merritt Group — student logo project, interlocking MG monogram',
    title: 'Merritt Group',
    label: 'Student project · Logo',
    text: 'A minimalist MG monogram in deep navy — interlocking letterforms with wide-set serif type. Quiet, trustworthy corporate work.',
    href: '/portfolio#selected-work',
    cta: 'See more →',
  },
  {
    src: '/images/slick-ricks.png',
    alt: 'Slick Rick’s Oil — retro poster with a dancing piston mascot in mustard on navy',
    title: 'Slick Rick’s Oil',
    label: 'Concept · Poster campaign',
    text: 'A retro-poster campaign: a dancing-piston mascot, a two-color mustard-on-navy palette, worn print texture, and copy built to read at a glance.',
    href: '/portfolio#selected-work',
    cta: 'See more →',
  },
  {
    src: '/images/blacksheep.png',
    alt: 'Blacksheep Restaurant Maids — vintage sheep mascot logo from the founder’s prior venture',
    title: 'Blacksheep',
    label: 'Founder’s prior venture · 2019',
    text: 'My first business, started in 2019. It didn’t succeed — but the vintage mascot work taught me more about branding than anything since. Failure counts as experience.',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className={styles.selected}>
      <div className={styles.container}>
        <p className={styles.kicker}>Selected work</p>
        <h2>Brand identity, built the way client work gets built</h2>
        <p className={styles.lede}>
          Student projects, concepts, and a first venture. Labeled for what
          each one is — no fiction here.
        </p>
        <div className={styles.grid}>
          {pieces.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.frame}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 900px) 100vw, 540px"
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
              <span className={styles.label}>{p.label}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {p.href && (
                <Link href={p.href} className={styles.more}>
                  {p.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
        <Link href="/portfolio" className={styles.allWork}>
          View the full portfolio →
        </Link>
      </div>
    </section>
  );
}
