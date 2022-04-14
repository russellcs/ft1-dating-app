import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { getIndexById } from "../../utils/general";

const Conversations = () => {
	const users = useSelector((state) => state.matching.users);
	const messages = useSelector((state) => state.messaging.messages);
	const currentUserId = useSelector((state) => state.general.currentUserId);

	// Iterate through the messages data from the store then checks if the foreign ID exists. if it doesn't a new array is created. Matches is the iterated through and saved in the entries object
	const result = {};

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
	const entries = Object.entries(result);

	// Filter through the entries object returning only the conversations which do not match (not blocked)
	const filteredConversations = entries.filter((conversation) => {
		return !users[index].blocked.includes(Number(conversation[0]));
	});

	return (
		<div>
			{filteredConversations > 0 ? (
				filteredConversations.map((conversation, index) => {
					return <Conversation conversation={conversation} key={index} />;
				})
			) : (
				<h3 className="p-3 text-center">
					You need to match with someone to start a conversation
				</h3>
			)}
		</div>
	);
};

export default Conversations;
