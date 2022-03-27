const Input = (props) => {
	const { onInput, onKeyDown, onMessageClick } = props;
	return (
		<div className="m-4" style={{ width: "80%" }}>
			<input
				className="w-75 py-1 px-2 me-3 shadow-sm"
				onInput={onInput}
				onKeyDown={onKeyDown}
				type="text"
			/>
			<button
				className="btn btn-primary btn-sm px-3 py-1"
				onClick={onMessageClick}
			>
				Send
			</button>
		</div>
	);
};

export default Input;
