import { messages as mockMessages } from "./mock/mockMessages";

import { users as mockUsers, currentUserId } from "./mock";

import Interface from "./components/Interface";
import { useState } from "react";
import { getIndexById, getUserById } from "./utils/matchingUtil";

const App = () => {
	const [users, setUsers] = useState(mockUsers);
	const [messages, setMessages] = useState(mockMessages);
	const currentUser = getUserById(currentUserId, users);
	console.log(currentUser);
	// Adds the current user ID to the blocked array in the data
	const blockUserId = (fId) => {
		console.log(currentUserId, fId);
		const foreignUserId = Number(fId);
		const usersCopy = [...users];

		usersCopy[getIndexById(currentUserId, users)].blocked.push(foreignUserId);
		setUsers(usersCopy);
	};

	const addMessage = (payload) => {
		const copy = [...messages];
		console.log(copy);
		copy.push(payload);
		setMessages(copy);
	};

	const onLikeUpdate = (user, boolean) => {
		const usersCopy = [...users];
		if (boolean) {
			usersCopy.currentUser.likes.push(user.userId);
			usersCopy.currentUser.seen.push(user.userId);
		}
	};

	return (
		<>
			<Interface
				users={users}
				messages={messages}
				addMessage={addMessage}
				onLikeUpdate={onLikeUpdate}
				blockUserId={blockUserId}
			/>
		</>
	);
};

export default App;
