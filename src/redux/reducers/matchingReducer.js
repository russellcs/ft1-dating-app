import { matchingInitialState } from "../matchingInitialState";
import { types } from "../types";
import { getIndexById } from "../../utils/matching";

export function matchingReducer(state = matchingInitialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      const users = [...state.users];
      users.push(action.payload);
      return { ...state, users };

    case types.ADD_TO_SEEN: {
      const users = [...state.users];
      const currentUser =
        users[getIndexById(action.payload.currentUserId, users)];
      if (!currentUser.seen.includes(action.payload.seenUserId)) {
        currentUser.seen.push(action.payload.seenUserId);
      }
      console.log(currentUser.seen);
      return { ...state, users };
    }

    default:
      return state;
  }
}
