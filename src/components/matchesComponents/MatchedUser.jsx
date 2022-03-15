import { matchedIcons } from "./matchedIcons";

const MatchedUser = (props) => {
  const { user } = props;

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

  const getGender = (user) => {
    return user.personalDetails === 0
      ? "Male"
      : user.personalDetails === 1
      ? "Female"
      : "Other";
  };

  return (
    <>
      <h3 className="userName">{user.personalDetails.name.firstName}</h3>
      <div className="userImg">
        Image of {user.personalDetails.name.firstName}
      </div>

      <ul className="userDetails">
        <li>
          {matchedIcons.cake}{" "}
          {getAge(
            `${user.personalDetails.dob.year}-${user.personalDetails.dob.months}-${user.personalDetails.dob.day}`
          )}
        </li>
        <li>
          {matchedIcons.person} {getGender(user)}
        </li>
        <li>
          {matchedIcons.devilHeart}
          {user.preferences.lifeStyle.casual ? " Yes" : " No"}
        </li>
        <li>
          {matchedIcons.rings}
          {user.preferences.lifeStyle.marriage ? " Yes" : " No"}
        </li>
        <li>
          {matchedIcons.ruler} {user.personalDetails.height} cm
        </li>
        <li>
          {matchedIcons.praying} {user.personalDetails.religion}
        </li>
        <li>
          {matchedIcons.smoking}
          {user.personalDetails.smokers ? " Yes" : " No"}
        </li>
        {user.personalDetails.kids && (
          <li>{matchedIcons.child} Has children</li>
        )}
        {<li>{matchedIcons.baby} Wants children</li>}
      </ul>
    </>
  );
};

//ADD CHAT BUTTON? AND REJECT BUTTON?

export default MatchedUser;
