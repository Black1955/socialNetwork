import  { FC } from "react";
import { IReCommended } from "./IRecommended";
import styles from './RecommendedBlog.module.scss'
import {GrFormClose} from 'react-icons/gr'
import Avatar from "../../ui/Avatar/Avatar";
import img from '../../img.jpg'



const RecommendedBlog:FC<IReCommended> = ({userName,desc}) => {
return(
    <div className={styles.blog}>
        <div className={styles.blogWrapper}>
        <div className={styles.left}>
            <Avatar width={45} height={45} url={img} />
            <div className={styles.text}>
                <h3 className={styles.userName}>{userName}</h3>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
        <div className={styles.right}>
        <GrFormClose className={styles.close}/>
        <button className={styles.button}>Follow</button>
        </div>
        </div>
    </div>
)
}
export default RecommendedBlog;