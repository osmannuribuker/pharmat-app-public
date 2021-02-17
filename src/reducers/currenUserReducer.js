import * as types from "../actions";

export default function currenUserReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.CURRENT_USER_SUCCESS:
      return { ...state, response };
    case types.CURRENT_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
