import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { PostContext, PostContextProvider } from "../../context/PostContext";

const PostFeed = () => {
  const { user } = useContext(AuthContext);
  const { isSuccess } = useContext(PostContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTimeLinePosts = async () => {
      const res = await axios(`/posts/timeline/${user._id}`);
      setPosts(res.data.data);
    };
    getTimeLinePosts();
  }, [user._id, isSuccess]);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default function Feed({ isProfilePage }) {
  return (
    <PostContextProvider>
      <div className="feed">
        <div className="feedWrapper">
          {isProfilePage ? <></> : <Share />}
          <PostFeed />
        </div>
      </div>
    </PostContextProvider>
  );
}
