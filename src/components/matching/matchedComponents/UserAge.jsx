import { matchedIcons } from "../matchedIcons";
import { getAge } from "../../../utils/matching";

const UserAge = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.cake}</span>{" "}
      {getAge(props.user)}
    </>
  );
};

export default UserAge;
