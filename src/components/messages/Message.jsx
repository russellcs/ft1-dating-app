import { useState } from "react";

const Message = (props) => {
	const [likeClicked, setLikeClicked] = useState(false);
	const { message } = props;
	// Toggles the Like button
	const isLikeClicked = () => {
		setLikeClicked(likeClicked === false ? true : false);
	};

	return (
		<div style={{ margin: "20px" }}>
			{message.content}
			<button onClick={isLikeClicked}>&#9829;</button>
			{likeClicked && <p>Message liked</p>}
			<button
				onClick={() => {
					console.log("onclick called");
					props.deleteMessage(message.messageId);
				}}
				style={{ display: "block" }}
			>
				Delete message
			</button>
		</div>
	);
};

export default Message;
