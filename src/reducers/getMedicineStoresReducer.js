import * as types from "../actions";

export default function getMedicineStoresReducer(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.GET_MEDICINE_STORES_SUCCESS:
      return { ...state, response };
    case types.GET_MEDICINE_STORES_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
