import { FC, useState } from "react";
import AddBlog from "../AddBlog/AddBlog";
import styles from "./AddBlogList.module.scss";
import { BsCamera } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";
import CreatePost from "../createPost_modal/CreatePost";
import { useDispatch } from "react-redux";
import { PhotoModal } from "../../store/modal/modalSlice";
const AddBlogList: FC = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useDispatch();
  const ChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      dispatch(PhotoModal(true));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <AddBlog
          id={"1"}
          type='file'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => ChangeFiles(e)}
        >
          <h3>Photo</h3>
          <BsCamera />
        </AddBlog>
        <div className={styles.ml}>
          <AddBlog
            id={"2"}
            onClickShow={() => dispatch(PhotoModal(true))}
            type='text'
          >
            <h3>Text</h3>
            <RxFileText />
          </AddBlog>
        </div>
      </div>
      <CreatePost file={file!} />
    </div>
  );
};
export default AddBlogList;
