import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Valeur } from "../components/Valeur";
import { Projets } from "../components/Projets";
import { Process } from "../components/Process";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Valeur />
      <Projets />
      <Process />
    </main>
  );
}
