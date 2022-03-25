import { matchingInitialState } from "../matchingInitialState";
import { types } from "../types";
import { getIndexById } from "../../utils/matching";

export function matchingReducer(state = matchingInitialState, action) {
  switch (action.type) {
    case types.ADD_USER:
      const users = [...state.users];
      users.push(action.payload);
      result = { ...state, users };
      storeData("generalInitialStateFromDisk", result);
      return result;

    case types.ADD_TO_SEEN: {
      const currentUserIndex = getIndexById(
        Number(action.payload.currentUserId),
        state.users
      );

      if (
        !state.users[currentUserIndex].seen.includes(action.payload.seenUserId)
      ) {
        const users = [...state.users];
        users[currentUserIndex].seen.push(action.payload.seenUserId);
        result = { ...state, users };
        storeData("generalInitialStateFromDisk", result);
        return result;
      }
      return state;
    }

    case types.ADD_TO_LIKES: {
      const { user, currentUser } = action.payload;
      const users = [...state.users];
      currentUser.likes.push(user.userId);
      result = { ...state, users };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    case types.UPDATE_MATCHES: {
      const { seenUserId, currentUserId } = action.payload;

      const seenUserIndex = getIndexById(seenUserId, state.users);
      const currentUserIndex = getIndexById(currentUserId, state.users);

      if (
        state.users[seenUserIndex].likes.includes(currentUserId) &&
        state.users[currentUserIndex].likes.includes(seenUserId)
      ) {
        const users = [...state.users];

        users[seenUserIndex].matches.push(currentUserId);
        users[currentUserIndex].matches.push(seenUserId);

        result = { ...state, users };
        storeData("generalInitialStateFromDisk", result);
        return result;
      } else return state;
    }

    case types.BLOCK_USER: {
      console.log(state);
      const users = [...state.users];
      const index = getIndexById(Number(1), users);

      users[index].blocked.push(Number(action.payload));
      result = { ...state, users };
      storeData("generalInitialStateFromDisk", result);
      return result;
    }

    // case "LOGIN":
    //   const currentUserIndex = getIndexByEmail(action.payload, state.users);

    //   if (state.users[currentUserIndex].password === action.payload2) {
    //     // loggedInStatus = true and set currentUserId
    //   }
    //   return;

    default:
      return state;
  }
}
