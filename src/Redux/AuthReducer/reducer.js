import * as types from "./action.type.js";
import { saveData } from "../../utils/LocalStorage";
const inialState = {
  isAuth: false,
  token:  "",
  isLoading: false,
  isError: false,
  isRegister: false,
};
export const reducer = (state = inialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegister: true,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      saveData("token", payload);
      saveData("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.LOGOUT_SUCCESS:
      saveData("token", "");
      saveData("isAuth", false);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
      };

    default:
      return state;
  }
};
