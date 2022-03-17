import Conversations from "./Conversations";

const Messaging = (props) => {
	return (
		<>
			<Conversations
				messages={props.messages}
				addMessage={props.addMessage}
				blockUserId={props.blockUserId}
				users={props.users}
			/>
		</>
	);
};

export default Messaging;
