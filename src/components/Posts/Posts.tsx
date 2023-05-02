import { FC, useEffect, useState } from "react";
import { IPosts } from "./IPosts";
import Tab from "../../ui/Tab/Tab";
import Post from "../Post/Post";
const Posts: FC<IPosts> = ({ tabs, posts }) => {
  const [valueTab, setValueTab] = useState<string>(tabs[0].value);

  useEffect(() => {
    console.log(valueTab);
  }, [valueTab]);

  return (
    <div>
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
      <div>
        {posts ? (
          posts.map(post => (
            <Post
              id={post.id}
              comented={post.comented}
              coments={post.coments}
              description={post.description}
              folowed={post.folowed}
              imgUrl={post.imgUrl}
              liked={post.liked}
              likes={post.likes}
              name={post.name}
              time={post.time}
              key={post.id}
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
