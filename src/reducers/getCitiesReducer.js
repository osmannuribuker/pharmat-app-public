import * as types from "../actions";

export default function getCitiesReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.GET_CITIES_SUCCESS:
      return { ...state, response };
    case types.GET_CITIES_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
