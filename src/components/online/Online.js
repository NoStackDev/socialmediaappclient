import "./online.css";

export default function Online() {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src="person.jpg" alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">John Carter</span>
    </li>
  );
}
