import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/matching";

const Conversations = (props) => {
	const users = useSelector((state) => state.matching.users);
	const messages = useSelector((state) => state.messaging.messages);
	const currentUserId = useSelector((state) => state.general.currentUserId);

	// Iterate through the messages data setting the keys for a new object to be user ID of the existing user and then saving that info in the entries object
	// const result = {};
	// messages.forEach((message) => {
	// 	const existing = result[message.fromUserId]
	// 		? result[message.fromUserId]
	// 		: [];
	// 	result[message.fromUserId] = [...existing, message];
	// });
	const result = {};
	messages.forEach((message) => {
		const existing = result[message.foreignId] ? result[message.foreignId] : [];
		result[message.foreignId] = [...existing, message];
	});

	let index = getIndexById(currentUserId, users);

	let matches = users[index].matches;

	for (let i = 0; i < matches.length; i++) {
		if (result[matches[i]] === undefined) {
			result[matches[i]] = [];
		}
	}
	const entries = Object.entries(result);

	// Filter through the entries object returning only the conversations which do not match (not blocked)
	const filteredConversations = entries.filter((conversation) => {
		return !users[index].blocked.includes(Number(conversation[0])); //TBD must not be hard coded!!
	});

	console.log(entries, filteredConversations);

	return (
		<div>
			{filteredConversations.map((conversation, index) => {
				return (
					<Conversation
						conversation={conversation}
						addMessage={props.addMessage}
						blockUser={props.blockUser}
						blockButtonText={props.blockButtonText}
						blockClicked={props.blockClicked}
						users={props.users}
						blockUserId={props.blockUserId}
						deleteMessage={props.deleteMessage}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Conversations;
