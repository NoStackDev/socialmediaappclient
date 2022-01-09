import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">FriendBook</h3>
          <span className="registerDesc">
            Connect with the world and friends around you.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="username"
              className="registerInput"
            />
            <input type="email" placeholder="email" className="registerInput" />
            <input
              type="password"
              placeholder="password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="confirm password"
              className="registerInput"
            />
            <button className="registerButton">Sign Up</button>
            <button className="registerRegisterButton">
              Log in to account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
