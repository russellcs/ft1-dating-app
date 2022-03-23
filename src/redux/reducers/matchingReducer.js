import { matchingInitialState } from "../matchingInitialState";
import { types } from "../types";

export function matchingReducer(state = matchingInitialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      const users = [...state.users];
      users.push(action.payload);
      return { ...state, users };

    default:
      return state;
  }
}
