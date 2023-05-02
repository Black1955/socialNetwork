import { FC } from "react";
import { IProfileList } from "./IProfileList";
import styles from "./ProfileList.module.scss";
import RecommendedBlog from "../../ui/RecommendedBlog/RecommendedBlog";
const ProfileList: FC<IProfileList> = ({ title, profiles }) => {
  return (
    <div className={styles.profileList}>
      <div className={styles.title}>{title}</div>
      <div className={styles.profiles}>
        {profiles.map(profile => (
          <RecommendedBlog
            desc={profile.desc}
            userName={profile.userName}
            key={profile.userName}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
