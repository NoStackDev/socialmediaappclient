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
    console.log(err);
  }
};
