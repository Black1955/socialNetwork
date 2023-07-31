import ModalWrapper from "../modalWrapper/ModalWrapper";
import Button from "../../ui/Button/Button";
import styles from "./CreatePost.module.scss";
import Input from "../../ui/Input/Input";
import AddBlog from "../AddBlog/AddBlog";
import { MdAddToPhotos } from "react-icons/md";
import { FC, FormEvent, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { PhotoModal } from "../../store/modal/modalSlice";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import { useFoto } from "../../hooks/useFoto/useFoto";
import { ICreatePost } from "./CreatePost_type";
import { useCreatePostMutation } from "../../services/post";
const CreatePost: FC<ICreatePost> = ({ file }) => {
  const { IsPostModal } = useAppSelector(state => state.modal);
  const [title, setTitle] = useState<string>();
  const [image, setImage] = useState<File | null>(file);
  const [createPost] = useCreatePostMutation();
  useEffect(() => {
    setImage(file);
  }, [file]);
  const [photo] = useFoto(image!);
  const dispatch = useDispatch();
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    const form = new FormData();
    image && form.append("post", image);
    form.append("title", title!);
    //@ts-ignore
    form.append("description", e.currentTarget.elements.description.value);
    e.preventDefault();
    await createPost(form).then(() => dispatch(PhotoModal(false)));
  };

  return (
    <ModalWrapper visible={IsPostModal}>
      <div
        className={styles.wrapper}
        onClick={() => dispatch(PhotoModal(false))}
      >
        <form
          className={styles.modal}
          onClick={e => e.stopPropagation()}
          onSubmit={submit}
        >
          <div
            onClick={() => dispatch(PhotoModal(false))}
            className={styles.cross}
            style={{ top: "20px", right: "20px", padding: "4px" }}
          >
            <GrClose />
          </div>
          <div
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <div>Create Post</div>
            </div>

            <Input
              style={{ marginBottom: "10px", fontSize: "20px" }}
              border='BorderWhite'
              variant='Black'
              placeholder='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <div>
              <textarea
                className={styles.textarea}
                placeholder='description'
                name='description'
                id='description'
              ></textarea>
            </div>
            <div className={styles.photo}>
              {image ? (
                <>
                  <img src={photo?.toString()} alt='image' />
                  <div className={styles.cross} onClick={() => setImage(null)}>
                    <GrClose />
                  </div>
                </>
              ) : (
                <AddBlog
                  type='file'
                  id='postfile'
                  onChange={e => setImage(e.target.files![0])}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <MdAddToPhotos />
                    add photo
                  </div>
                </AddBlog>
              )}
            </div>

            <Button
              disabled={title ? false : true}
              type='submit'
              variant={title ? "Orange" : "Gray"}
              style={{
                position: "absolute",
                width: "100%",
                bottom: "0px",
              }}
            >
              post
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CreatePost;
