import { initialState } from "../initialState";
import { types } from "../types";

export function generalReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.SET_USER_INPUT:
      return { ...state, userInput: action.payload };

    case types.SET_SCREEN:
      let screen = action.payload;
      return { ...state, screen };

    case types.SET_CURRENT_USER_ID:
      let currentUserId = action.payload;
      return { ...state, currentUserId };

    case types.SET_LOGGED_IN_STATUS:
      let loggedIn = action.payload;
      return { ...state, loggedIn };

    default:
      return state;
  }
}
