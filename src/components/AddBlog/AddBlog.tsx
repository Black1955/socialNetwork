import { FC,useState } from "react"
import {IAddBlog} from './IAddBlog'
import styles from './AddBlog.module.scss'

const AddBlog : FC<IAddBlog> = ({onChangeAdd,type,text,icon,id,onClickShow}) => {

    return(
        <div>
            <div className={styles.link}>
            <input id={id} type={type} onChange={onChangeAdd} className={styles.input} />
            <label htmlFor={id} className={styles.item} onClick={onClickShow}>
            {icon}
            <h3>{text}</h3>
            </label>

            </div>
           
        </div>
    )
}


export default AddBlog;