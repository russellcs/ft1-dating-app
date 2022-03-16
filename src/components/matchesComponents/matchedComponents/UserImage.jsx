const UserImage = (props) => {
  return (
    <div className="userImage">
      Image of {props.user.personalDetails.name.firstName}
    </div>
  );
};

export default UserImage;
