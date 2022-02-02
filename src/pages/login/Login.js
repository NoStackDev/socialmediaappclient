import "./login.css";
import { useRef, useContext } from "react";
import axios from "axios";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

export default function Login() {
  const emailElement = useRef();
  const passwordElement = useRef();

  const { user, isFetching, registered, error, dispatch } =
    useContext(AuthContext);

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: emailElement.current.value,
        password: passwordElement.current.value,
      },
      dispatch
    );
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
            <button type="submit" className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
                Create a new account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
