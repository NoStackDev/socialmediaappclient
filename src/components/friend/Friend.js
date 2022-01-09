import "./friend.css";

export default function Friend() {
  return (
    <li className="sidebarFriend">
      <img
        src="person.jpg"
        alt="friend profile pic"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">Jane Doe</span>
    </li>
  );
}
