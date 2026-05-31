import "./index.css";
import "./shared.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Sobre from "./sections/Sobre/Sobre";
import Habilidades from "./sections/Habilidades/Habilidades";
import Projetos from "./sections/Projetos/Projetos";
import Contato from "./sections/Contato/Contato";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
