import { messagingInitialState } from "../messagingInitialState";
import { types } from "../types";
import { getMessageIndexById, getIndexById } from "../../utils/matching";

export function messagingReducer(state = messagingInitialState, action) {

	switch (action.type) {
		case types.ADD_MESSAGE: {
			const messages = [...state.messages];
			messages.push(action.payload);
			return { ...state, messages };
		}

		case types.DELETE_MESSAGE: {
			const messages = [...state.messages];
			const index = getMessageIndexById(action.payload, messages);
			console.log(index);
			messages.splice(index, 1);
			return { ...state, messages };
		}

		case types.BLOCK_USER:
			console.log(state);
			// const users = [...users];
			// users[getIndexById(action.payload, users)].blocked.push(action.payload);
			return { ...state };

    default:
      return state;
  }
}
