import styles from "./Input.module.scss";
import { FC } from "react";
import { IInput } from "./IInput";

const Input: FC<IInput> = ({ border, ...rest }) => {
  return (
    <input
      {...rest}
      type='text'
      className={`${styles.input}   ${styles[border]}`}
    />
  );
};

export default Input;
