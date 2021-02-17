import * as types from "../actions";

export default function loginReducer(state = [], action) {
  const response = action.response;
  const loading = false;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response, loading };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
