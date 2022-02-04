import CelebrationIcon from "@mui/icons-material/Celebration";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Following from "../following/Following";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ isProfilePage }) {
  const { user } = useContext(AuthContext);
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <CelebrationIcon
            className="birthdayImg"
            style={{ fontSize: "40px" }}
          />
          <span className="birthdayText">
            <em>Person Test</em> and <em>3 others</em> have a birthday today
          </span>
        </div>
        <img src="post.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <Online />
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.country}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship ? "Married" : "Single"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {user.following.map((userId, indx) => {
            return <Following userId={userId} key={indx} />;
          })}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {isProfilePage ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
