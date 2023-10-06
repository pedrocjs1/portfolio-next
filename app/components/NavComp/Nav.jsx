"use client";
import { useState } from "react";
import style from "./Nav.module.css";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.navbarArea}>
      <div className={style.container}>
        <nav className={style.siteNavbar}>
          <Link href="#inicio" className={style.siteLogo}>
            Pedro
          </Link>

          <ul className={`${menuOpen ? style.open : ""}`} onClick={closeMenu}>
            <li>
              <Link href="#inicio">Inicio</Link>
            </li>
            <li>
              <Link href="#about">Sobre Mi</Link>
            </li>
            <li>
              <Link href="#services">Servicios</Link>
            </li>
            <li>
              <Link href="#portfolio">Portafolio</Link>
            </li>
            <li>
              <Link href="#contact">Contacto</Link>
            </li>
          </ul>

          <button
            className={`${style.navToggler} ${
              menuOpen ? style.togglerOpen : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
          </button>
        </nav>
      </div>
    </div>
  );
}
