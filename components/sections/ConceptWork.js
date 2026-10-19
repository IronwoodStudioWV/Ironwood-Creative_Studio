import Image from 'next/image';
import styles from './ConceptWork.module.css';

const concepts = [
  {
    title: 'Appalachian Timber Co.',
    tags: 'Brand Identity · Logo System · Visual Guidelines',
    text: 'A complete brand refresh concept for a family-owned timber company — repositioning a commodity lumber supplier as a premium partner for architects, luxury homeowners, and custom builders. Identity built around timber-frame joinery and mountain heritage.',
    img: '/images/timber-concept.png',
    imgAlt: 'Appalachian Timber Co. brand identity concept artwork',
    extraImg: '/images/timber-sketches.png',
    extraAlt: 'Early sketches exploring the Appalachian Timber Co. identity',
  },
  {
    title: 'Redtail Outfitters',
    tags: 'Brand Identity · Logo System · Visual Guidelines',
    text: 'A full brand identity concept for a river-guide-founded whitewater outfitter — from budget rental shack to premium, expert-led adventure brand. Identity built around a hawk-and-rapids badge mark and trail-ready gear branding.',
  },
  {
    title: 'Switchback Trail Co.',
    tags: 'Brand Identity · Logo System · Visual Guidelines',
    text: 'A full brand identity concept for a small-batch, trail-sewn apparel maker — from a garage-brand look to a heritage-grade outdoor gear company. Identity built around the Appalachian Trail\u2019s own double-blaze mark.',
  },
  {
    title: 'Furnace Ridge Brewing Co.',
    tags: 'Brand Identity · Logo System · Visual Guidelines',
    text: 'A full brand identity concept for a homebrew-turned-taproom craft brewery — from generic clip-art branding to a distribution-ready craft beer brand rooted in Appalachia\u2019s iron-furnace heritage.',
  },
];

export default function ConceptWork() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <p className={styles.kicker}>Portfolio</p>
        <h2>Concept Work</h2>
        <p className={styles.lede}>
          Speculative brand identities — personal projects exploring
          Appalachian business branding. Each one is a full identity
          system, built the way client work gets built.
        </p>
        <div className={styles.grid}>
          {concepts.map((c) => (
            <article key={c.title} className={styles.card}>
              <span className={styles.badge}>Concept · Speculative identity</span>
              <h3>{c.title}</h3>
              <p className={styles.tags}>{c.tags}</p>
              <p>{c.text}</p>
              {c.img && (
                <div className={styles.shots}>
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    width={800}
                    height={500}
                    style={{ objectFit: 'contain' }}
                  />
                  {c.extraImg && (
                    <Image
                      src={c.extraImg}
                      alt={c.extraAlt}
                      width={800}
                      height={500}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
