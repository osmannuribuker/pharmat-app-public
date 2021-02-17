import * as types from "../actions";

export default function getPharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.GET_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.GET_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
/*
export default function listPharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.LIST_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.LIST_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}

export default function createPharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.CREATE_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.CREATE_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}

export default function updatePharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.UPDATE_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.UPDATE_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
*/
