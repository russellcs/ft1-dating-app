import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/matching";

const Conversations = () => {
	const users = useSelector((state) => state.matching.users);
	const messages = useSelector((state) => state.messaging.messages);
	const currentUserId = useSelector((state) => state.general.currentUserId);

	// Iterate through the messages data from the store then checks if the foreign ID exists. if it doesn't a new array is created. Matches is the iterated through and saved in the entries object
	const result = {};
	setTimeout(() => {
		console.log(messages, users);
	}, 3000);
	messages &&
		messages.forEach((message) => {
			const existing = result[message.foreignId]
				? result[message.foreignId]
				: [];
			result[message.foreignId] = [...existing, message];
		});

	let index = getIndexById(currentUserId, users);

	let matches = users[index].matches;

	for (let i = 0; i < matches.length; i++) {
		if (result[matches[i]] === undefined) {
			result[matches[i]] = [];
		}
	}
	console.log(result);
	const entries = Object.entries(result);

	// Filter through the entries object returning only the conversations which do not match (not blocked)
	const filteredConversations = entries.filter((conversation) => {
		return !users[index].blocked.includes(Number(conversation[0]));
	});

	return (
		<div>
			{filteredConversations.map((conversation, index) => {
				return <Conversation conversation={conversation} key={index} />;
			})}
		</div>
	);
};

export default Conversations;
