const UserImage = (props) => {
	return (
		<div className="text-center">
			<img
				src={props.image}
				alt={props.name}
				className="img-fluid img-thumbnail mb-3"
			/>
		</div>
	);
};

export default UserImage;
