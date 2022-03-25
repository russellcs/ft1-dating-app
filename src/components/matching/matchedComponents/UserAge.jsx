import { matchedIcons } from "../matchedIcons";
import { getAge } from "../../../utils/matching";

const UserAge = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.cake}</span> {props.age}
    </>
  );
};

export default UserAge;
