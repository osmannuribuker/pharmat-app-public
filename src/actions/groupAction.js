import * as types from "./index";

export const getGroupsAction = (success) => {
  return {
    type: types.GET_GROUPS,
    success,
  };
};

export const createGroupAction = (group, success, error) => {
  return {
    type: types.CREATE_GROUP,
    group,
    success,
    error,
  };
};
