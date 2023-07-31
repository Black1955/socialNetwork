import { FC } from "react";
import { IPost } from "./IPost";
import styles from "./Post.module.scss";
import { SlOptions } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import Comments from "../Coments/Coments";
import { getDate } from "../../helpFunctions/getDate";

const Post: FC<IPost> = ({
  folowed,
  setLiked,
  setComented,
  coments,
  comented,
  description,
  title,
  time,
  likes,
  img_url,
  liked,
  userId,
}) => {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>{title}</p>

            {folowed ? null : (
              <button className={styles.folowed}>Follow</button>
            )}
          </div>
          <div className={styles.right}>
            <p>{getDate(time)}</p>
            <button className={styles.headerButton}>
              <SlOptions />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.img}>
        <img className={styles.img} src={img_url} alt='' />
      </div>
      <footer>
        <div className={styles.wrapper}>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.setting}>
          <div className={styles.footerLeft}>
            {liked ? (
              <button className={styles.likedButton} onClick={setLiked}>
                <AiFillHeart size={20} />
              </button>
            ) : (
              <button className={styles.dislikedButton} onClick={setLiked}>
                <AiFillHeart size={20} />
              </button>
            )}
            <span
              className={liked ? styles.likedNumber : styles.dislikedNumber}
            >
              {likes}
            </span>
          </div>

          <div className={styles.footerRight}>
            <button className={styles.share}>
              <BsFillShareFill size={20} />
            </button>
            {comented ? (
              <button className={styles.chat} onClick={setComented}>
                <IoIosChatboxes size={27} />
              </button>
            ) : (
              <button className={styles.dischat} onClick={setComented}>
                <IoIosChatboxes size={27} />
              </button>
            )}
          </div>
        </div>
      </footer>
      <div className={styles.wrapper}>
        {comented ? (
          <div className={styles.postComents}>
            <h2>
              Comments <span>({coments.length})</span>
            </h2>
            <Comments
              descr='You pet very good 🥰'
              userName='vasya'
              time={"2d"}
              liked={true}
              likes={123}
              setLiked={() => {}}
              logoUrl=''
              id={userId}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
