import { Skeleton as DefaultSkeleton } from "../skeleton/Skeleton";
import styles from "./ProfileBlock.module.scss";
const Skeleton = () => {
  return (
    <div className={styles.profile}>
      <div style={{ position: "relative" }}>
        <DefaultSkeleton classes={["background"]} />
        <div
          style={{
            position: "absolute",
            top: "100px",
            borderRadius: "50%",
            border: "2px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            left: "20px",
          }}
        >
          <DefaultSkeleton classes={["avatar", "big"]} />
        </div>
      </div>
      <div>
        <DefaultSkeleton classes={["field"]} />
        <DefaultSkeleton classes={["field"]} />
        <DefaultSkeleton classes={["wide-field"]} />
      </div>
    </div>
  );
};

export default Skeleton;
