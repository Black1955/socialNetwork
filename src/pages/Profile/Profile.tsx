import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import styles from "./Profile.module.scss";
const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <Profile />
      <div>
        <Posts tabs={[]} posts={[]} />
        <ProfileList profiles={[]} title='' />
      </div>
    </div>
  );
};

export default Profile;
