import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./following.css";

export default function Following({ userId }) {
  const [followingUser, setFollowingUser] = useState("");

  useEffect(() => {
    const getUser = async (userId) => {
      try {
        const res = await axios(`/users/${userId}`);
        setFollowingUser(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser(userId);
  }, [userId]);

  return (
    <div className="rightbarFollowing">
      <img
        src={followingUser.profilePic}
        alt="profile"
        className="rightbarFollowingImg"
      />
      <span className="rightbarFollowingName">
        {followingUser.firstName + " " + followingUser.lastName}
      </span>
    </div>
  );
}
