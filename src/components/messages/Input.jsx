const Input = (props) => {
	const { onInput, onKeyDown, onMessageClick } = props;
	return (
		<div style={{ margin: "20px" }}>
			<input
				value={props.value}
				onInput={onInput}
				onKeyDown={onKeyDown}
				type="text"
			/>
			<button onClick={onMessageClick}>Send</button>
		</div>
	);
};

export default Input;
