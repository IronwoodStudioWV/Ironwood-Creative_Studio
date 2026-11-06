import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const TITLE = 'Portfolio — Joshua Mitchell | Ironwood Creative Studio';
const DESCRIPTION =
  'Brand identity portfolio of Joshua Mitchell, graphic design student at SNHU and founder of Ironwood Creative Studio. Featuring the Appalachian Timber Co. identity case study.';

export const metadata = {
  metadataBase: new URL('https://ironwoodcreativestudio.shop'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/portfolio',
    type: 'website',
    images: [
      {
        url: '/images/atc/final-board.png',
        width: 1536,
        height: 1024,
        alt: 'Appalachian Timber Co. final identity board',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/atc/final-board.png'],
  },
};

function Shot({ src, alt, width, height, caption, priority }) {
  return (
    <figure className={styles.shot}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${alt}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority={priority}
          style={{ width: '100%', height: 'auto' }}
        />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

const competitors = [
  { name: 'reSAWN TIMBER co.', feel: 'Modern · architectural', strong: 'Refined identity, appeal to architects.', gap: 'Little connection to place or family tradition.' },
  { name: 'Elmwood Reclaimed', feel: 'Rustic · residential', strong: 'Sustainability message, wide range.', gap: 'Product-focused; weak premium positioning.' },
  { name: 'Old World Timber', feel: 'Rustic · Americana', strong: 'Heritage story, authenticity.', gap: 'Leans traditional rather than contemporary.' },
  { name: 'Appalachian Woods', feel: 'Warm · premium', strong: 'Storytelling, luxury-focused.', gap: 'Reads as niche (reclaimed only).' },
];

const palette = [
  { name: 'Appalachian Forest', hex: '#264734' },
  { name: 'Ironwood Brown', hex: '#6A4A2F' },
  { name: 'Slate Charcoal', hex: '#2E3135' },
  { name: 'Mountain Cream', hex: '#F2ECE2' },
];

const otherWork = [
  {
    src: '/images/merritt-group.png',
    alt: 'Merritt Group monogram and wordmark in deep navy',
    width: 1536,
    height: 1024,
    title: 'Merritt Group',
    label: 'Student project · Logo',
    text: 'Monogram and wordmark: an interlocked M and G in a shield-like form, paired with a classic serif for a trusted, professional-services feel.',
  },
  {
    src: '/images/slick-ricks.png',
    alt: 'Slick Rick’s Oil retro poster with a dancing piston mascot',
    width: 1536,
    height: 1024,
    title: 'Slick Rick’s Oil',
    label: 'Concept · Poster campaign',
    text: 'A retro-poster campaign exploration: a dancing-piston mascot, a two-color palette of mustard on deep navy, a worn print texture, and punchy copy built to read at a glance.',
  },
  {
    src: '/images/blacksheep.png',
    alt: 'Blacksheep Restaurant Maids vintage sheep mascot logo',
    width: 1024,
    height: 1024,
    title: 'Blacksheep Restaurant Maids',
    label: 'Founder’s prior venture · 2019',
    text: 'Logo explorations for my first business (2019): a character-led mark that makes a cleaning service friendly and memorable.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <p className={styles.kicker}>Portfolio 2026</p>
            <h1>Joshua Mitchell</h1>
            <p className={styles.role}>Brand &amp; Graphic Designer · Founder, Ironwood Creative Studio</p>
            <p className={styles.lede}>
              Graphic design student at Southern New Hampshire University (BA,
              web design concentration; Honor Roll every term). I build brand
              identities that hold up on a truck door, a hard hat, a hang tag,
              and a website — not just on a presentation board.
            </p>
            <div className={styles.jump}>
              <a href="#appalachian-timber">Case study</a>
              <a href="#selected-work">Selected work</a>
              <a href="#process">How I work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section id="appalachian-timber" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.kicker}>Case study · Brand identity</p>
            <h2>Appalachian Timber Co.</h2>
            <p className={styles.note}>
              Student concept project · Repositioning a family-owned timber
              supplier (founded 1988) as a premium brand. Fictional client.
            </p>

            <div className={styles.three}>
              <div>
                <h3>The challenge</h3>
                <p>A 20-year-old identity with a hard-to-read logo, inconsistent materials, and an old website kept the company in the &ldquo;local lumber yard&rdquo; box, and out of sight of architects, designers, and luxury builders.</p>
              </div>
              <div>
                <h3>The strategy</h3>
                <p>Sit between industrial suppliers and luxury reclaimed-wood brands: premium craftsmanship rooted in Appalachian heritage, with the rugged character of timber stamps and mill marks.</p>
              </div>
              <div>
                <h3>The solution</h3>
                <p>A complete identity system: stamp-based primary logo, ATC timber-frame monogram, palette, type pairing, and applications from vehicles to hang tags.</p>
              </div>
            </div>

            {/* Research */}
            <div className={styles.block}>
              <p className={styles.step}>01 · Research</p>
              <h3 className={styles.blockTitle}>Two crowded camps, one open lane.</h3>
              <p className={styles.body}>
                Most timber brands are either industrial suppliers (inventory,
                pricing, specs) or luxury reclaimed-wood brands (architecture
                and design). I reviewed four competitors to find where
                Appalachian Timber Co. could stand apart.
              </p>
              <div className={styles.cards}>
                {competitors.map((c) => (
                  <div key={c.name} className={styles.card}>
                    <h4>{c.name}</h4>
                    <p className={styles.feel}>{c.feel}</p>
                    <p><b>Strong:</b> {c.strong}</p>
                    <p><b>Gap:</b> {c.gap}</p>
                  </div>
                ))}
              </div>
              <blockquote className={styles.quote}>
                Authentic, not corporate. Premium, not luxury-for-luxury&rsquo;s-sake.
                Heritage-driven, not outdated.
              </blockquote>
            </div>

            {/* Strategy */}
            <div className={styles.block}>
              <p className={styles.step}>02 · Strategy</p>
              <h3 className={styles.blockTitle}>Premium Appalachian wood craftsmanship for exceptional homes.</h3>
              <div className={styles.two}>
                <div>
                  <h4>Brand promise</h4>
                  <p className={styles.body}>Premium Appalachian wood products crafted for homes built to last generations.</p>
                  <h4>Audiences</h4>
                  <ul className={styles.list}>
                    <li><b>Luxury homeowners</b> (35–65) building or renovating custom homes</li>
                    <li><b>Architects &amp; designers</b> who specify premium, sustainable materials</li>
                    <li><b>Custom home builders</b> who need consistent quality and reliability</li>
                  </ul>
                </div>
                <div>
                  <h4>Palette</h4>
                  <div className={styles.swatches}>
                    {palette.map((c) => (
                      <div key={c.hex}>
                        <div className={styles.swatch} style={{ background: c.hex }} />
                        <p className={styles.swLabel}><b>{c.name}</b><br />{c.hex}</p>
                      </div>
                    ))}
                  </div>
                  <h4>Typography</h4>
                  <p className={styles.body}><b>Roboto Slab Bold</b> for headlines — a sturdy slab serif, a nod to historic American craftsmanship. <b>Montserrat Regular</b> for body — clean and legible across signage, print, and screens.</p>
                </div>
              </div>
            </div>

            {/* Sketches */}
            <div className={styles.block}>
              <p className={styles.step}>03 · Exploration</p>
              <h3 className={styles.blockTitle}>Start on paper, narrow with intent.</h3>
              <div className={styles.sketchRow}>
                <Shot
                  src="/images/atc/sketches.png"
                  alt="Twelve hand-drawn thumbnail sketches for Appalachian Timber Co."
                  width={1264}
                  height={1687}
                  caption="First pass: twelve thumbnail sketches, pen on paper."
                />
                <div>
                  <p className={styles.body}>
                    I filled a page with twelve thumbnails before touching a
                    computer: vintage lumber stamps, circle and hexagon seals, a
                    mountain-and-ring mark, and an &ldquo;A&rdquo; built from wood
                    grain. Stamps kept winning because they connect to how timber
                    has actually been marked and graded for generations.
                  </p>
                  <h4>Three directions carried forward</h4>
                  <ul className={styles.list}>
                    <li><b>A · Heritage Timber Stamp.</b> Mill marks and inspection stamps</li>
                    <li><b>B · Wood Grain Mountain.</b> Ridge lines formed by grain and tree rings</li>
                    <li><b>C · ATC Monogram.</b> A timber-frame letterform built like joinery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refinement */}
            <div className={styles.block}>
              <p className={styles.step}>04 · Refinement</p>
              <h3 className={styles.blockTitle}>Stronger forms, fewer ideas.</h3>
              <div className={styles.two}>
                <Shot src="/images/atc/round-1.png" alt="Round 1: eighteen logo concepts across three directions" width={1254} height={1254} caption="Round 1. Eighteen concepts across three directions." />
                <Shot src="/images/atc/round-2.png" alt="Round 2: refined logo concepts with favorites marked" width={1536} height={1024} caption="Round 2. Better hierarchy and balance; favorites marked (A4 hexagon mill mark, B3 grain mountain, C3 timber-frame A)." />
              </div>
              <Shot src="/images/atc/round-3.png" alt="Round 3 client presentation of the top three directions with applications" width={1536} height={1024} caption="Round 3 · Client presentation. Top three directions with variations and early applications: timber stamp, vehicle graphic, hard hat, mill signage, product tag, website concept, business card, apparel, and interior signage." />
            </div>

            {/* Final */}
            <div id="final-identity" className={styles.block}>
              <p className={styles.step}>05 · Final identity system</p>
              <h3 className={styles.blockTitle}>One system, everywhere it shows up.</h3>
              <Shot
                src="/images/atc/final-board.png"
                alt="Appalachian Timber Co. final identity board: logo system, monogram, clear space, palette, typography, brand elements, and applications"
                width={1536}
                height={1024}
                caption="Logo system (primary stamp and ATC monogram), clear space, palette, type, brand elements, and applications: shop sign, business card, work shirts, vehicle graphics, branding iron, and social avatar. Click to view full size."
              />
            </div>
          </div>
        </section>

        {/* Other work */}
        <section id="selected-work" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <p className={styles.kicker}>Selected work</p>
            <h2>More identity and illustration work</h2>
            <div className={styles.workGrid}>
              {otherWork.map((w) => (
                <article key={w.title} className={styles.workCard}>
                  <Shot src={w.src} alt={w.alt} width={w.width} height={w.height} />
                  <span className={styles.label}>{w.label}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </article>
              ))}
            </div>
            <p className={styles.range}>
              Range: I also design original characters and mascots, including my
              animated series. <Link href="/#creatures">See the Creatures →</Link>
            </p>
          </div>
        </section>

        {/* Process */}
        <section id="process" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.kicker}>How I work</p>
            <h2>Hand-sketched. AI-assisted. Human-finished.</h2>
            <div className={styles.two}>
              <div>
                <p className={styles.body}>
                  Strategy, research, sketching, direction selection, and
                  refinement are my own work. I use AI tools as part of my
                  process: some concept imagery and mockups in these case
                  studies were generated with AI tools, then art-directed,
                  selected, and refined by me.
                </p>
                <p className={styles.body}>
                  I&rsquo;m upfront about it because clients and teams deserve
                  to know how the work was made. Appalachian Timber Co. is a
                  fictional client; the brief and outcome are part of a student
                  concept project.
                </p>
              </div>
              <div>
                <h4>Tools</h4>
                <p className={styles.body}>Adobe Illustrator, Photoshop, and InDesign; AI image tools for exploration and mockups; hand sketching to start every project.</p>
                <h4>Values</h4>
                <p className={styles.body}>Strong · Honest · Creative · Hands-on · Reliable · Appalachian-rooted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${styles.section} ${styles.dark}`}>
          <div className={styles.container}>
            <h2>Let&rsquo;s build something that lasts.</h2>
            <div className={styles.contact}>
              <a href="mailto:hello@ironwoodcreativestudio.shop">hello@ironwoodcreativestudio.shop</a>
              <a href="tel:+16812820426">(681) 282-0426</a>
              <span>Clendenin, West Virginia</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
