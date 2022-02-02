import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import { CircularProgress } from "@mui/material";
import { registerCall } from "../../apiCalls";

export default function Register() {
  const { isFetching, dispatch } = useContext(AuthContext);
  const usernameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const passwordConfirmElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerCall(
      {
        email: emailElement.current.value,
        password: passwordElement.current.value,
      },
      dispatch
    );
  };

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
          <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="username"
              className="registerInput"
              ref={usernameElement}
            />
            <input
              type="email"
              placeholder="email"
              className="registerInput"
              ref={emailElement}
            />
            <input
              type="password"
              placeholder="password"
              className="registerInput"
              ref={passwordElement}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="registerInput"
              ref={passwordConfirmElement}
            />
            <button
              type="submit"
              className="registerButton"
              disabled={isFetching}
            >
              {isFetching ? <CircularProgress /> : "Sign Up"}
            </button>
            <Link to="/login">
              <button className="registerRegisterButton">
                Log in to account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
