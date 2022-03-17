const Block = (props) => {
	const { blockUser } = props;

	return (
		<div style={{ margin: "20px" }}>
			<button onClick={blockUser}>Block user</button>
			{/* {blockClicked && <p>user has been blocked</p>} */}
		</div>
	);
};

export default Block;
