import { FC } from "react";
import styles from "./Coments.module.scss";
import { AiFillHeart } from "react-icons/ai";
import Avatar from "../../ui/Avatar/Avatar";
import { IComment } from "./IComents";

const Comments: FC<IComment> = ({
  id,
  likes,
  time,
  descr,
  userName,
  liked,
  setLiked,
  logoUrl,
}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.wrapper}>
        <div className={styles.commentLeft}>
          <Avatar height={40} width={40} url={logoUrl} userId={id} />
        </div>
        <div className={styles.commentRight}>
          <div className={styles.name}>{userName}</div>
          <div className={styles.descr}>{descr}</div>
          <div className={styles.settings}>
            <div className={styles.settingsLeft}>
              <div className={styles.time}>{time}</div>
              <div className={styles.likes}>{likes} likes</div>
            </div>
            {liked ? (
              <div className={styles.liked} onClick={setLiked}>
                <AiFillHeart />
              </div>
            ) : (
              <div className={styles.disliked} onClick={setLiked}>
                <AiFillHeart />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
