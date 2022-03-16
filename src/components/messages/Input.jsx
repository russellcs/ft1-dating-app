const Input = (props) => {
	const { onInput, onKeyDown, displayMessage } = props;
	return (
		<div style={{ margin: "20px" }}>
			<input onInput={onInput} onKeyDown={onKeyDown} type="text" />
			<button onClick={displayMessage}>Send</button>
		</div>
	);
};

export default Input;
