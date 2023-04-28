import styles from './InputChecked.module.scss';
import { FC } from "react";
import { IChecked } from './IChecked';
import { BsCheck } from "react-icons/bs";

const  InputChecked :FC<IChecked> = ({value,onClickInput}) =>
{
 
console.log(value)
  return (
    <div className={styles.inputBlock}>
     
    <input type="checkbox" id='checked'   onClick={onClickInput} className={styles.input} checked={value} />
    <label htmlFor="checked" className={styles.labelChecked}>
      <span> {value?<BsCheck className={styles.check}/>:null}</span>
    </label>
    
    </div>
  
  );
}

export default InputChecked;
