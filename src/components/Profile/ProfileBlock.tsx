import { FC,useState } from "react";
import { IProfile } from "./IProfileBlock";
import styles from "./ProfileBlock.module.scss";
import Button from "../../ui/Button/Button";
import { TbSettings } from "react-icons/tb";
import PetList from "../PetsList/PetList";
import "dotenv";
// test imports
import Avatar from "../../ui/Avatar/Avatar";
import AddBlog from "../AddBlog/AddBlog";
import {TbPhotoEdit} from 'react-icons/tb'
 

const ProfileBlock: FC<IProfile> = ({
  id,
  avatar_url,
  back_url,
  description,
  followers,
  following,
  name,
  nickname,
}) => {
  const back = import.meta.env.VITE_APP_API_HOSTNAME + "/" + back_url.replace(/\\/g, "/");
   
  console.log(back);

const ProfileBlock: FC<IProfile> = ({ id }) => {

  const [file,setFile]=useState<File>()

  const ChangeFiles =(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files) setFile(e.target.files[0])
 }


  return (
    <div className={styles.profile}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${back})`,
        }}
      ></div>
      <div className={styles.editBg}>
        <AddBlog id="5" type="file" text='' onChangeAdd={(e)=>ChangeFiles(e)} icon={<TbPhotoEdit style={{color:'white'}}/>}/>
      </div>
      
      <div className={styles.wrapper}>
        <div className={styles.profilePhoto}>
          <Avatar
            url={import.meta.env.VITE_APP_API_HOSTNAME + "/" + avatar_url}
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
            <Button variant='BorderBlack' icon={<TbSettings />}>
              Edit profile
            </Button>
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
    </div>
  );
};

export default ProfileBlock;
