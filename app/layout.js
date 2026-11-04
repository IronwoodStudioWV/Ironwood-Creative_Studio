import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const SITE = 'https://ironwoodcreativestudio.shop';

export const metadata = {
  metadataBase: new URL(SITE),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ironwood Creative Studio',
    description: 'Appalachian-rooted creative studio specializing in branding, web design, and visual identity systems.',
    url: '/',
    siteName: 'Ironwood Creative Studio',
    type: 'website',
    images: [{ url: '/images/facebook-banner.png', width: 1200, height: 628, alt: 'Ironwood Creative Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ironwood Creative Studio',
    description: 'Branding, web design, and visual identity systems, forged in the mountains.',
    images: ['/images/facebook-banner.png'],
  },
  title: 'Ironwood Creative Studio - Forged in the Mountains. Made to Last.',
  description: 'Appalachian-rooted creative studio specializing in branding, web design, and visual identity systems.',
  keywords: 'branding, web design, creative studio, Appalachian, West Virginia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Ironwood Creative Studio',
              url: SITE,
              logo: SITE + '/images/ironwood-logo.png',
              email: 'hello@ironwoodcreativestudio.shop',
              telephone: '+16812820426',
              areaServed: 'US',
              address: { '@type': 'PostalAddress', addressRegion: 'WV', addressCountry: 'US' },
              sameAs: ['https://www.instagram.com/ironwood_creative_studio'],
            }),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
