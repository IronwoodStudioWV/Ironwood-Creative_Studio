import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Ironwood Creative Studio - Forged in the Mountains. Made to Last.',
  description: 'Appalachian-rooted creative studio specializing in branding, web design, and visual identity systems.',
  keywords: 'branding, web design, creative studio, Appalachian, West Virginia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
