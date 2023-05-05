import { FC } from "react";
import styles from "./Button.module.scss";
import { IButton } from "./IButton";
const Button: FC<IButton> = ({ text, onClick, variant, icon }) => {
  return !icon ? (
    <button onClick={onClick} className={`${styles.Button} ${styles[variant]}`}>
      {text}
    </button>
  ) : (
    <button onClick={onClick} className={`${styles.Button} ${styles[variant]}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
          className={styles.icon}
        >
          {icon}
        </div>
        <div>{text}</div>
      </div>
    </button>
  );
};
export default Button;
