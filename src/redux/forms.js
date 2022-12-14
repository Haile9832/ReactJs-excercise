import * as ActionTypes from "./ActionTypes";

export const InitialFeedback = {
  firstname: "",
  lastname: "",
  telnum: "",
  email: "",
  agree: false,
  contactType: "Tel.",
  message: "",
};

export const Feedbacks = (
  state = {
    feedback: {},
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };
    default:
      return state;
  }
};
