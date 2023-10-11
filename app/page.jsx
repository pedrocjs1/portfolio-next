import About from "./components/AboutComp/About";
import Services from "./components/ServicesComp/Services";
import Carousel from "./components/TecnologiesComp/Tecnologies";
import Portfolio from "./components/PortfolioComp/Portfolio";
import Contact from "./components/ContactComp/Contact";
import Footer from "./components/FooterComp/Footer";
import Header from "./components/HeaderComp/Header";
export default function HomePage() {
  return (
    <section>
      <Header />
      <About />
      <Services />
      <Carousel />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
  );
}
