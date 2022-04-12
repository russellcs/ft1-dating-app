import { messagingInitialState } from "../initialStates/messagingInitialState";
import { types } from "../types/types";
import { getMessageIndexById } from "../../utils/general";
import { storeData, getData } from "../../storage";

const messagingInitialStateFromDisk = getData("messagingInitialStateFromDisk");

export function messagingReducer(
  state = messagingInitialStateFromDisk || messagingInitialState,
  action
) {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      const messages = [...state.messages];
      messages.push(action.payload);
      const result = { ...state, messages };
      storeData("messagingInitialStateFromDisk", result);
      return result;
    }

    case types.DELETE_MESSAGE: {
      const messages = [...state.messages];
      const index = getMessageIndexById(action.payload, messages);
      messages.splice(index, 1);
      const result = { ...state, messages };
      storeData("messagingInitialStateFromDisk", result);
      return result;
    }

    case types.SET_ALL_MESSAGES: {
      return { messages: action.payload };
    }




    default:
      return state;
  }
}
