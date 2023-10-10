import style from "./Service.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <section>
      <div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Servicios</h2>
            <h3 className={style.textMuted}>Mis Servicios</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 srow text-center">
          <div className={`card ${style.cardEdit} p-3`}>
            <Image
              src="/FrontEnd.png"
              width="192"
              height="256"
              className="card-img-top"
              alt="FrontEnd"
            />
            <div className="card-body">
              <p className={`${style.cardText} text-break ${style.styleP}`}>
                Desarrollo FrontEnd
              </p>
            </div>
          </div>
          <div className={`card ${style.cardEdit} p-3`}>
            <Image
              src="/BackEnd.png"
              width="192"
              height="256"
              className="card-img-top"
              alt="BackEnd"
            />
            <div className="card-body">
              <p className={`${style.cardText} text-break ${style.styleP}`}>
                Desarrollo BackEnd
              </p>
            </div>
          </div>
          <div className={`card ${style.cardEdit} p-3`}>
            <Image
              src="/BaseDeDatos.png"
              width="192"
              height="256"
              className="card-img-top"
              alt="BaseDeDatos"
            />
            <div className="card-body">
              <p className={`${style.cardText} text-break ${style.styleP}`}>
                Base de datos
              </p>
            </div>
          </div>
          <div className={`card ${style.cardEdit} p-3`}>
            <Image
              src="/Ceo.png"
              width="192"
              height="256"
              className="card-img-top"
              alt="Ceo"
            />
            <div className="card-body">
              <p className={`${style.cardText} text-break ${style.styleP}`}>
                <span className="text-break">Posicionamiento&nbsp;SEO</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
