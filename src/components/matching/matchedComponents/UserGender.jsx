import { matchedIcons } from "../matchedIcons";
import { genders } from "../../../config/formConfig";

const UserGender = (props) => {
  return (
    <>
      <span className="matchedIcon">{matchedIcons.person}</span>{" "}
      {genders[props.gender]}
    </>
  );
};

export default UserGender;
