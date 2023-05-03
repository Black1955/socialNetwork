import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import ProfileBlock from "../../components/Profile/ProfileBlock";
import styles from "./Profile.module.scss";
const Profile: FC = () => {
  const profiles = [
    { userName: "oleg", desc: "hallo, I am oleg" },
    { userName: "aboba", desc: "hallo, I am oleg" },
    { userName: "alex", desc: "hallo, I am oleg" },
    { userName: "max", desc: "hallo, I am oleg" },
    { userName: "aleX", desc: "hallo, I am oleg" },
    { userName: "alwx", desc: "hallo, I am oleg" },
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
      imgUrl: "https://picsum.photos/id/1/200/200",
      time: "2 hours ago",
      liked: false,
      comented: false,
      folowed: false,
      coments: [],
    },
    {
      id: "4",
      name: "Post 4",
      description: "Description of post 4",
      likes: 40,
      imgUrl: "https://picsum.photos/id/4/200/200",
      time: "4 hours ago",
      liked: true,
      comented: false,
      folowed: true,
      coments: [],
    },
    {
      id: "3",
      name: "Post 5",
      description: "Description of post 4",
      likes: 40,
      imgUrl: "https://picsum.photos/id/4/200/200",
      time: "4 hours ago",
      liked: true,
      comented: false,
      folowed: true,
      coments: [],
    },
  ];
  return (
    <div className={styles.profile}>
      <ProfileBlock id='q' />
      <div>
        <Posts tabs={tabs} posts={mockPosts} />
        <ProfileList profiles={profiles} title='recomend for you' />
      </div>
    </div>
  );
};

export default Profile;
