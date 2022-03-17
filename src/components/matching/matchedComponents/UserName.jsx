const UserName = (props) => {
  return (
    <h3 className="userName">{props.user.personalDetails.name.firstName}</h3>
  );
};

export default UserName;
