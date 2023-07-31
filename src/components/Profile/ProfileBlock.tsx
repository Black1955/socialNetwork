import { FC, useEffect, useState } from "react";
import { IProfile } from "./IProfileBlock";
import styles from "./ProfileBlock.module.scss";
import Button from "../../ui/Button/Button";
import { TbSettings } from "react-icons/tb";
import PetList from "../PetsList/PetList";
import "dotenv";
import Avatar from "../../ui/Avatar/Avatar";
import { addHostName } from "../../helpFunctions/addHostname";
import AddBlog from "../AddBlog/AddBlog";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import ButtonStyles from "../../ui/Button/Button.module.scss";
import {
  useSubscribeMutation,
  useUnSubscribeMutation,
} from "../../services/user";
import background from "../../assets/user-background.png";
import { showEditModal, showPhotoModal } from "../../store/modal/modalSlice";
import { useDispatch } from "react-redux";
import EditProfile from "../EditProfile/EditProfile";
import { useFoto } from "../../hooks/useFoto/useFoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
const ProfileBlock: FC<IProfile> = ({
  id,
  avatar_url,
  back_url,
  description,
  followers,
  following,
  name,
  nickname,
  followed,
}) => {
  const dispatch = useDispatch();
  const [isShow, setShow] = useState<boolean>(false);
  const { id: myId } = useAppSelector(state => state.auth.user!);
  const [subscribe] = useSubscribeMutation();
  const [unSubscribe] = useUnSubscribeMutation();
  const folow = async (followed: boolean) => {
    if (followed) {
      await unSubscribe(id);
    } else {
      await subscribe(id);
    }
  };
  const back = back_url
    ? import.meta.env.VITE_APP_API_HOSTNAME + "/" + back_url.replace(/\\/g, "/")
    : background;

  const [file, setFile] = useState<File>();
  const ChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(showPhotoModal());
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const [photo] = useFoto(file!);
  return (
    <div className={styles.profile}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={styles.background}
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        {isShow && myId == id && (
          <div className={styles.editBg}>
            <AddBlog id='5' type='file' onChange={e => ChangeFiles(e)}>
              <div className={`${ButtonStyles.Button} ${ButtonStyles.Orange}`}>
                change
              </div>
            </AddBlog>
          </div>
        )}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.profilePhoto}>
          <Avatar
            url={addHostName(avatar_url)}
            height={100}
            width={100}
            userId={id}
          />
        </div>

        <div className={styles.information}>
          <div className={styles.credentials}>
            <div className={styles.nickName}>@{nickname}</div>
            <div className={styles.name}>
              <h2>{name}</h2>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
          <div className={styles.followInformation}>
            {id == myId ? (
              <Button
                variant='BorderBlack'
                icon={<TbSettings />}
                onClick={() => {
                  dispatch(showEditModal());
                }}
              >
                Edit profile
              </Button>
            ) : (
              <Button
                onClick={async () => await folow(followed)}
                variant={followed ? "BorderBlack" : "Orange"}
              >
                {followed ? "unsubscribe" : "subscribe"}
              </Button>
            )}
            <div className={styles.follow}>
              <div className={styles.followSection}>
                <div className={styles.numbers}>{followers}</div>
                <div className={styles.infoFollow}>Followers</div>
              </div>
              <div className={styles.followSection}>
                <div className={styles.numbers}>{following}</div>
                <div className={styles.infoFollow}>Following</div>
              </div>
            </div>
          </div>
        </div>
        <PetList pets={[]} />
      </div>
      <UploadPhoto type='back_url' file={file!} />
      <EditProfile />
    </div>
  );
};

export default ProfileBlock;
