import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ironwood Creative Studio - Forged in the Mountains. Made to Last.</title>
        <meta name="description" content="Appalachian-rooted creative studio specializing in branding, web design, and visual identity systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* Additional sections can be added here */}
      </main>
    </>
  );
}
