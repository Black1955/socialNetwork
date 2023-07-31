import { FC, useState } from "react";
import styles from "./Avatar.module.scss";
import { IAvatar } from "./IAvatar";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";
import defaultAvatar from "../../assets/user-avatar.png";
const Avatar: FC<IAvatar> = ({ width, height, url, userId }) => {
  const [loading, setLoading] = useState(true);
  const handleImg = ({ currentTarget }: any) => {
    currentTarget.src = defaultAvatar;
    setLoading(false);
  };
  const onLoad = () => {
    setLoading(false);
  };
  return (
    <Link to={`/profile/${userId}`}>
      <Skeleton height={height} width={width} loading={loading} />
      <img
        src={url}
        style={{ display: loading ? "none" : "block" }}
        className={styles.avatar}
        width={width}
        height={height}
        alt=''
        onLoad={onLoad}
        onError={handleImg}
      />
    </Link>
  );
};

export default Avatar;
