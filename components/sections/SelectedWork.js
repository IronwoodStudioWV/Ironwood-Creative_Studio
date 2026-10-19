import Image from 'next/image';
import styles from './SelectedWork.module.css';

const pieces = [
  {
    src: '/images/timber-concept.png',
    alt: 'Appalachian Timber Co. — student brand identity project artwork',
    title: 'Appalachian Timber Co.',
    label: 'Student project',
    text: 'A full branding exercise built for experience: project brief, competitor analysis, mood boards, brand themes, and sketches through to a finished identity. Done as a school project because it was the fastest way to learn how real brand work gets made.',
  },
  {
    src: '/images/merritt-group.png',
    alt: 'Merritt Group — student logo project, interlocking MG monogram',
    title: 'Merritt Group',
    label: 'Student project',
    text: 'A minimalist MG monogram in deep navy — interlocking letterforms with wide-set serif type. Proof the studio can do quiet corporate work as well as loud characters.',
  },
  {
    src: '/images/blacksheep.png',
    alt: 'Blacksheep Restaurant Maids — vintage sheep mascot logo from the founder\u2019s prior venture',
    title: 'Blacksheep',
    label: 'Founder\u2019s prior venture · 2019',
    text: 'My first business, started in 2019. It didn\u2019t succeed — but the vintage mascot work taught me more about branding than anything since. Failure counts as experience.',
  },
];

export default function SelectedWork() {
  return (
    <section id="selected" className={styles.selected}>
      <div className={styles.container}>
        <p className={styles.kicker}>Selected work</p>
        <h2>From the drawing board</h2>
        <p className={styles.lede}>
          Student projects, a first venture, and the work that taught me the
          trade. Labeled for what each one is — no fiction here.
        </p>
        <div className={styles.grid}>
          {pieces.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.frame}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={450}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className={styles.label}>{p.label}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
