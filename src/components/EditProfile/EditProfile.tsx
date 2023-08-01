import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import styles from "./EditProfile.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../../ui/Button/Button";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import { addHostName } from "../../helpFunctions/addHostname";
import { useDispatch } from "react-redux";
import { hideEditModal, updateprofile } from "../../store/modal/modalSlice";
import { useFoto } from "../../hooks/useFoto/useFoto";
import AddBlog from "../AddBlog/AddBlog";
import Avatar from "../../ui/Avatar/Avatar";
import { useUpdateProfileMutation } from "../../services/user";
import Input from "../../ui/Input/Input";
const EditProfile = () => {
  const dispatch = useDispatch();
  const { isEditModal, editModal } = useAppSelector(state => state.modal);
  const {
    avatar_url,
    back_url,
    description: defaultDesc,
    name: defaultName,
  } = useAppSelector(state => state.auth.user!);
  const [update] = useUpdateProfileMutation();
  const { name, description } = editModal!;
  const [avatar, setAva] = useState<File>();
  const [back, setBack] = useState<File>();

  const [avatarPicture] = useFoto(avatar!);
  const [backPicture] = useFoto(back!);

  const [descShow, setdescShow] = useState(false);

  const Submit = async (e: any) => {
    const form = new FormData();
    avatar && form.append("avatar", avatar!);
    back && form.append("background", back!);
    form.append("name", name!);
    form.append("description", description!);
    e.preventDefault();
    await update({ body: form }).then(() => dispatch(hideEditModal()));
  };

  return (
    <ModalWrapper visible={isEditModal}>
      <div className={styles.wrapper} onClick={() => dispatch(hideEditModal())}>
        <form
          className={styles.modal}
          onSubmit={Submit}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ position: "relative" }}>
            <div className={styles.header}>Edit profile</div>
            <div
              className={styles.icon}
              onClick={() => dispatch(hideEditModal())}
            >
              <GrClose />
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>Avatar picture</div>
              <AddBlog
                id='avatar'
                type='file'
                onChange={e => setAva(e.target.files![0])}
              >
                <div>Add</div>
              </AddBlog>
            </div>
            <div className={styles.avatar_picture}>
              <Avatar
                height={168}
                width={168}
                url={
                  avatarPicture
                    ? avatarPicture.toString()
                    : addHostName(avatar_url)
                }
                userId={10}
              />
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>background picture</div>
              <AddBlog
                id='back'
                type='file'
                onChange={e => setBack(e.target.files![0])}
              >
                <div>Add</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.back_picture}>
                <img
                  src={
                    backPicture ? backPicture.toString() : addHostName(back_url)
                  }
                  alt='qwe'
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>description</div>
              <AddBlog
                id='description'
                type='text'
                onClickShow={() => setdescShow(prev => !prev)}
              >
                <div>{descShow ? "Cancel" : "Add"}</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {descShow ? (
                <textarea
                  value={description}
                  onChange={e =>
                    dispatch(updateprofile({ description: e.target.value }))
                  }
                  rows={3}
                  className={styles.desc_textarea}
                  placeholder={`${
                    defaultDesc ? defaultDesc : "Describe yourself..."
                  } `}
                ></textarea>
              ) : description ? (
                <div>{description}</div>
              ) : (
                <div>Describe yourself…</div>
              )}
            </div>
          </div>
          <Button variant='Orange' type='submit'>
            save
          </Button>
          <div>
            <div className={styles.block}>
              <div>name</div>
              <AddBlog
                id='name'
                type='text'
                onClickShow={() => setdescShow(prev => !prev)}
              >
                <div>{descShow ? "Cancel" : "Add"}</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {descShow ? (
                <Input
                  border='BorderOrange'
                  variant='Gray'
                  value={name}
                  onChange={e =>
                    dispatch(updateprofile({ name: e.target.value }))
                  }
                  placeholder={`${
                    defaultName ? defaultName : "Describe yourself..."
                  } `}
                />
              ) : name ? (
                <div>{name}</div>
              ) : (
                <div>Describe yourself…</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;
