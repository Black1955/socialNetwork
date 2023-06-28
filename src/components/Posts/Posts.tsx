import { FC, useEffect, useState } from "react";
import { IPosts } from "./IPosts";
import Tab from "../../ui/Tab/Tab";
import styles from "./Posts.module.scss";
import Post from "../Post/Post";
import { useGetPostsQuery } from "../../services/post";
import { addHostName } from "../../helpFunctions/addHostname";
const Posts: FC<IPosts> = ({ tabs, id }) => {
  const [valueTab, setValueTab] = useState<string>(tabs[0].value);
  const { data, isLoading } = useGetPostsQuery({
    id,
    limit: "10",
    page: "0",
    type: valueTab,
  });
  useEffect(() => {}, [valueTab]);
  if (isLoading) {
    return <h1>oleg</h1>;
  }
  return (
    <div className={styles.tabs}>
      <div style={{ display: "flex" }}>
        {tabs.map(tab => (
          <Tab
            name={tab.name}
            text={tab.text}
            value={tab.value}
            selectedValue={valueTab}
            key={tab.value}
            onChange={setValueTab}
          />
        ))}
      </div>
      <div className={styles.posts}>
        {data ? (
          data.map(post => (
            <Post
              id={post.id}
              comented={post.comented}
              coments={post.coments}
              description={post.description}
              folowed={post.folowed}
              img_url={addHostName(post.img_url)}
              liked={post.liked}
              likes={post.likes}
              title={post.title}
              time={post.time}
              key={post.id}
              userId={post.userId}
            />
          ))
        ) : (
          <h2>there aren`t any posts</h2>
        )}
      </div>
    </div>
  );
};

export default Posts;
