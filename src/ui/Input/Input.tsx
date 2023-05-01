import styles from './Input.module.scss';
import { useState } from 'react';
import { FC } from "react";
import { IInput } from './IInput';
import * as React from 'react';

const  Input :FC<IInput> = ({placeholder,border,onChangeInput,value}) =>
{


  return (

    <input type="text" className={`${styles.input}   ${styles[border]}`} value={value}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChangeInput(e)} placeholder={placeholder} />
  );
}

export default Input;
