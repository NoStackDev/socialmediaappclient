import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

import axios from "axios";
import { useState, useEffect } from "react";
import "./post.css";
import * as timeago from "timeago.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const FavoriteButton = ({ userId, postId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const getFavoriteData = async () => {
      try {
        const res = await axios(`/posts/${postId}`);
        setIsLiked(res.data.data.likedBy.includes(userId));
        setLikeCount(res.data.data.likedBy.length);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFavoriteData();
  }, [postId, userId]);

  const handleClick = async (e) => {
    try {
      const res = await axios.post(`/posts/${postId}/like`, { userId: userId });
      setIsLiked(res.data.data.likedBy.includes(userId));
      isLiked
        ? setLikeCount(() => likeCount - 1)
        : setLikeCount(() => likeCount + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="postBottomLeft">
      {isLiked ? (
        <FavoriteIcon
          sx={{ color: red[800] }}
          className="likeIcon"
          onClick={(e) => handleClick(e)}
        />
      ) : (
        <FavoriteIcon className="likeIcon" onClick={(e) => handleClick(e)} />
      )}
      <span className="postLikeCounter">{likeCount}</span>
    </div>
  );
};

export default function Post({ post }) {
  const { user } = useContext(AuthContext);
  const userId = user._id;
  const postUserId = post.userId;

  const [profilePic, setProfilePic] = useState("");
  const [userName, setUsername] = useState("");
  useEffect(() => {
    const getProfilePic = async (userId) => {
      try {
        const res = await axios.get(`/users/${postUserId}`);
        setProfilePic(res.data.data.profilePic);
        setUsername(res.data.data.firstName + " " + res.data.data.lastName);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProfilePic(postUserId);
  }, [postUserId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profilePic} alt="profile" className="postProfileImg" />
            <span className="postUsername">{userName}</span>
            <span className="postDate">{timeago.format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post.comment} </span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <FavoriteButton userId={userId} postId={post._id} />
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
