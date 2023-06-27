import { FC } from "react";
import { IPostPhoto } from "./IPostPhoto.ts";
import styles from "./PostPhoto.module.scss";
import { SlOptions } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import Comments from "../Coments/Coments.tsx";

const PostPhoto: FC<IPostPhoto> = ({
  id,
  folowed,
  setLiked,
  setComented,
  coments,
  comented,
  name,
  time,
  likes,
  title,
  subtitle,
  liked,
}) => {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>{name}</p>

            {folowed ? null : (
              <button className={styles.folowed}>Follow</button>
            )}
          </div>
          <div className={styles.right}>
            <p>{time}</p>
            <button className={styles.headerButton}>
              <SlOptions />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.descr}>
          <div className={styles.title}>
            <h2>Problem with my pets</h2>
          </div>
          <div className={styles.subtitle}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              asperiores optio ex placeat rem dolores accusamus qui vel veniam,
              iusto magnam, dolore sit aliquid. Velit, cumque. Vel, cumque.
              Odio, expedita. Recusandae dolore fuga, corrupti vitae enim nam
              nihil ipsam distinctio eum veniam perspiciatis quidem atque
              deserunt eveniet accusamus quisquam molestias aperiam delectus
              quos expedita officia quaerat veritatis itaque? Suscipit, numquam!
              Consequuntur tempore temporibus quisquam eveniet enim! Ipsum error
              fugiat libero quidem unde dolorem soluta odio nostrum at delectus
              mollitia suscipit culpa rerum commodi, eligendi reiciendis quod
              reprehenderit architecto autem quasi. Neque, quod eligendi eius
              ipsum consectetur sunt quidem et labore libero nulla maxime minus
              cum omnis impedit quisquam dolores dolor dicta ducimus aliquid
              sapiente illo. Voluptate impedit consequuntur maiores distinctio.
              Dolore doloribus deserunt voluptates rerum quo quisquam voluptatum
              non exercitationem impedit, illo quibusdam placeat fugiat mollitia
              dignissimos atque facere nobis iusto sapiente tempora, aliquam
              dolor libero nulla suscipit. Ut, autem. Atque corporis voluptatem
              eaque dolores fugiat rem ut, facilis sit eligendi illo architecto
              velit maiores iure dolore minima alias sapiente unde, tenetur
              reiciendis, vitae minus ipsum vero tempora. Deleniti, modi.
              Aliquid adipisci, animi, consectetur minima aspernatur nobis sed
              vel possimus reiciendis eos eum, nemo voluptatibus consequuntur
              perferendis sint officiis voluptas? Porro temporibus, nostrum
              commodi eum recusandae eius facilis dolor ipsum. Ea quisquam
              facere provident in aspernatur inventore eligendi cumque dicta
              maxime natus, dolore harum! Dolores, quia cumque! Ex numquam,
              eligendi nisi blanditiis optio cumque sunt impedit molestiae
              perferendis fugit! Eos. Unde alias voluptatum aspernatur cum harum
              voluptatibus sequi culpa similique porro assumenda consequuntur
              animi maxime, laudantium excepturi accusantium consequatur quam
              deleniti soluta error? Accusantium nam corporis eaque, possimus id
              labore? Natus iste dolorem fuga. Ratione enim consectetur esse,
              delectus impedit et temporibus, nisi nemo nostrum atque ipsa alias
              placeat quaerat commodi velit repellat assumenda? Repellat aut
              ducimus adipisci. Quidem, unde?
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className={styles.wrapper}></div>

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
              id={id}
              descr='You pet very good 🥰'
              userName='vasya'
              time={"2d"}
              liked={true}
              likes={123}
              setLiked={() => {}}
              logoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PostPhoto;
