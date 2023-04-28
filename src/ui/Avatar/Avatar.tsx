import { FC } from "react";
import styles from "./Avatar.module.scss";
import { IAvatar } from "./IAvatar";



const Avatar: FC<IAvatar> = ({ width,height,url }) => {
  return (
    <img src={url} className={styles.avatar} width={width} height={height} alt="" />
  );
};


export default Avatar;
