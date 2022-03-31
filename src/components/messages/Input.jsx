const Input = (props) => {
	const { onInput, onKeyDown, onMessageClick } = props;

	return (
		<div
			className="m-4 d-flex align-items-end justify-content-between"
			style={{ width: "80%" }}
		>
			<textarea
				rows={3}
				type="text"
				placeholder="Message here..."
				autoCapitalize="sentences"
				className="w-75 py-1 px-2 shadow-sm border-0 rounded"
				onInput={onInput}
				value={props.draft}
				onKeyDown={onKeyDown}
			/>
			<button
				className="btn btn-primary btn-sm px-3 py-1 shadow"
				onClick={onMessageClick}
			>
				Send
			</button>
		</div>
	);
};

export default Input;
