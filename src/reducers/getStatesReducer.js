import * as types from "../actions";

export default function getStatesReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.GET_STATES_SUCCESS:
      return { ...state, response };
    case types.GET_STATES_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
