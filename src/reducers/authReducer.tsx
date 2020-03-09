import { LoginAction } from "../services/Auth";

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCES":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload,
        isAuthentificated: true
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        errors: action.payload,
        isAuthentificated: false
      };
    case "LOGOUT_SUCCES":
      return {
        ...state,
        isAuthentificated: false
      };
    case "ONCHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
};
