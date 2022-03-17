import { matchedIcons } from "../matchedIcons";

const UserHeight = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.ruler}</span>{" "}
      {props.user.personalDetails.height}
      {"cm"}
    </>
  );
};

export default UserHeight;
