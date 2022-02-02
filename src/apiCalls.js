import axios from "axios";

export const loginCall = async ({ email, password }, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/login", {
      email,
      password,
    });
    dispatch({ type: "LOGIN_SUCCESSFUL", payload: res.data.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    console.log(err);
  }
};

export const registerCall = async ({ username, email, password }, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/signup", {
      email,
      password,
    });
    dispatch({ type: "REGISTRATION_SUCCESSFUL", payload: res.data.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    console.log(err.message);
  }
};
