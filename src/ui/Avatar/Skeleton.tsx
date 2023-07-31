import React from "react";
import styles from "./Avatar.module.scss";
import { ISkeleton } from "./IAvatar";

const Skeleton: React.FC<ISkeleton> = ({ height, width, loading }) => {
  return (
    <div
      style={{ width, height }}
      className={`${styles.avatar} ${loading ? styles.show : styles.hide}`}
    ></div>
  );
};

export default Skeleton;
