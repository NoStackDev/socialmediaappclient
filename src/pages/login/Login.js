import "./login.css";
import { useRef } from "react";
import axios from "axios";

export default function Login() {
  const emailElement = useRef();
  const passwordElement = useRef();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = async () => {
      try {
        const res = await axios.post("/login", {
          email: emailElement.current.value,
          password: passwordElement.current.value,
        });
        console.log(res.ok);
        console.log(res.data.message);
      } catch (err) {
        // console.log(err.response.data);
      }
    };
    submitData();
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FriendBook</h3>
          <span className="loginDesc">
            Connect with the world and friends around you.
          </span>
        </div>
        <div className="loginRight">
          <form
            className="loginBox"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="email"
              placeholder="email"
              className="loginInput"
              ref={emailElement}
            />
            <input
              type="password"
              placeholder="password"
              className="loginInput"
              ref={passwordElement}
            />
            <button type="submit" className="loginButton">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
