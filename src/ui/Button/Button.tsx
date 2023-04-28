import { FC } from "react";
import styles from "./Button.module.scss";
import { IButton } from "./IButton";
const Button: FC<IButton> = ({ text, onClick, variant }) => {
  console.log(Date.now());
  return (
    <button onClick={onClick} className={`${styles.Button} ${styles[variant]}`}>
      {text}
    </button>
  );
};
export default Button;
