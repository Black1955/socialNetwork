import styles from './InputRadio.module.scss';
import { useState } from 'react';
import { FC } from "react";
import * as React from 'react';

const  InputRadio :FC = () =>
{
 
  return (
    <div className={styles.inputBlock}>
    <input type="radio" id='radio' className={styles.input} />
    <label htmlFor="radio" className={styles.labelRadio}>
      <span></span>
    </label>
    </div>
  
  );
}

export default InputRadio;
