import * as types from "./index";

export const getCitiesAction = (cities) => {
  return {
    type: types.GET_CITIES,
    cities,
  };
};
