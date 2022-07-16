import * as types from "./action.type.js";
const inialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isAdd: false,
};
export const reducer = (state = inialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODOS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_TODOS_DATA_SUCCESS:
      let addData = { ...state, payload };
      return {
        ...state,
        isLoading: false,
        isAdd: true,
        todos: addData,
      };
    case types.ADD_TODOS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_TODOS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TODOS_DATA_SUCCESS:
      
      return {
        ...state,
        isLoading: false,
        todos: payload,
        isError: false,
      };
    case types.GET_TODOS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
