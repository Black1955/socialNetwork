import { FC,useEffect,useState } from "react"
import AddBlog from "../AddBlog/AddBlog"
import styles from './AddBlogList.module.scss'
import photo from '../../assets/photo.png'
import text from '../../assets/text.png'

const AddBlogList:FC =()=>{
    const [file,setFile]=useState<File>()
    const [value,setValue]=useState('')
    

    const ChangeFiles =(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.files) setFile(e.target.files[0])
    }
    const ChangeValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
        
    }
    const KeyClick=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.code=='Enter'){
            console.log(value)
        }
    }

    return (
        <div className={styles.item}> 
          <AddBlog id={'1'} url={photo} type='file' text="Photo"  onChangeAdd={(e:React.ChangeEvent<HTMLInputElement>)=>ChangeFiles(e)}/>
          <div className={styles.ml}>
             <AddBlog id={'2'} url={text} type='text' text="Text" onKeyClick={(e:React.KeyboardEvent<HTMLInputElement>)=>KeyClick(e)} onChangeAdd={(e:React.ChangeEvent<HTMLInputElement>)=>ChangeValue(e)}/>
          </div>
           
              
           
            
        </div>
    )
}
export default AddBlogList