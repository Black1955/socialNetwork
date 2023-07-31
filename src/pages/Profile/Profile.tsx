import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import ProfileBlock from "../../components/Profile/ProfileBlock";
import styles from "./Profile.module.scss";
import { useGetUserQuery, useRecomendUserQuery } from "../../services/user";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import Skeleton from "../../components/Profile/Skeleton";
const Profile: FC = () => {
  const { id: myId } = useAppSelector(state => state.auth.user!);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, isLoading, error } = useGetUserQuery(id);
  const { data: profiles } = useRecomendUserQuery(myId);
  const tabs = [
    {
      text: "blog",
      name: "profile",
      value: "blog",
      onChange: () => {},
    },
    {
      text: "liked",
      name: "profile",
      value: "liked",
      onChange: () => {},
    },
  ];

  // @ts-ignore
  if (error && error.status == 401) {
    navigate("/signin");
  }
  return (
    <>
      {data && (
        <ProfileBlock
          avatar_url={data.avatar_url}
          back_url={data.back_url}
          description={data.description}
          email={data.email}
          followers={data.followers}
          following={data.following}
          id={data.id}
          name={data.name}
          nickname={data.nickname}
          followed={data.subscribed}
        />
      )}

      {(isFetching || isLoading) && <Skeleton />}
      <div className={styles.content}>
        <Posts tabs={tabs} id={id} />
        <div style={{ width: "400px" }}>
          <ProfileList profiles={profiles} title='Recomend for you' />
        </div>
      </div>
    </>
  );
};

export default Profile;
