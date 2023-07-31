import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
const Explore: FC = () => {
  const profiles = [
    {
      nickname: "oleg",
      description: "hallo, I am oleg",
      id: 1,
      avatar_url: "",
    },
    {
      nickname: "aboba",
      description: "hallo, I am oleg",
      id: 3,
      avatar_url: "",
    },
    {
      nickname: "alex",
      description: "hallo, I am oleg",
      id: 2,
      avatar_url: "",
    },
    { nickname: "max", description: "hallo, I am oleg", id: 5, avatar_url: "" },
    {
      nickname: "aleX",
      description: "hallo, I am oleg",
      id: 7,
      avatar_url: "",
    },
    {
      nickname: "alwx",
      description: "hallo, I am oleg",
      id: 8,
      avatar_url: "",
    },
  ];
  const tabs = [
    {
      text: "Popular",
      name: "explore",
      value: "popular",
      onChange: () => {},
    },
    {
      text: "New",
      name: "explore",
      value: "new",
      onChange: () => {},
    },
    {
      text: "Your tags",
      name: "explore",
      value: "Your tags",
      onChange: () => {},
    },
  ];
  const { id } = useAppSelector(state => state.auth.user!);
  return (
    <div>
      <ProfileList profiles={profiles} title='Check out  these blogs' />
      <Posts tabs={tabs} id={id} />
    </div>
  );
};
export default Explore;
