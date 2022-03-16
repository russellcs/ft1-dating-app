import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import { getAge } from "../utils/matchingUtil";

const Matches = (props) => {
  const { users } = props;
  // just for WiP
  const currentUserId = 1;

  const findUserById = (id) => {
    return users.find(({ userId }) => userId === id);
  };

  let currentUser = findUserById(currentUserId);

  // RETURNS ARRAY OF USERS THAT HAVE MATCHED EACHOTHER
  const matchFinder = (currentUser) => {
    // creates array of users that currentUser has liked.
    let matches = [...currentUser.matches];
    matches.forEach((id, i) => {
      matches[i] = findUserById(id);
    });
    // returns array of users that also like currentUser.
    return matches.filter((user) => {
      return user.matches.includes(currentUser.userId) === true;
    });
  };

  // potentialMatchFinder = RETURN ARRAY OF oUSERS THAT MEET USER'S CRITERIA + SORT (ignores seen)

  const potentialMatchFinder = (currentUser) => {
    //get list of users
    let potUsers = [...users];

    //remove current user from list (possibly include this in function that screens out "seen")
    potUsers.splice(
      potUsers.findIndex((user) => user === currentUser),
      1
    );

    return potUsers.filter(ageFilter).filter(genderFilter).filter(heightFilter);
  };

  //gender
  const genderFilter = (user) => {
    return (
      currentUser.preferences.gender.includes(user.personalDetails.gender) &&
      user.preferences.gender.includes(currentUser.personalDetails.gender)
    );
  };

  //age (range)
  const ageFilter = (user) => {
    // checks if user1's age is more/less than user2's prefered min/max age
    const ageCheck = (user1, user2) => {
      return getAge(user1) >= user2.preferences.age.min &&
        getAge(user1) <= user2.preferences.age.max
        ? true
        : false;
    };
    return ageCheck(currentUser, user) && ageCheck(user, currentUser);
  };

  const heightFilter = (user) => {
    // checks if user1's height is more/less than user2's prefered min/max height
    const heightCheck = (user1, user2) => {
      return user1.personalDetails.height >= user2.preferences.height.min &&
        user1.personalDetails.height <= user2.preferences.height.max
        ? true
        : false;
    };
    return heightCheck(currentUser, user) && heightCheck(user, currentUser);
  };

  // potentialMatchDisplayer = DISPLAY oUSER PROFILE -> btnLike / btnPass

  const likeBtn = (user) => {
    // add USER to cUSER's matches.
    // PROPS.LIKE FUNCTION. currentUser.matches.push(user.userId).(which also instigates convo if matched)
    // add user to seen.
    // next person.
  };

  // btnLike = PUSH oUSER to USER'S MATCH LIST -> !IF (USER is also on oUSER'S match list) START CONVO, seen Fn.
  // btnDislike = seen Fn.
  // seen Fn = ADDS oUSER TO USER'S "seen", SHOW NEXT oUSER.

  // const

  return (
    <div className="userCardContainer">
      {/* {matchFinder(currentUser).map((user, i) => { */}
      {potentialMatchFinder(currentUser).map((user, i) => {
        return (
          <div className="userCard" key={i}>
            <MatchedUser user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default Matches;
