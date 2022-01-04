import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post.jpg" alt="" className="profileCoverImg" />
              <img src="assets/person.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Zino</h4>
              <span className="profileInfoDesc">
                Hello World, Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit tempora dolorum tenetur voluptatum, quidem
                eos magnam nulla dolores optio. Eligendi tempora quis quia
                aliquam voluptatem provident aut fugiat hic ea!.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
