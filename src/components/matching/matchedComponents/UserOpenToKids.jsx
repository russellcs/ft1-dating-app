import { matchedIcons } from "../matchedIcons";
// import { wantKids } from "../../../config/formConfig";

const UserOpenToKids = (props) => {
  const wantKids = [
    "Don't want kids",
    "Not sure yet",
    "Open to kids",
    "Want kids",
  ];
  return (
    <>
      <span className="matchedIcon">{matchedIcons.baby}</span>
      {wantKids[props.openToKids]}
    </>
  );
};

export default UserOpenToKids;
