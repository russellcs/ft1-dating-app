import Conversations from "./Conversations";

const Messaging = (props) => {
	return (
		<>
			<Conversations
				messages={props.messages}
				addMessage={props.addMessage}
				blockUserId={props.blockUserId}
				users={props.users}
				deleteMessage={props.deleteMessage}
			/>
		</>
	);
};

export default Messaging;
