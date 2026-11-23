import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const TITLE = 'Portfolio — Joshua Mitchell | Ironwood Creative Studio';
const DESCRIPTION =
  'Brand identity portfolio of Joshua Mitchell, graphic design student at SNHU and founder of Ironwood Creative Studio. Featuring the Appalachian Timber Co. and Redtail Outfitters identity case studies.';

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
        url: '/images/atc/final-board-og.jpg',
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
    images: ['/images/atc/final-board-og.jpg'],
  },
};

function Shot({ src, alt, width, height, caption, priority, maxWidth }) {
  return (
    <figure className={styles.shot} style={maxWidth ? { maxWidth } : undefined}>
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

const redtailPalette = [
  { name: 'Shoal Aqua', hex: '#5CB3AC', cmyk: '62 · 11 · 34 · 0' },
  { name: 'Canyon Rust', hex: '#C85A28', cmyk: '16 · 76 · 93 · 4' },
  { name: 'Slate Stone', hex: '#3B4346', cmyk: '72 · 60 · 56 · 44' },
  { name: 'Basecamp Cream', hex: '#F4EFE4', cmyk: '4 · 5 · 10 · 0' },
];

const redtailPrint = [
  { title: 'Trailhead signage & river conditions board', spec: 'Two 36″ × 48″ panels, aluminum composite with matte UV laminate, timber-framed. Swappable gauge, flow, water-temp and status slots; safety rules; route and check-in panel with a New River Gorge map card.' },
  { title: 'Basecamp rack card & pocket river guide', spec: '4″ × 9″ two-sided rack card on 14–16 pt matte cover. Tri-fold waterproof river guide on tear-resistant synthetic stock with a topographic put-in / take-out spread.' },
  { title: 'Rental check-out tag & gear inspection card', spec: '3.5″ × 7″ die-cut synthetic tag with reinforced grommet (hull, PFD, paddle checks). 6″ × 4″ shop card: pass, repair, out of service.' },
  { title: 'Guest check-in & liability waiver', spec: '8.5″ × 11″ on uncoated cream 70 lb stock to cut sun glare on clipboards. Participant details, safety acknowledgments, release text at 8.5–9 pt, signature and emergency contact.' },
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
    src: '/apple-of-my-eye/cast-banner.jpg',
    alt: 'The Apple of My Eye cast: a family of rotting fruit and vegetables',
    width: 1280,
    height: 720,
    title: 'Apple of My Eye',
    label: 'Original IP · Animated series · 2026',
    text: 'An adult dark-comedy cartoon I created, written, and art-directed: a dysfunctional family living in a refrigerator crisper drawer. I developed the cast, voices, and world, released the pilot on this site, and am building the series. Character art was developed with AI tools under my art direction.',
  },
  {
    src: '/images/bad-apple.jpg',
    alt: 'Bad Apple, a gnawed apple core in boxing gloves',
    width: 1371,
    height: 1600,
    title: 'Bad Apple (Bart)',
    label: 'Character design',
    text: 'The lead of the series: a gnawed-down apple core with a permanent snarl. He started as a doodle and grew into a full character with a model sheet, voice, and a world to live in.',
  },
  {
    src: '/images/bad-seed.jpg',
    alt: 'Bad Seed shown in rendered and line-art styles side by side',
    width: 1600,
    height: 705,
    title: 'Bad Seed',
    label: 'Character design',
    text: 'Bad Apple’s spitfire oldest son, shown in rendered and line-art treatments. The line-art version is built for merch and one-color print.',
  },
  {
    src: '/images/bad-apple-tee.png',
    alt: '#1 Bad Apple typographic t-shirt design',
    width: 3213,
    height: 3782,
    title: 'Bad Apple Merch',
    label: 'Apparel & product graphics',
    text: 'Typographic and character graphics for tees, mugs, and stickers. Take a look at the shop.',
  },
  {
    src: '/images/dusty.jpg',
    alt: 'Dusty, a friendly blue vacuum cleaner mascot',
    width: 1408,
    height: 768,
    title: 'Dusty',
    label: 'Concept · Mascot',
    text: 'A cheerful vacuum mascot built for product branding and family-friendly businesses.',
  },
  {
    src: '/images/warhead.png',
    alt: 'Warhead, a bomb character riding itself with a cigar in its mouth',
    width: 1408,
    height: 768,
    title: 'Warhead',
    label: 'Concept · Mascot',
    text: 'Rat-rod and lowbrow attitude for brands like skate shops, taprooms, and garages.',
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
              <a href="#appalachian-timber">Appalachian Timber Co.</a>
              <a href="#redtail-outfitters">Redtail Outfitters</a>
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
                  <h4>Tagline</h4>
                  <p className={styles.body}>Rooted in Craft. Built for Generations.</p>
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
                src="/images/atc/final-board-2026.png"
                alt="Appalachian Timber Co. final identity board: logo system, monogram, clear space, palette, typography, brand elements, and applications"
                width={3072}
                height={2048}
                caption="Logo system (primary stamp and ATC monogram), clear space, palette, type, brand elements, and applications: shop sign, business card, work shirts, vehicle graphics, branding iron, and social avatar. Click to view full size."
              />
            </div>
          </div>
        </section>

        {/* Case study 2 */}
        <section id="redtail-outfitters" className={`${styles.section} ${styles.divided}`}>
          <div className={styles.container}>
            <p className={styles.kicker}>Case study · Brand identity &amp; print collateral</p>
            <h2>Redtail Outfitters</h2>
            <p className={styles.note}>
              Student concept project · A guided whitewater, fishing, and
              kayak-rental outfitter on West Virginia&rsquo;s New River and Elk
              corridor (est. 2009). Fictional client.
            </p>

            <div className={styles.three}>
              <div>
                <h3>The brief</h3>
                <p>An identity that works as hard as the guides: on a trailhead sign in the rain, a tag clipped to a rental paddle, and a waiver on a sun-bleached clipboard.</p>
              </div>
              <div>
                <h3>The direction</h3>
                <p>Expert-led. River-born. Appalachian proud. A heritage badge with a red-tailed hawk over river current, a condensed headline face, and a palette pulled from the water, the canyon walls, and the slate.</p>
              </div>
              <div>
                <h3>The deliverables</h3>
                <p>Logo system, locked palette and type, and four print suites: trailhead signage, rack card and river guide, rental tags and inspection cards, and a check-in waiver.</p>
              </div>
            </div>

            <div className={styles.block}>
              <p className={styles.step}>01 · Logo exploration</p>
              <h3 className={styles.blockTitle}>One badge to lead, a family to support it.</h3>
              <Shot
                src="/images/redtail/logo-system.jpg"
                alt="Redtail Outfitters logo system board: circular hawk badge, hawk-and-mountain secondary mark, color variations, tagline lockup, shield, wordmark, feather mark, clear space and minimum size"
                width={1024}
                height={572}
                caption="Primary badge, hawk-and-mountain secondary mark, one-color and reversed variations, tagline lockup, exploration marks, a 1× clear-space rule, and a 1.0″ minimum size."
              />
            </div>

            <div className={styles.block}>
              <p className={styles.step}>02 · Final badge</p>
              <h3 className={styles.blockTitle}>Built to sit on dark or light.</h3>
              <div className={styles.two}>
                <Shot src="/images/redtail/badge-slate.png" alt="Redtail Outfitters final badge in cream and rust on Slate Stone" width={1024} height={1024} maxWidth={400} caption="Primary: Basecamp Cream and Canyon Rust on Slate Stone." />
                <Shot src="/images/redtail/badge-aqua.png" alt="Redtail Outfitters final badge in slate and rust on Shoal Aqua" width={1024} height={1024} maxWidth={400} caption="Light version: Slate Stone and Canyon Rust on Shoal Aqua." />
              </div>
              <p className={styles.body}>
                The final badge simplifies the illustrated hawk to a flat
                silhouette with a rust tail, so it holds up at small sizes, in
                one-color print, and as a stamp or embroidery. An earlier round
                ran it in a dark green that wasn&rsquo;t in the palette; I brought
                it back to the locked colors.
              </p>
            </div>

            <div className={styles.block}>
              <p className={styles.step}>03 · Color &amp; type</p>
              <h3 className={styles.blockTitle}>Four aquas tested, one locked.</h3>
              <Shot
                src="/images/redtail/palette-exploration.jpg"
                alt="Palette exploration: River Mist, Shoal Aqua, Appalachian Fog, and Headwater Teal, each paired with rust, slate, and cream"
                width={1024}
                height={572}
                caption="River Mist, Shoal Aqua, Appalachian Fog, and Headwater Teal, tested against the same rust, slate, and cream. Shoal Aqua read brightest without losing the river."
              />
              <div className={styles.two}>
                <div>
                  <h4>Locked palette</h4>
                  <div className={styles.swatches}>
                    {redtailPalette.map((c) => (
                      <div key={c.hex}>
                        <div className={styles.swatch} style={{ background: c.hex }} />
                        <p className={styles.swLabel}><b>{c.name}</b><br />{c.hex}<br />CMYK {c.cmyk}</p>
                      </div>
                    ))}
                  </div>
                  <h4>Typography</h4>
                  <p className={styles.body}><b>Bebas Neue</b> for headlines: all caps, with the presence a sign board needs. <b>Barlow SemiBold</b> for body: legible on safety checklists, maps, and legal forms.</p>
                </div>
                <div>
                  <h4>Contrast rule</h4>
                  <ul className={styles.list}>
                    <li>No small cream or white text directly on Shoal Aqua; it washes out in daylight.</li>
                    <li>Shoal Aqua backgrounds always pair with Slate Stone type, outlines, and badges.</li>
                    <li>Basecamp Cream type is reserved for solid Slate Stone or Canyon Rust blocks.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <p className={styles.step}>04 · Print collateral</p>
              <h3 className={styles.blockTitle}>Designed for wet hands and bright sun.</h3>
              <Shot
                src="/images/redtail/gear-tag-inspection-card.jpg"
                alt="Redtail rental check-out tag with hull, PFD, and paddle checkboxes, and a gear inspection card with pass, repair, and out-of-service boxes"
                width={1024}
                height={572}
                caption="Rental check-out tag and gear inspection card."
              />
              <div className={`${styles.cards} ${styles.cardsWide}`}>
                {redtailPrint.map((p) => (
                  <div key={p.title} className={styles.card}>
                    <h4>{p.title}</h4>
                    <p>{p.spec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.block}>
              <p className={styles.step}>05 · Applications</p>
              <h3 className={styles.blockTitle}>Out in the world.</h3>
              <Shot
                src="/images/redtail/applications.jpg"
                alt="Redtail mockups: basecamp sign, rack card, guide shirt, vehicle graphics, gear tag, and pocket river guide"
                width={1024}
                height={101}
                maxWidth={1024}
                caption="Basecamp sign · Rack card · Guide shirt · Vehicle graphics · Gear tag · Pocket river guide."
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
              animated series. <Link href="/apple-of-my-eye">Watch the pilot →</Link>{' '}
              <Link href="/shop">Shop the merch →</Link>
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
                  to know how the work was made. Appalachian Timber Co. and
                  Redtail Outfitters are fictional clients; the briefs and
                  outcomes are part of student concept projects.
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
