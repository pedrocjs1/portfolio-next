import styles from "./ServiceCard.module.css";
import Image from "next/image";
export default function ServiceCard({ imageSrc, description, isReversed }) {
  return (
    <article className="d-flex justify-content-center align-items-center">
      <div
        className={`${styles.serviceCard} ${isReversed ? styles.reversed : ""}`}
      >
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt="Service Image" width={320} height={240} />
          <button className={styles.contractButton}>Contratar</button>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
