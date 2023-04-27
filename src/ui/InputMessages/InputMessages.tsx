
import { FC } from "react";
import { IInputMessages } from "./IInputMessages";
import styles from './InputMessages.module.scss'
import { BsFillEmojiSmileFill,BsFillSendFill} from 'react-icons/bs';
import React, { useState } from 'react';


const  InputMessages:FC<IInputMessages> = ({placeholder}) =>
{

  const [value,setValue]=useState("")

  return <div>
   
    <div className={styles.parent}>
    <div className={styles.preInput}>
    <BsFillEmojiSmileFill style={{marginRight:"7px"}}/>
    <span>|</span>
    </div>
    

    <input className={styles.input}  type="text" placeholder={placeholder} onChange={(e)=>setValue(e.target.value)} />

  <div className={styles.nextInput}>

    {value? <button className={styles.button}>
    <BsFillSendFill/>
    </button>:null}
   
  </div>
      </div>
      
    


  </div>;
}

export default InputMessages;
