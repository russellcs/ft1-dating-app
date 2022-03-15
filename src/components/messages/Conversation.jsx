const Conversation = (props) => {
	const result = {};

	props.messages.forEach((message) => {
		const existing = result[message.fromUserId]
			? result[message.fromUserId]
			: [];
		result[message.fromUserId] = [...existing, message];
	});
	const entries = Object.entries(result);

	return (
		<div>
			{entries.map((item) => {
				return (
					<>
						<p>User ID is {item[0]}</p>
						{item[1].map((message) => {
							return <p>{message.content}</p>;
						})}
					</>
				);
			})}
		</div>
	);
};

export default Conversation;
