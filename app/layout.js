import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/NavComp/Nav";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
