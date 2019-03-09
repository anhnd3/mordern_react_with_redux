import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITAL_STATE = {
  isSignedIn: null,
  userID: null
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userID: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userID: null };
    default:
      return state;
  }
};
