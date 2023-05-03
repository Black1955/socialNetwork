import { FC,useState } from "react"
import {IAddBlog} from './IAddBlog'
import styles from './AddBlog.module.scss'

const AddBlog : FC<IAddBlog> = ({onChangeAdd,type,text,url,id,onKeyClick}) => {

    const [show, setShow]=useState(false);
    const onCLickAdd=()=>{
        if(type=='text'){
         setShow(!show)
         console.log(type)
        } 
       else {
        return null
       }
        
       
    }
   
  

    return(
        <div>
            <div className={styles.link}>
            <input id={id} type={type} onChange={onChangeAdd} className={styles.input} />
            <label htmlFor={id} className={styles.item} onClick={onCLickAdd}>
            <img src={url} alt="" />
            <h3>{text}</h3>
            </label>

            </div>
            {show ? <input type="text" onKeyDown={onKeyClick} className={styles.transitionText} onChange={onChangeAdd} placeholder="Введите что у вас нового"/>:<input type="text" className={styles.blogText} placeholder="Введите что у вас нового"/>}
        </div>
    )
}


export default AddBlog;