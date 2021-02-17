import {
  GET_PHARMACY,
  CREATE_PHARMACY,
  UPDATE_PHARMACY,
  LIST_PHARMACY,
} from "./index";

export const getPharmacyAction = (pharmacy) => {
  return {
    type: GET_PHARMACY,
    pharmacy,
  };
};

export const listPharmacyAction = (pharmacies) => {
  return {
    type: LIST_PHARMACY,
    pharmacies,
  };
};

export const createPharmacyAction = (pharmacy, success, error) => {
  return {
    type: CREATE_PHARMACY,
    pharmacy,
    success,
    error,
  };
};

export const updatePharmacyAction = (pharmacy, pk, success, error) => {
  return {
    type: UPDATE_PHARMACY,
    pharmacy,
    pk,
    success,
    error,
  };
};
