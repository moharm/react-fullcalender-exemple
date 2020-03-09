import axios from "axios";

import history from "../assets/history/history";

interface UserType {
  userName: string;
  password: string;
}

export const LoginAction2 = async (user: UserType) => {
  try {
    const res = await axios.post("/authenticate", user);
    return {
      type: "LOGIN_SUCCES",
      payload: res.data
    };
  } catch (error) {
    return {
      type: "LOGIN_FAILED",
      payload: "error.response.data"
    };
  }
};

export const LoginAction = async (
  lastLocation: string,
  user: UserType,
  dispatch: any
) => {
  try {
    const res = await axios.post("/authenticate", user);
    dispatch({
      type: "LOGIN_SUCCES",
      payload: res.data
    });
    lastLocation ? history.push(lastLocation) : history.push("/App/home");
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: "error.response.data"
    });
  }
};

export const LogoutAction = (dispatch: any) => {
  localStorage.setItem("token", "");
  history.push("/login");
  dispatch({
    type: "LOGOUT_SUCCES",
    payload: {}
  });
};
