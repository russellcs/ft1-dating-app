import { matchedIcons } from "../matchedIcons";

const UserAge = (props) => {
  const getAge = (dateString) => {
    let birthDate = new Date(dateString);
    let now = new Date();
    let currentYear = now.getFullYear();
    let userYear = birthDate.getFullYear();
    let age = currentYear - userYear;
    if (now < new Date(birthDate.setFullYear(currentYear))) {
      age--;
    }
    return age;
  };

  const { dob } = props.user.personalDetails;

  return (
    <>
      <span className="matchedIcon">{matchedIcons.cake}</span>{" "}
      {getAge(`${dob.year}-${dob.months}-${dob.day}`)}
    </>
  );
};

export default UserAge;
