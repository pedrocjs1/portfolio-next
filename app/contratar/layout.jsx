import style from "./contratar.module.css";
import ServiceCard from "../components/ContractServiceComp/ServiceCard";

export default function ContractarLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.bodyc}>
        {children}
        <h1>est oes una prueba</h1>
        <ServiceCard
          imageSrc="/PortfolioImg/lawers.png"
          description="Descripción del servicio."
          isReversed={false}
        />
        <ServiceCard
          imageSrc="/PortfolioImg/lawers.png"
          description="Descripción del servicio."
          isReversed={true}
        />
        <ServiceCard
          imageSrc="/PortfolioImg/lawers.png"
          description="Descripción del servicio."
          isReversed={false}
        />
        <ServiceCard
          imageSrc="/PortfolioImg/lawers.png"
          description="Descripción del servicio."
          isReversed={true}
        />
      </body>
    </html>
  );
}
