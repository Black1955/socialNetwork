import styles from './Input.module.scss';
import { FC } from "react";
import { IInput } from './IInput';

const  Input :FC<IInput> = ({placeholder,border}) =>
{
  return (

    <input type="text" className={`${styles.input}   ${styles[border]}`}    placeholder={placeholder} />
  );
}

export default Input;
