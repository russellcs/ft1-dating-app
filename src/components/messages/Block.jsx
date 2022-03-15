const Block = (props) => {
	const { blockUser, blockButtonText, blockClicked, name } = props;

	return (
		<div style={{ margin: "20px" }}>
			<button onClick={blockUser}>{blockButtonText}</button>
			{blockClicked && <p>{name} has been blocked</p>}
		</div>
	);
};

export default Block;
