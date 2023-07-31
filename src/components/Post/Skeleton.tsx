import { Skeleton as DefaultSkeleton } from "../skeleton/Skeleton";
import styles from "../Post/Post.module.scss";
const Skeleton = () => {
  return (
    <div
      className={styles.post}
      style={{ minHeight: "150px", padding: "10px 20px " }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <DefaultSkeleton classes={["avatar", "small"]} />
        <div>
          <DefaultSkeleton classes={["field"]} />
          <DefaultSkeleton classes={["wide-field"]} />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
