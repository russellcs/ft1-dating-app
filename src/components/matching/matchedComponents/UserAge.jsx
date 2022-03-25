import { matchedIcons } from "../matchedIcons";

const UserAge = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.cake}</span> {props.age}
    </>
  );
};

export default UserAge;
