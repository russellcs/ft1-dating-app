import { matchedIcons } from "../matchedIcons";
import { religions } from "../../../config/formConfig";

const UserReligion = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.praying}</span>
      {religions[props.religion]}
    </>
  );
};

export default UserReligion;
