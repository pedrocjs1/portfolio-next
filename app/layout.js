import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/NavComp/Nav";
import Header from "./components/HeaderComp/Header";
import About from "./components/AboutComp/About";
import Services from "./components/ServicesComp/Services";
import Carousel from "./components/TecnologiesComp/Tecnologies";
import Portfolio from "./components/PortfolioComp/Portfolio";
import Contact from "./components/ContactComp/Contact";
import Footer from "./components/FooterComp/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Carousel />
        <Portfolio />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
