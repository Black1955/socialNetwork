import { FC } from "react";
import { IReCommended } from "./IRecommended";
import styles from "./RecommendedBlog.module.scss";
import { GrFormClose } from "react-icons/gr";
import Avatar from "../Avatar/Avatar";
import { addHostName } from "../../helpFunctions/addHostname";

const RecommendedBlog: FC<IReCommended> = ({
  nickname,
  id,
  description,
  avatar_url,
}) => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogWrapper}>
        <div className={styles.left}>
          <Avatar
            width={45}
            height={45}
            url={addHostName(avatar_url)}
            userId={id}
          />
          <div className={styles.text}>
            <h3 className={styles.userName}>{nickname}</h3>
            <p className={styles.desc}>{description}</p>
          </div>
        </div>
        <div className={styles.right}>
          <GrFormClose className={styles.close} />
          <button className={styles.button}>Follow</button>
        </div>
      </div>
    </div>
  );
};
export default RecommendedBlog;
