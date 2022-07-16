import axios from "axios";
import * as types from "./action.type";
const fghd = {
  name: "MASAI School",
  email: "hello@masai.com",
  password: "secret",
  username: "masai-school",
  mobile: "9876543210",
  description: "A Transformation in education!",
};
const pass = {
  password: "secret",
  username: "masai-school",
};
export const getRegister = (payload) => (dispatch) => {
  dispatch({ type: types.GET_USER_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", fghd)
    .then((r) => {
      dispatch({ type: types.GET_USER_SUCCESS });

      return types.GET_USER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_USER_FAILURE });
      return types.GET_USER_FAILURE;
    });
};

export const getLogin = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", pass)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
      return types.LOGIN_FAILURE;
    });
};

export const logoutSuccess = () => (dispatch) => {
  dispatch({ type: types.LOGOUT_SUCCESS });
};
