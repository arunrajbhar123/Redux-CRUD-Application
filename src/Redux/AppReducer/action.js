import * as types from "./action.type.js";
import axios from "axios";

export const setTodoPost = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TODOS_DATA_REQUEST });
  return axios
    .post("http://localhost:8080/todos", payload)
    .then((res) => {
      dispatch({ type: types.ADD_TODOS_DATA_SUCCESS });
      getTodoGet();
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TODOS_DATA_FAILURE });
    });
};

export const getTodoGet = (payload) => (dispatch) => {
  dispatch({ type: types.GET_TODOS_DATA_REQUEST });
  return axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: types.GET_TODOS_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_TODOS_DATA_FAILURE });
    });
};
