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

  const lifeStyleChecker = (user) => {
    let lifeStyle = Object.entries({ ...user.preferences.lifeStyle });
    let returnArray = [];
    lifeStyle.forEach((item) => {
      if (item[1]) returnArray.push(item[0]);
    });
    return returnArray ? returnArray.join(", ") : "";
  };

  // SPLIT UP INTO COMPONENTS (at least long ones like lifestyle)
  // USE ICONS (specially for label)
  // SOME CATEGORIES NEED "UNDEFINED" option (i.e. smoking, religion)
  // EXTRA CATEGORIES? SEXUALITY/DRINK/WEED/PILL (+ need "sometimes" option then)

  return (
    <>
      <h3 className="userName">{user.personalDetails.name.firstName}</h3>
      <div className="userImg">
        Image of {user.personalDetails.name.firstName}
      </div>
      <ul className="userDetails">
        <li>Gender: {getGender(user)}</li>

        {lifeStyleChecker(user) && (
          <li>Looking for: {lifeStyleChecker(user)}</li>
        )}

        <li>
          Age:{" "}
          {getAge(
            `${user.personalDetails.dob.year}-${user.personalDetails.dob.months}-${user.personalDetails.dob.day}`
          )}
        </li>
        <li>Height: {user.personalDetails.height}cm </li>
        <li>Religion: {user.personalDetails.religion}</li>
        <li>{user.personalDetails.smokers ? "Smokes" : "Doesn't smoke"}</li>
        {/* should be option to leave religen & smoke undefined
         */}
        {user.personalDetails.kids && <li>Has kids</li>}
      </ul>
    </>
  );
};

//ADD CHAT BUTTON? AND REJECT BUTTON?

export default MatchedUser;
