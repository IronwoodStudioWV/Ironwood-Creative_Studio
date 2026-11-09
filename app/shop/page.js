import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { collections } from './products';
import styles from './page.module.css';

const TITLE = 'Shop — Bad Apple & Ironwood Merch | Ironwood Creative Studio';
const DESCRIPTION =
  'Merch from Apple of My Eye (Bad Apple mugs, tees, hoodies, stickers, posters) and Ironwood Creative Studio apparel.';

export const metadata = {
  metadataBase: new URL('https://ironwoodcreativestudio.shop'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/shop' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/shop',
    type: 'website',
    images: [{ url: '/apple-of-my-eye/cast-banner.jpg', alt: 'Apple of My Eye cast' }],
  },
};

function mailto(name) {
  const subject = encodeURIComponent(`Notify me: ${name}`);
  return `mailto:hello@ironwoodcreativestudio.shop?subject=${subject}`;
}

function ProductCard({ p }) {
  const live = Boolean(p.buyUrl);
  return (
    <article className={`${styles.card} ${p.wide ? styles.cardWide : ''}`}>
      <div className={`${styles.art} ${p.wide ? styles.artWide : ''}`}>
        <span className={styles.badge}>{p.type}</span>
        <Image
          src={p.image}
          alt={p.alt}
          width={p.wide ? 800 : 500}
          height={p.wide ? 400 : 500}
          sizes="(max-width: 700px) 90vw, 320px"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
      <div className={styles.body}>
        <h3>{p.name}</h3>
        <p>{p.blurb}</p>
        <div className={styles.row}>
          {p.price ? <span className={styles.price}>{p.price}</span> : <span />}
          {live ? (
            <a className={styles.buy} href={p.buyUrl} target="_blank" rel="noopener noreferrer">
              Buy
            </a>
          ) : (
            <a className={styles.soon} href={mailto(p.name)}>
              Coming soon · Email me
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className={styles.container}>
            <p className={styles.kicker}>The shop</p>
            <h1>Merch</h1>
            <p className={styles.lede}>
              Two collections: characters from my animated series{' '}
              <Link href="/apple-of-my-eye">Apple of My Eye</Link> and apparel from
              Ironwood Creative Studio. Items are printed and shipped on demand by
              a print partner, so nothing sits in a garage.
            </p>
            <div className={styles.jump}>
              {collections.map((c) => (
                <a key={c.id} href={`#${c.id}`}>
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {collections.map((c) => (
          <section
            key={c.id}
            id={c.id}
            className={`${styles.collection} ${c.theme === 'apple' ? styles.apple : styles.ironwood}`}
          >
            <div className={styles.container}>
              <p className={styles.kicker}>{c.kicker}</p>
              <h2>{c.title}</h2>
              <p className={styles.blurb}>{c.blurb}</p>
              <div className={styles.grid}>
                {c.products.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
              {c.id === 'bad-apple' && (
                <p className={styles.note}>
                  Apple of My Eye is an adult animated comedy. Merch art is
                  kept clean, but the show is not for kids.
                </p>
              )}
            </div>
          </section>
        ))}

        <section className={styles.outro}>
          <div className={styles.container}>
            <h2>Want something custom?</h2>
            <p>
              Branded apparel, mugs, and stickers for your own business are part of
              what Ironwood does. <Link href="/#contact">Let&rsquo;s talk.</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
