import { FC,useEffect,useState } from "react"
import AddBlog from "../AddBlog/AddBlog"
import styles from './AddBlogList.module.scss'
import photo from '../../assets/photo.png'
import text from '../../assets/text.png'
import paperClip from '../../assets/paperclip.png'
import {BsCamera} from "react-icons/bs"
import {RxFileText} from 'react-icons/rx'

const AddBlogList:FC =()=>{
    const [file,setFile]=useState<File>()
    const [value,setValue]=useState('')
    const [show, setShow]=useState(false);

    const ChangeFiles =(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.files) setFile(e.target.files[0])
    }
    const ChangeValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
        
    }

    const onCLickAdd=()=>{
         setShow(!show)
    }

    
    const KeyClick=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.code=='Enter'){
            console.log(value)
        }
    }

    return (
        <div className={styles.wrapper}>

       
        <div className={styles.item}> 
          <AddBlog id={'1'} icon={<BsCamera/>} type='file' text="Photo"  onChangeAdd={(e:React.ChangeEvent<HTMLInputElement>)=>ChangeFiles(e)}/>
          <div className={styles.ml}>
             <AddBlog id={'2'} icon={<RxFileText/>} onClickShow={onCLickAdd} type='text' text="Text"  />
          </div>
           </div>
          {show ? 
          <div className={styles.blockShow}>
            <img src={paperClip} className={styles.paperclip} alt="" />
          <input type="text" onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>KeyClick(e)} className={styles.transitionText} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>ChangeValue(e)} placeholder="Введите что у вас нового"/>
          <button className={styles.btn}>Follow</button></div>
          :
          <div className={styles.blogText}>
             <input type="text"  placeholder="Введите что у вас нового"/>
          </div>}
         
           
            
        
        </div>
    )
}
export default AddBlogList