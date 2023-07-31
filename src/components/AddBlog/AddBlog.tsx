import { FC } from "react";
import { IAddBlog } from "./IAddBlog";
import styles from "./AddBlog.module.scss";

const AddBlog: FC<IAddBlog> = ({ id, onClickShow, children, ...rest }) => {
  return (
    <div>
      <div className={styles.link}>
        <input
          {...rest}
          id={id}
          className={styles.input}
          accept='image/png, image/jpeg, image/jpg'
        />
        <label htmlFor={id} className={styles.item} onClick={onClickShow}>
          {children}
        </label>
      </div>
    </div>
  );
};

export default AddBlog;
