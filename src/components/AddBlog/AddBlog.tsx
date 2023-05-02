import { FC,useState } from "react"
import {IAddBlog} from './IAddBlog'
import styles from './AddBlog.module.scss'

const AddBlog : FC<IAddBlog> = ({onChangeAdd,type,text,url}) => {

    const [show, setShow]=useState(false);
    const onCLickAdd=()=>{
        type=='text' ? 
        setShow(!show)
        :
        null;
    }
   
  

    return(
        <div>
            <div className={styles.link}>
            <input id="4" type={type} onChange={onChangeAdd} className={styles.input} />
            <label htmlFor="4" className={styles.item} onClick={onCLickAdd}>
            <img src={url} alt="" />
            <h3>{text}</h3>
            </label>

            </div>
            {show ? <input type="text" className={styles.transitionText} onChange={onChangeAdd} placeholder="Введите что у вас нового"/>:<input type="text" className={styles.blogText} placeholder="Введите что у вас нового"/>}
        </div>
    )
}


export default AddBlog;