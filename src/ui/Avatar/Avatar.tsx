import { FC } from "react";
import styles from "./Avatar.module.scss";
import { IAvatar } from "./IAvatar";
import { Link } from "react-router-dom";

const Avatar: FC<IAvatar> = ({ width, height, url, userId }) => {
  return (
    <Link to={`/profile/${userId}`}>
      <img
        src={url}
        className={styles.avatar}
        width={width}
        height={height}
        alt=''
      />
    </Link>
  );
};

export default Avatar;
