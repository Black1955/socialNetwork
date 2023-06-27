import { FC } from "react";
import styles from "./Button.module.scss";
import { IButton } from "./IButton";
const Button: FC<IButton> = ({ children, variant, icon, ...rest }) => {
  return !icon ? (
    <button {...rest} className={`${styles.Button} ${styles[variant]}`}>
      {children}
    </button>
  ) : (
    <button {...rest} className={`${styles.Button} ${styles[variant]}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
          className={styles.icon}
        >
          {icon}
        </div>
        <div>{children}</div>
      </div>
    </button>
  );
};
export default Button;
