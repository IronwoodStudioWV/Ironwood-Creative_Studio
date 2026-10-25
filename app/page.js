import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/sections/About';
import ConceptWork from '../components/sections/ConceptWork';
import Contact from '../components/sections/Contact';
import Creatures from '../components/sections/Creatures';
import Hero from '../components/sections/Hero';
import SelectedWork from '../components/sections/SelectedWork';
import Services from '../components/sections/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Creatures />
        <ConceptWork />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
