import { FC } from "react";
import AddBlogList from "../../components/AddBlogList/AddBlogList";
import Avatar from "../../ui/Avatar/Avatar";
import styles from "./Home.module.scss";
import Posts from "../../components/Posts/Posts";
import RecommendedBlog from "../../ui/RecommendedBlog/RecommendedBlog";
import Post from "../../components/Post/Post";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import { addHostName } from "../../helpFunctions/addHostname";
import { useRecomendUserQuery } from "../../services/user";
const Home: FC = () => {
  const { avatar_url, id } = useAppSelector(state => state.auth.user!);
  const { data } = useRecomendUserQuery(id);
  const tabs = [
    {
      text: "Following",
      name: "home",
      value: "following",
      onChange: (arg: any) => {},
    },
    {
      text: "Popular",
      name: "home",
      value: "popular",
      onChange: (arg: any) => {},
    },
    {
      text: "New",
      name: "home",
      value: "new",
      onChange: (arg: any) => {},
    },
  ];
  console.log(data);
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
        <div>
          <h2 className={styles.title}>Check out this blogs</h2>
          <div>
            <div className={styles.blog}>
              <RecommendedBlog userName='Maks' desc='My manager Denis' />
            </div>

            <div className={styles.blog}>
              <RecommendedBlog userName='Maks' desc='My manager Denis' />
            </div>
            <div className={styles.blog}>
              <RecommendedBlog userName='Maks' desc='My manager Denis' />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title2}>Recomended for you</h2>
          <div>
            <div className={styles.blog}>
              <Post
                id='5'
                name='Hooray'
                description='Description of post 4'
                likes={40}
                liked={false}
                imgUrl=''
                time='2 hours ago'
                comented={false}
                folowed={false}
                coments={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
