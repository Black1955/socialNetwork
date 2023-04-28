import styles from './InputRadio.module.scss';
import { useState } from 'react';
import { FC } from "react";
import * as React from 'react';
import { IRadio } from './IRadio';

const  InputRadio :FC<IRadio> = ({value,onClickInput}) =>
{
  console.log(value)

  return (
    <div className={styles.inputBlock}>
    <input type="radio" id='radio'  name='radio' onClick={onClickInput} className={styles.input} checked={value} />
    <label htmlFor="radio" className={styles.labelRadio}>
      <span></span>
    </label>
    </div>
  
  );
}

export default InputRadio;
