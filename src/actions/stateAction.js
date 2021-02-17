import * as types from "./index";

export const getStatesAction = (states) => {
  return {
    type: types.GET_STATES,
    states,
  };
};
