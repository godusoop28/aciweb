import Agenda from "./components/Agenda";
import Aliados from "./components/Aliados";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import Stats from "./components/Stats";
import Testimonios from "./components/Testimonios";
import Ubicacion from "./components/Ubicacion";
import Unete from "./components/Unete";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 flex-col">
        <Hero />
        <Stats />
        <QuienesSomos />
        <Servicios />
        <Aliados />
        <Testimonios />
        <Agenda />
        <Ubicacion />
        <Unete />
      </main>
      <Footer />
    </div>
  );
}
