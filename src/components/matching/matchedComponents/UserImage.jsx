const UserImage = (props) => {
  // return <div className="userImage">Image of user.</div>;
  console.log(props);

  return (
    <div>
      <img
        src={props.image}
        alt="Image of user"
        className="rounded img-fluid img-thumbnail"
      />
    </div>
  );
};

export default UserImage;
