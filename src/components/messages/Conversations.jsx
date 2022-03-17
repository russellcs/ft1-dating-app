import { users } from "../../mock";
import Conversation from "./Conversation";

const Conversations = (props) => {
	// Iterate through the messages data setting the keys for a new object to be user ID of the existing user and then saving that info in the entries object
	const result = {};
	props.messages.forEach((message) => {
		const existing = result[message.fromUserId]
			? result[message.fromUserId]
			: [];
		result[message.fromUserId] = [...existing, message];
	});
	const entries = Object.entries(result);

	// Filter through the entries object returning only the conversations which do not match (not blocked)
	const filteredConversations = entries.filter((conversation) => {
		return !users[0].blocked.includes(Number(conversation[0]));
	});

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
