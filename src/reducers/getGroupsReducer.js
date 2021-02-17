import * as types from "../actions";

export default function getGroupsReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.GET_GROUPS_SUCCESS:
      return { ...state, response };
    case types.GET_GROUPS_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
