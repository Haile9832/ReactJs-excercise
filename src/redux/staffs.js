import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = {
    isLoading: true,
    errMess: null,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };
    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    case ActionTypes.STAFF_POSTED:
      return { ...state, staffs: action.payload };
    case ActionTypes.STAFF_DELETED:
      return { ...state, staffs: action.payload };
    case ActionTypes.STAFF_PATCHED:
      return { ...state, staffs: action.payload };
    default:
      return state;
  }
};
