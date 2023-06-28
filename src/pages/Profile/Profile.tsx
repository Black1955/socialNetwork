import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import ProfileBlock from "../../components/Profile/ProfileBlock";
import styles from "./Profile.module.scss";
import { useGetUserQuery } from "../../services/user";
import { useNavigate, useParams } from "react-router-dom";
const Profile: FC = () => {
  const navigate = useNavigate();
  const profiles = [
    { userName: "oleg", desc: "hallo, I am oleg", userId: 1 },
    { userName: "aboba", desc: "hallo, I am oleg", userId: 3 },
    { userName: "alex", desc: "hallo, I am oleg", userId: 2 },
    { userName: "max", desc: "hallo, I am oleg", userId: 5 },
    { userName: "aleX", desc: "hallo, I am oleg", userId: 7 },
    { userName: "alwx", desc: "hallo, I am oleg", userId: 8 },
  ];
  const tabs = [
    {
      text: "blog",
      name: "profile",
      value: "blog",
      onChange: (arg: any) => {},
    },
    {
      text: "liked",
      name: "profile",
      value: "liked",
      onChange: (arg: any) => {},
    },
  ];

  const { id } = useParams();
  const { data, isFetching, isLoading, error } = useGetUserQuery(id);
  //
  // @ts-ignore
  console.log(data);
  if (error && error.status == 401) {
    navigate("/signin");
  }
  return (
    <div className={styles.profile}>
      {isFetching || isLoading ? (
        <h1>oleg</h1>
      ) : (
        <>
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
          />
          <div className={styles.content}>
            <Posts tabs={tabs} id={id} />
            <div style={{ width: "400px" }}>
              <ProfileList profiles={profiles} title='Recomend for you' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
