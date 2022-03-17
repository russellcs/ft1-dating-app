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
			{message.content && <button onClick={isLikeClicked}>&#9829;</button>}
			{likeClicked && <p>Message liked</p>}
		</div>
	);
};

export default Message;
