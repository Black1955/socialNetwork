import { FC } from "react";
import AddBlogList from "../../components/AddBlogList/AddBlogList";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./Home.module.scss";
import Posts from "../../components/Posts/Posts";
import Post from "../../components/Post/Post";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import { addHostName } from "../../helpFunctions/addHostname";
import { useRecomendUserQuery } from "../../services/user";
import ProfileList from "../../components/ProfileList/ProfileList";
const Home: FC = () => {
  const { avatar_url, id } = useAppSelector(state => state.auth.user!);
  const { data, isLoading } = useRecomendUserQuery(id);
  const tabs = [
    {
      text: "Following",
      name: "home",
      value: "following",
      onChange: () => {},
    },
    {
      text: "Popular",
      name: "home",
      value: "popular",
      onChange: () => {},
    },
    {
      text: "New",
      name: "home",
      value: "new",
      onChange: () => {},
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.blockAdd}>
          <div className={styles.mr}>
            <Avatar
              width={70}
              height={70}
              url={addHostName(avatar_url)}
              userId={id}
            />
          </div>
          <AddBlogList />
        </div>
        <Posts tabs={tabs} id={id} />
      </div>
      <div className={styles.right}>
        <ProfileList
          title='Check out this blogs'
          profiles={data}
          loading={isLoading}
        />

        <div>
          <h2 className={styles.title2}>Recomended for you</h2>
          <div className={styles.blog}>
            <Post
              id={5}
              title='Hooray'
              description='Description of post 4'
              likes={40}
              liked={false}
              img_url='https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?cs=srgb&dl=pexels-alex-andrews-2295744.jpg&fm=jpg'
              time='2 hours ago'
              comented={false}
              folowed={false}
              coments={[]}
              userId={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
