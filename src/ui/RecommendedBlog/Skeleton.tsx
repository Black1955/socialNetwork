import styles from "./RecommendedBlog.module.scss";
import { Skeleton as DefaultSkeleton } from "../../components/skeleton/Skeleton";
const Skeleton = () => {
  return (
    <div className={styles.blog}>
      <div
        style={{
          padding: "17px",
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <DefaultSkeleton classes={["avatar", "small"]} />
        </div>
        <DefaultSkeleton classes={["field"]} />
      </div>
    </div>
  );
};

export default Skeleton;
