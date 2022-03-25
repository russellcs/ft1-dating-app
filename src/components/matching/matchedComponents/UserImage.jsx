const UserImage = (props) => {
  // return <div className="userImage">Image of user.</div>;
  return <img src={props.image} alt="Image of user" />;
};

export default UserImage;
