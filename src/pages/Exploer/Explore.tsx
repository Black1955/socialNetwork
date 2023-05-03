import { FC } from "react"
import styles from './Explore.module.scss'
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
const Explore :FC = () => {
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
          text: "For you",
          name: "For you",
          value: "For you",
          onChange: (arg: any) => {},
        },
        {
          text: "Popular",
          name: "Popular",
          value: "Popular",
          onChange: (arg: any) => {},
        },
        {
          text: "New",
          name: "New",
          value: "New",
          onChange: (arg: any) => {},
        },
        {
          text: "Your tags",
          name: "Your tags",
          value: "Your tags",
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
        <div>
              <ProfileList profiles={profiles} title='Check out  these blogs' width={290}/>
              <Posts tabs={tabs} posts={mockPosts} />
        </div>
    )
}
export default Explore;