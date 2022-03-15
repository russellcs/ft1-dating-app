const Message = (props) => {
	const { message, isLikeClicked, likeClicked } = props;
	return (
		<div style={{ margin: "20px" }}>
			{message}
			{message && <button onClick={isLikeClicked}>&#9829;</button>}
			{likeClicked && <p>Message liked</p>}
		</div>
	);
};

export default Message;
