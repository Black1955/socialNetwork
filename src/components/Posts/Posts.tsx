import { FC, useEffect, useState } from "react";
import { IPosts } from "./IPosts";
import Tab from "../../ui/Tab/Tab";
import styles from "./Posts.module.scss";
import Post from "../Post/Post";
import {
  useDisLikePostMutation,
  useGetPostsQuery,
  useLikePostMutation,
} from "../../services/post";
import { addHostName } from "../../helpFunctions/addHostname";
import { IPost } from "../Post/IPost";
import useOnScreen from "../../hooks/usePagination";
import Skeleton from "../Post/Skeleton";
const Posts: FC<IPosts> = ({ tabs, id }) => {
  const [post, setPost] = useState<IPost[]>([]);
  const [valueTab, setValueTab] = useState<string>(tabs[0].value);
  const [page, setPage] = useState(0);
  const [like] = useLikePostMutation();
  const [disLike] = useDisLikePostMutation();
  const handleLike = async (post_id: number, liked: boolean) => {
    try {
      if (liked) {
        const likes = await disLike({ post_id }).unwrap();
        setPost(prevPosts =>
          prevPosts.map(post =>
            post.id === post_id
              ? { ...post, likes: likes.likes, liked: !liked }
              : post
          )
        );
      } else {
        const likes = await like({ post_id }).unwrap();
        setPost(prevPosts =>
          prevPosts.map(post =>
            post.id === post_id
              ? { ...post, likes: likes.likes, liked: !liked }
              : post
          )
        );
      }
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  useEffect(() => {
    setPost([]);
    setPage(0);
  }, [valueTab]);
  const { data: posts, isLoading } = useGetPostsQuery({
    id,
    limit: "5",
    page: page,
    type: valueTab,
  });
  const [ref, isVisible] = useOnScreen(isLoading);

  useEffect(() => {
    if (post && isVisible) {
      setPage(last => (last += posts?.length!));
    }
  }, [isVisible]);

  useEffect(() => {
    if (posts) {
      setPost(prev => [...prev, ...posts]);
    }
  }, [posts]);

  return (
    <div>
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
      </div>
      <div className={styles.posts}>
        {post &&
          post.map(post => (
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
              setLiked={() => handleLike(post.id, post.liked)}
            />
          ))}
      </div>
      {isLoading && [...Array(4).keys()].map(elem => <Skeleton key={elem} />)}
      {!isLoading && post && (
        <div ref={ref}>there aren`t any new posts for you</div>
      )}
    </div>
  );
};

export default Posts;
