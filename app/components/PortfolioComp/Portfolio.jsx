import style from "./Portfolio.module.css";
import { FiLink } from "react-icons/fi";
import { DiCode } from "react-icons/di";
import Image from "next/image";
export default function Portfolio() {
  return (
    <section className="bg-light-gray">
      <div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
            <h3 className="text-muted">Algunos de mis projectos.</h3>
          </div>
        </div>
        <div className="row d-flex gap-3 flex-wrap justify-content-center align-items-center">
          <div className={`card ${style.cardContainer} text-white`}>
            <Image
              src="/PortfolioImg/homebanking.png"
              width="400"
              height="240"
              alt="Image App HomeBanking"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>HomeBanking MindHub Bank</h5>
              <p className="card-text">
                Aplicación HomeBanking hecha con Java, Spring y entre otras
                tecnologías.
              </p>
              <p className="card-text">
                Donde un usuario puede registrarse, pedir préstamo, crear
                cuentas, pedir tarjeta, hacer transferencias, entre otras
                funcionalidades.
              </p>
              <a
                href="https://github.com/pedrocjs1/HomeBanking"
                className={`navbar-toggler ${style.borderStyle}`}
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>
          <div className={`card ${style.cardContainerPetShop} text-white`}>
            <Image
              src="/PortfolioImg/huellitas-portfolio.png"
              width="400"
              height="240"
              alt="Image App PetShop"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>E-commerce Huellitas</h5>
              <p className="card-text">
                Aplicación creada para tu mejor amigo, en ella podrás encontrar
                juguetes y remedios para mascotas
              </p>
              <a
                href="https://github.com/pedrocjs1/huellitas"
                className={`navbar-toggler ${style.borderStyle}`}
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>
          <div className={`card ${style.cardContainerLawer} text-white`}>
            <Image
              src="/PortfolioImg/lawers.png"
              width="400"
              height="240"
              alt="Image App Lawer"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>
                Lawyer Website Development
              </h5>
              <p className="card-text">
                Web para Bufete de abogados que buscan expandir su clientera
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/pedrocjs1/proyecto-abogados"
                  className={`navbar-toggler ${style.borderStyle}`}
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>

          <div className={`card ${style.cardContainerTech} text-white`}>
            <Image
              src="/PortfolioImg/techtitans.png"
              width="400"
              height="240"
              alt="Image App Tech"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>E-commerce Tech Titans</h5>
              <p className="card-text">
                Aplicación creada para la venta de componentes de pc, donde un
                usuario podrá crearse una cuenta, iniciar sesión, agregar
                productos a su carrito y finalizar una compra.
              </p>
              <a
                href="https://github.com/pedrocjs1/techtitans"
                className={`navbar-toggler ${style.borderStyle}`}
                target="_blank"
              >
                <DiCode color="#fff" />
              </a>
            </div>
          </div>

          <div className={`card ${style.cardContainerAmazing} text-white`}>
            <Image
              src="/PortfolioImg/amazing.png"
              width="400"
              height="240"
              alt="Image App amazing events"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>
                E-commerce Amazing Events
              </h5>
              <p className="card-text">
                Aplicacion de eventos, realizada unicamente con
                JavaScript(Vue.js), HTML y CSS. Cuenta con filtrado por checkbox
                y por buscador.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://pedrocjs1.github.io/AMAZINGEVENTS/"
                  className={`navbar-toggler ${style.borderStyle}`}
                  target="_blank"
                >
                  <FiLink color="#fff" />
                </a>
                <a
                  href="https://github.com/pedrocjs1/AMAZINGEVENTS"
                  className={`navbar-toggler ${style.borderStyle}`}
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>

          <div className={`card ${style.cardContainerSnake} text-white`}>
            <Image
              src="/PortfolioImg/snake.jpeg"
              width="400"
              height="240"
              alt="Image Game Snake"
            />
            <div
              className={`${style.cardImgOverlay} text-center gap-2 d-flex flex-column justify-content-center align-items-center ${style.cardTextH} p-2`}
            >
              <h5 className={`${style.cardTitle}`}>Juego Snake</h5>
              <p className="card-text">
                Juego Snake Descargable hecho con python y turtle.
              </p>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/pedrocjs1/SnakeGameWith-Python-turtle"
                  className={`navbar-toggler ${style.borderStyle}`}
                  target="_blank"
                >
                  <DiCode color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
