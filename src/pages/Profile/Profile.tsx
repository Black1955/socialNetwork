import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import ProfileBlock from "../../components/Profile/ProfileBlock";
import styles from "./Profile.module.scss";
import { useGetUserQuery } from "../../services/user";
import { useNavigate } from "react-router-dom";
const Profile: FC = () => {
  const navigate = useNavigate();
  const profiles = [
    { userName: "oleg", desc: "hallo, I am oleg", userId: "qwe" },
    { userName: "aboba", desc: "hallo, I am oleg", userId: "qwe" },
    { userName: "alex", desc: "hallo, I am oleg", userId: "qwe" },
    { userName: "max", desc: "hallo, I am oleg", userId: "qwe" },
    { userName: "aleX", desc: "hallo, I am oleg", userId: "qwe" },
    { userName: "alwx", desc: "hallo, I am oleg", userId: "qwe" },
  ];
  const tabs = [
    {
      text: "Tab 1 content",
      name: "Tab 1",
      value: "tab1",
      onChange: (arg: any) => {},
    },
    {
      text: "Tab 2 content",
      name: "Tab 2",
      value: "tab2",
      onChange: (arg: any) => {},
    },
    {
      text: "Tab 3 content",
      name: "Tab 3",
      value: "tab3",
      onChange: (arg: any) => {},
    },
    {
      text: "Tab 4 content",
      name: "Tab 4",
      value: "tab4",
      onChange: (arg: any) => {},
    },
  ];
  const mockPosts = [
    {
      id: "1",
      name: "Post 1",
      description: "Description of post 1",
      likes: 10,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg2I3K3dr3G5IXOyTXa0xdYtRzyUj3CpOR99dgwIaPEFNnGPjbcg3QmYabhJ-wffx-5c&usqp=CAU",
      time: "2 hours ago",
      liked: false,
      comented: false,
      folowed: false,
      coments: [],
      userId: "qew",
    },
    {
      id: "4",
      name: "Post 4",
      description: "Description of post 4",
      likes: 40,
      imgUrl:
        "https://img.freepik.com/premium-photo/jaguar-is-jungle-with-green-background_867452-2179.jpg",
      time: "4 hours ago",
      liked: true,
      comented: false,
      folowed: true,
      coments: [],
      userId: "qew",
    },
    {
      id: "3",
      name: "Post 5",
      description: "Description of post 4",
      likes: 40,
      imgUrl:
        "https://img.freepik.com/free-photo/animal-nature-feline-mammal-undomesticated-cat-animals-in-the-wild-bengal-tiger-generative-ai_188544-9405.jpg",
      time: "4 hours ago",
      liked: true,
      comented: false,
      folowed: true,
      coments: [],
      userId: "qew",
    },
  ];
  const { data, isFetching, isLoading, error } = useGetUserQuery("illia");
  if (isFetching || isLoading) {
    return <h1>oleg</h1>;
  }
  if (error) {
    navigate("/signin");
  }
  return (
    <div className={styles.profile}>
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
        <Posts tabs={tabs} posts={mockPosts} />
        <div style={{ width: "400px" }}>
          <ProfileList profiles={profiles} title='Recomend for you' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
