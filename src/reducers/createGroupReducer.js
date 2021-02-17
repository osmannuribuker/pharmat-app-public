import * as types from "../actions";

export default function createGroupReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.CREATE_GROUP_SUCCESS:
      return { ...state, ...response };
    case types.CREATE_GROUP_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
