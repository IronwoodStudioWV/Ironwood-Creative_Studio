import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const TITLE = 'Apple of My Eye — Original Animated Series | Ironwood Creative Studio';
const DESCRIPTION =
  'Apple of My Eye is an original animated comedy about a rotten, dysfunctional family of fruit living in the back of the fridge. Watch the trailer and meet the cast.';

export const metadata = {
  metadataBase: new URL('https://ironwoodcreativestudio.shop'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/apple-of-my-eye' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/apple-of-my-eye',
    type: 'website',
    images: [
      {
        url: '/apple-of-my-eye/cast-banner.jpg',
        width: 1280,
        height: 720,
        alt: 'The cast of Apple of My Eye lined up under the title',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/apple-of-my-eye/cast-banner.jpg'],
  },
};

// Add the show's social links here and they appear in the "Follow the series" section.
// Example: { label: 'Instagram', href: 'https://www.instagram.com/your_handle' }
const socials = [];

const cast = [
  {
    name: 'Bad Apple',
    aka: 'Bart',
    role: 'The grumpy head of the family',
    accent: '#e63232',
    src: '/apple-of-my-eye/bad-apple.png',
    alt: 'Bad Apple, a chewed-down apple core with a permanent snarl, work boots and clenched fists',
    text: 'A rugged, chewed-down apple core with a permanent snarl, brown work boots, and a bad attitude. Bart thinks he runs the household. Real fruit holds its ground.',
  },
  {
    name: 'Honeycrisp',
    aka: 'Honey',
    role: 'Bart’s wife',
    accent: '#ff8a3d',
    src: '/apple-of-my-eye/honeycrisp.png',
    alt: 'Honeycrisp, a tired but polished apple in an apron holding a sponge',
    text: 'Polished, sweet, slightly high-strung, and trying to keep a home that is perpetually rotting at the seams. She is one citrus spray away from moving in with the condiments.',
  },
  {
    name: 'Bad Seed',
    aka: 'Bart’s oldest son',
    role: 'The spitfire',
    accent: '#8bc34a',
    src: '/apple-of-my-eye/bad-seed.png',
    alt: 'Bad Seed, a slimy mold-spotted seed in muddy white sneakers with one finger raised',
    text: 'Slimy, blotchy, mud-caked sneakers, and one finger perpetually raised to challenge authority. Cleanliness, he says, is for pasteurized smoothies.',
  },
  {
    name: 'Granny Smith',
    aka: 'Bart’s mother',
    role: 'She sees everything',
    accent: '#ff8fb8',
    src: '/apple-of-my-eye/granny-smith.png',
    alt: 'Granny Smith, a grandma in a floral robe and slippers whose whole head is a giant bloodshot eyeball in foam rollers',
    text: 'Floral robe, fuzzy slippers, a walker, and a head that is one giant bloodshot eyeball. Her pupil is locked in the exact silhouette of Bad Apple.',
  },
  {
    name: 'Pickle',
    aka: 'The family pet',
    role: 'A very good worm',
    accent: '#f2a6a0',
    src: '/apple-of-my-eye/pickle.png',
    alt: 'Pickle, a smiling garden worm on a twine leash',
    text: 'A thick, dopey garden worm on a leash, dragged everywhere by Bad Seed. Runs on pure cellar grit.',
  },
  {
    name: 'Pip',
    aka: 'Bad Seed’s little sister',
    role: 'The wild card',
    accent: '#ffd23f',
    src: '/apple-of-my-eye/pip.png',
    alt: 'Pip, a glossy seed covered in sprinkles holding a slingshot',
    text: 'A glossy seed with sprinkles, a slingshot, and a plan. She isn’t in the pilot, but she’s coming.',
    note: 'Not in the pilot',
  },
];

export default function AppleOfMyEyePage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        {/* Hero + trailer */}
        <section className={styles.hero} aria-labelledby="show-title">
          <p className={styles.kicker}>An original animated series by Ironwood Creative Studio</p>
          <h1 id="show-title" className={styles.title}>
            Apple of
            <br />
            My Eye
          </h1>
          <p className={styles.tagline}>
            <span className={styles.pill}>Pilot &middot; Coming soon</span>
            &ldquo;The Apple Doesn&rsquo;t Fall Far&rdquo;
          </p>

          <div className={styles.videoFrame}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="metadata"
              poster="/apple-of-my-eye/trailer-poster.jpg"
              aria-label="Apple of My Eye trailer"
            >
              <source src="/apple-of-my-eye/trailer.mp4" type="video/mp4" />
              Your browser can&rsquo;t play this video.{' '}
              <a href="/apple-of-my-eye/trailer.mp4">Download the trailer</a>.
            </video>
          </div>
        </section>

        {/* Pilot */}
        <section className={styles.pilot} aria-labelledby="pilot-heading">
          <div className={styles.pilotInner}>
            <p className={styles.sectionKicker}>The pilot</p>
            <h2 id="pilot-heading" className={styles.sectionTitle}>
              The Apple Doesn&rsquo;t Fall Far
            </h2>
            <p className={styles.pilotText}>
              Somewhere in the crisper drawer of a refrigerator, a rotten family keeps up appearances.
              Bart slouches on an egg-carton sofa, Bad Seed tracks moss across the floor with Pickle
              on a leash, and Honeycrisp frets about the crisper inspection and the dreaded citrus
              spray. Granny Smith watches over all of it, and she is not impressed.
            </p>
            <p className={styles.pilotText}>
              Then the drawer creaks, a ray of kitchen light cuts through the frosted glass, and a
              five-fingered shadow falls. The family does the only thing it can: it presents a
              rotten, united front.
            </p>
            <blockquote className={styles.quote}>
              <p>&ldquo;I see all. I see dirt. I see a disappointment.&rdquo;</p>
              <footer>Granny Smith</footer>
            </blockquote>
          </div>
        </section>

        {/* Cast */}
        <section className={styles.castSection} aria-labelledby="cast-heading">
          <div className={styles.container}>
            <p className={styles.sectionKicker}>The family</p>
            <h2 id="cast-heading" className={styles.sectionTitle}>
              Meet the cast
            </h2>
            <ul className={styles.castGrid}>
              {cast.map((c) => (
                <li key={c.name} className={styles.card} style={{ '--accent': c.accent }}>
                  <div className={styles.stage}>
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 320px"
                      style={{ objectFit: 'contain' }}
                    />
                    {c.note && <span className={styles.note}>{c.note}</span>}
                  </div>
                  <p className={styles.role}>{c.role}</p>
                  <h3 className={styles.name}>
                    {c.name} <span className={styles.aka}>{c.aka}</span>
                  </h3>
                  <p className={styles.blurb}>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Still */}
        <section className={styles.stillSection} aria-label="A still from the series">
          <figure className={styles.still}>
            <Image
              src="/apple-of-my-eye/scene-kitchen.jpg"
              alt="Bad Apple tugging on a rope that holds a moldy Bad Seed and Pickle the worm, while Pip fires a slingshot from the counter and a giant hand reaches in from above"
              width={1600}
              height={893}
              sizes="(max-width: 1100px) 94vw, 1100px"
              style={{ width: '100%', height: 'auto' }}
            />
            <figcaption>The giants are always reaching in. The family never goes quietly.</figcaption>
          </figure>
        </section>

        {/* Follow / CTA */}
        <section className={styles.cta} aria-labelledby="cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="cta-heading" className={styles.sectionTitle}>
              Follow the series
            </h2>
            <p className={styles.ctaText}>
              Trailers, character art, and behind-the-scenes work as the pilot comes together.
            </p>
            <div className={styles.buttons}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buttonPrimary}
                >
                  {s.label}
                </a>
              ))}
              <Link href="/#contact" className={socials.length ? styles.buttonGhost : styles.buttonPrimary}>
                Get in touch
              </Link>
              <Link href="/#creatures" className={styles.buttonGhost}>
                More Ironwood characters
              </Link>
            </div>
            <p className={styles.fine}>
              Apple of My Eye is created by Ironwood Creative Studio. Want a character or mascot for
              your own brand? <Link href="/#contact">Let&rsquo;s talk.</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
