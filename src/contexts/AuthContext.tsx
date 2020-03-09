import React, { createContext, useReducer } from "react";
import { LoginAction2, LogoutAction } from "../services/Auth";
import { authReducer } from "../reducers/authReducer";
import { AuthContaxtTypes } from "../assets/types/Types";
import history from "../assets/history/history";

export const AuthContext = createContext({} as AuthContaxtTypes);

const AuthContextProvider = (props: any) => {
  const Userstate = {
    isAuthentificated: false,
    userName: "",
    password: "",
    errors: "",
    token: ""
  };
  const [user, dispatch] = useReducer(authReducer, Userstate, () => {
    return {
      ...Userstate,
      isAuthentificated: localStorage.getItem("token") ? true : false
    };
  });

  const onChange = (e: any) => {
    dispatch({
      type: "ONCHANGE",
      payload: e.target
    });
  };

  /*
  Login
*/
  const Login = async (
    e: { preventDefault: () => void },
    lastLocation: string
  ) => {
    e.preventDefault();
    const User = {
      userName: user.userName,
      password: user.password
    };
    dispatch(LoginAction2(User));
    // lastLocation ? history.push(lastLocation) : history.push("/App/home");
  };

  /*
  Logout
*/
  const Logout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    LogoutAction(dispatch);
  };

  return (
    <AuthContext.Provider
      value={{
        ...user,
        Login: Login,
        Logout: Logout,
        onChange: onChange
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
