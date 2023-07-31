import styles from "./InputPassword.module.scss";
import { FC } from "react";
import { IInputPassword } from "./IInputPassword";

const InputPassword: FC<IInputPassword> = ({ border, ...rest }) => {
  return (
    <input
      {...rest}
      type='password'
      className={`${styles.input}   ${styles[border]}`}
    />
  );
};

export default InputPassword;
