import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecommendIcon from "@mui/icons-material/Recommend";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person.jpg" alt="" className="postProfileImg" />
            <span className="postUsername">Test User</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! It's my first post</span>
          <img className="postImg" src="/assets/post.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <RecommendIcon className="likeIcon" />
            <FavoriteIcon className="likeIcon" />
            <span className="postLikeCounter">32 people</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
