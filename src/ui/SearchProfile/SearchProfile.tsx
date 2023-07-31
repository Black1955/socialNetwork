import { FC } from "react";
import { IsearchRes } from "../../services/users_types";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import styles from "./searchProfile.module.scss";
import { addHostName } from "../../helpFunctions/addHostname";
const SearchProfile: FC<IsearchRes> = ({ nickname, id, avatar_url }) => {
  return (
    <Link to={`/profile/${id}`}>
      <div className={styles.searchProfile}>
        <Avatar
          userId={id}
          url={addHostName(avatar_url)}
          height={30}
          width={30}
        />
        <div className={styles.nickname}>{nickname}</div>
      </div>
    </Link>
  );
};

export default SearchProfile;
