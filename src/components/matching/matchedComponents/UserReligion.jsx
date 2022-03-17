import { matchedIcons } from "../matchedIcons";
import { religions } from "../../../config/formConfig";

const UserReligion = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.praying}</span>
      {religions[props.user.personalDetails.religion]}
    </>
  );
};

export default UserReligion;
