import styles from './InputPassword.module.scss';
import { useState } from 'react';
import { FC } from "react";
import { IInputPassword } from './IInputPassword';
import * as React from 'react';

const  InputPassword :FC<IInputPassword> = ({placeholder,border,onChangeInput,value}) =>
{
 
  return (

    <input type="password" className={`${styles.input}   ${styles[border]}`} value={value}   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChangeInput(e)}placeholder={placeholder} />
  );
}

export default InputPassword;
