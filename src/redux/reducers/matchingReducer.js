import { matchingInitialState } from "../matchingInitialState";
import { types } from "../types";
import { getIndexById } from "../../utils/matching";
import { useDispatch } from "react-redux";

export function matchingReducer(state = matchingInitialState, action) {
	switch (action.type) {
		case types.ADD_USER:
			const users = [...state.users];
			users.push(action.payload);
			return { ...state, users };

		case types.ADD_TO_LIKES: {
			const { user, currentUser } = action.payload;
			const users = [...state.users];
			currentUser.likes.push(user.userId);

			return { ...state, users };
		}

		case types.UPDATE_MATCHES: {
			const seenUserIndex = getIndexById(
				action.payload.seenUserId,
				state.users
			);
			const currentUserIndex = getIndexById(
				action.payload.currentUserId,
				state.users
			);

			if (
				state.users[seenUserIndex].likes.includes(
					action.payload.currentUserId
				) &&
				state.users[currentUserIndex].likes.includes(action.payload.seenUserId)
			) {
				const users = [...state.users];

				users[seenUserIndex].matches.push(action.payload.currentUserId);
				users[currentUserIndex].matches.push(action.payload.seenUserId);

				return { ...state, users };
			} else return state;
		}
		// // if current user is also liked by user..

		//     // addMessage({
		//     //   toUserId: user.userId,
		//     //   fromUserId: userId,
		//     //   messageId: getUniqueId(16),
		//     //   content: "",
		//     //   sendTimestamp: 0,
		//     //   read: false,
		//     //   blocked: false, // & start convo.
		//     // });
		//     //insert notification function if desired
		//   }
		// }
		case types.BLOCK_USER: {
			console.log(state);
			const users = [...state.users];
			const index = getIndexById(Number(action.payload), users);
			users[index].blocked.push(Number(action.payload));
			return { ...state, users };
		}

		default:
			return state;
	}
}
