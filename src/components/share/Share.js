import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { createPostCall } from "../../apiCalls";
import { PostContext } from "../../context/PostContext";

export default function Share() {
  const shareInputElement = useRef();
  const { user } = useContext(AuthContext);
  const { isSuccess, isSharing, commentDispatch } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shareInputElement.current.value);
    createPostCall(
      { userId: user._id, comment: shareInputElement.current.value },
      commentDispatch
    );
    shareInputElement.current.value = "";
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user.profilePic}
            alt="profile pic"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            ref={shareInputElement}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
