import * as types from "../actions";

export default function productReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, ...response };
    case types.GET_PRODUCT_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
