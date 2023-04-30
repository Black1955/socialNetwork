import { FC } from "react";
import { IPet } from "./IPet";
import styles from "./Pet.module.scss";
const Pet: FC<IPet> = ({ name, img }) => {
  return (
    <div className={styles.pet}>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default Pet;
