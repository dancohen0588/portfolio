import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Valeur } from "../components/Valeur";
import { Services } from "../components/Services";
import { Projets } from "../components/Projets";
import { Process } from "../components/Process";
import { Resultats } from "../components/Resultats";
import { Temoignage } from "../components/Temoignage";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Valeur />
      <Services />
      <Projets />
      <Process />
      <Resultats />
      <Temoignage />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
