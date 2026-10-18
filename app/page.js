import Header from '../components/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import ConceptWork from '../components/sections/ConceptWork';
import Creatures from '../components/sections/Creatures';
import SelectedWork from '../components/sections/SelectedWork';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Creatures />
      <ConceptWork />
      <SelectedWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
