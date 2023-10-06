import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/NavComp/Nav";
import Header from "./components/HeaderComp/Header";
import About from "./components/AboutComp/About";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Header />
        <About />
        {children}
      </body>
    </html>
  );
}
