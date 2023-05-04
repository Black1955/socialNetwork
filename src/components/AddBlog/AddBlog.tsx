import { FC,useState } from "react"
import {IAddBlog} from './IAddBlog'
import styles from './AddBlog.module.scss'

const AddBlog : FC<IAddBlog> = ({onChangeAdd,type,text,url,id,onClickShow}) => {

   
   
   
  

    return(
        <div>
            <div className={styles.link}>
            <input id={id} type={type} onChange={onChangeAdd} className={styles.input} />
            <label htmlFor={id} className={styles.item} onClick={onClickShow}>
            <img src={url} alt="" />
            <h3>{text}</h3>
            </label>

            </div>
           
        </div>
    )
}


export default AddBlog;