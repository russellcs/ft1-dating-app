import { messagingInitialState } from "../messagingInitialState";
import { types } from "../types";

export function messagingReducer(state = messagingInitialState, action) {
	switch (action.type) {
		case types.ADD_MESSAGE:
			const messages = [...state.messages];
			messages.push(action.payload);
			return { ...state, messages };

		default:
			return state;
	}
}
