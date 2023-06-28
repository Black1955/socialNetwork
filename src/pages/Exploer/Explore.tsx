import { FC } from "react";
import Posts from "../../components/Posts/Posts";
import ProfileList from "../../components/ProfileList/ProfileList";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
const Explore: FC = () => {
  const profiles = [
    { userName: "oleg", desc: "hallo, I am oleg", userId: 4 },
    { userName: "aboba", desc: "hallo, I am oleg", userId: 3 },
    { userName: "alex", desc: "hallo, I am oleg", userId: 9 },
    { userName: "max", desc: "hallo, I am oleg", userId: 11 },
    { userName: "aleX", desc: "hallo, I am oleg", userId: 0 },
    { userName: "alwx", desc: "hallo, I am oleg", userId: 123 },
  ];
  const tabs = [
    {
      text: "Popular",
      name: "explore",
      value: "popular",
      onChange: (arg: any) => {},
    },
    {
      text: "New",
      name: "explore",
      value: "new",
      onChange: (arg: any) => {},
    },
    {
      text: "Your tags",
      name: "explore",
      value: "Your tags",
      onChange: (arg: any) => {},
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
