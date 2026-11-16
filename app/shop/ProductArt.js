'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Product image with optional extra views (colors, front/back). A product with
// a `views` array gets small thumbnail buttons under the main image; without
// one it renders a single image exactly as before.
export default function ProductArt({ p }) {
  const views = p.views && p.views.length > 1 ? p.views : null;
  const [i, setI] = useState(0);
  const current = views ? views[i] : { image: p.image, alt: p.alt };
  const photo = Boolean(p.photo);
  const w = p.wide ? 800 : 500;
  const h = p.wide ? 450 : 500;

  return (
    <div className={`${styles.art} ${p.wide ? styles.artWide : ''} ${photo ? styles.artPhoto : ''}`}>
      <span className={styles.badge}>{p.type}</span>
      <Image
        src={current.image}
        alt={current.alt}
        width={w}
        height={h}
        sizes="(max-width: 700px) 90vw, 320px"
        style={{
          objectFit: photo ? 'cover' : 'contain',
          objectPosition: photo ? '50% 42%' : 'center',
          width: '100%',
          height: '100%',
        }}
      />
      {views && (
        <div className={styles.views} role="group" aria-label={`${p.name} views`}>
          {views.map((v, idx) => (
            <button
              key={v.image}
              type="button"
              className={`${styles.view} ${idx === i ? styles.viewActive : ''}`}
              onClick={() => setI(idx)}
              aria-label={`Show ${v.label}`}
              aria-pressed={idx === i}
              title={v.label}
            >
              <Image src={v.image} alt="" width={44} height={44} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
