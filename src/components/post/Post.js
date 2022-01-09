import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecommendIcon from "@mui/icons-material/Recommend";
import axios from "axios";
import { useState, useEffect } from "react";
import "./post.css";

export default function Post(post) {
  const userId = post.post.userId;

  const [profilePic, setProfilePic] = useState("");
  const [userName, setUsername] = useState("");
  useEffect(() => {
    const getProfilePic = async (userId) => {
      try {
        const res = await axios.get(`/users/${userId}`);
        setProfilePic(res.data.data.profilePic);
        setUsername(res.data.data.firstName + " " + res.data.data.lastName);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProfilePic(userId);
  });
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profilePic} alt="profile" className="postProfileImg" />
            <span className="postUsername">{userName}</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post.post.comment} </span>
          <img className="postImg" src="/post.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <RecommendIcon className="likeIcon" />
            <FavoriteIcon className="likeIcon" />
            <span className="postLikeCounter">{post.post.likes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
