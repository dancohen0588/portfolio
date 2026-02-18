import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Valeur } from "../components/Valeur";
import { Projets } from "../components/Projets";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Valeur />
      <Projets />
    </main>
  );
}
