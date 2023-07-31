import { FC, FormEvent } from "react";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import Button from "../../ui/Button/Button";
import { IUpload } from "./Upload";
import { useFoto } from "../../hooks/useFoto/useFoto";
import { useUpdatePhotoMutation } from "../../services/user";
import { useDispatch } from "react-redux";
import { hidePhotoModal } from "../../store/modal/modalSlice";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import styles from "./UploadPhoto.module.scss";
const UploadPhoto: FC<IUpload> = ({ file, type }) => {
  const { isPhotoModal: visible } = useAppSelector(state => state.modal);
  const dispatch = useDispatch();
  const [photo] = useFoto(file);
  const [update] = useUpdatePhotoMutation();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData();
    e.preventDefault();
    data.append(type === "avatar_url" ? "avatar" : "background", file);
    data.append("type", type);
    await update({ body: data }).then(() => dispatch(hidePhotoModal()));
  };
  return (
    <ModalWrapper visible={visible}>
      <div
        className={styles.wrapper}
        onClick={() => dispatch(hidePhotoModal())}
      >
        <form
          onSubmit={submit}
          className={styles.upload}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ marginBottom: "30px" }}>
            <strong>
              upload {type === "avatar_url" ? "avatar" : "background"} image
            </strong>
          </div>
          <div className={styles.photo}>
            <img src={photo?.toString()} alt='oleg' />
          </div>
          <div className={styles.button}>
            <Button
              variant='Orange'
              type='submit'
              style={{ marginRight: "5px" }}
            >
              upload
            </Button>
            <Button
              variant='Black'
              type='button'
              onClick={() => dispatch(hidePhotoModal())}
            >
              close
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default UploadPhoto;
