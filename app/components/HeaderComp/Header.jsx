import style from "./Header.module.css";

export default function Header() {
  return (
    <section id="inicio">
      <div className={style.backgroundImage}>
        <div className={style.introText}>
          <div className={style.introLeadIn}>Hola, Soy Pedro</div>
          <div className={style.introHeading}>Java Full Stack Developer</div>
          <a
            href="/PedroVega-CV.pdf"
            className={`page-scroll text-white btn btn-xl ${style.background}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar Cv
          </a>
        </div>
      </div>
    </section>
  );
}
