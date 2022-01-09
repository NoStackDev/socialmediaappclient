import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios("/posts");
      setPosts(res.data.data);
    };
    console.log("fetching posts");
    getPosts();
  }, [setPosts]);
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
