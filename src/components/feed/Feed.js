import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  console.log(posts.length);

  useEffect(() => {
    const getTimeLinePosts = async () => {
      const res = await axios(`/posts/timeline/${user._id}`);
      setPosts(res.data.data);
    };
    getTimeLinePosts();
  }, [setPosts, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
