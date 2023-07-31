import { FC } from "react";
import { IProfileList } from "./IProfileList";
import styles from "./ProfileList.module.scss";
import RecommendedBlog from "../../ui/RecommendedBlog/RecommendedBlog";
import Skeleton from "../../ui/RecommendedBlog/Skeleton";
const ProfileList: FC<IProfileList> = ({ title, profiles, loading }) => {
  return (
    <div className={styles.profileList}>
      <div className={styles.title}>{title}</div>
      <div className={styles.profiles}>
        {profiles &&
          profiles.map(profile => (
            <RecommendedBlog
              description={profile.description}
              nickname={profile.nickname}
              key={profile.id}
              id={profile.id}
              avatar_url={profile.avatar_url}
            />
          ))}
        {loading && [...Array(3).keys()].map(item => <Skeleton key={item} />)}
      </div>
    </div>
  );
};

export default ProfileList;
