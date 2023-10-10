import style from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer id={style.footer}>
      <div className="row d-flex justify-content-center flex-column w-100">
        <span className={style.copyright}>¡Ponerse En Contacto!</span>

        <ul
          className={`d-flex justify-content-center gap-2 ${style.socialButtons}`}
        >
          <a href="https://github.com/pedrocjs1" target="_blank">
            <AiFillGithub style={{ fontSize: "3rem", color: "black" }} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-vega-72a7a8239/"
            target="_blank"
          >
            <AiFillLinkedin style={{ fontSize: "3rem", color: "black" }} />
          </a>
        </ul>
      </div>
    </footer>
  );
}
