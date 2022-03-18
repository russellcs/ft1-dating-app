import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import { getAge, getUserById } from "../utils/matchingUtil";

const Matches = (props) => {
  const { users } = props;
  // just for WiP
  const currentUserId = 1;

  let currentUser = getUserById(currentUserId, users);

  // // RETURNS ARRAY OF USERS THAT HAVE MATCHED EACHOTHER
  // const matchFinder = (currentUser) => {
  //   // creates array of users that currentUser has liked.
  //   let matches = [...currentUser.matches];
  //   matches.forEach((id, i) => {
  //     matches[i] = getUserById(id, users);
  //   });
  //   // returns array of users that also like currentUser.
  //   return matches.filter((user) => {
  //     return user.matches.includes(currentUser.userId) === true;
  //   });
  // };

  // potentialMatchFinder = RETURN ARRAY OF oUSERS THAT MEET USER'S CRITERIA + SORT (ignores seen)

  // const potentialMatchFinder = (currentUser) => {
  //   //get list of users
  //   const potUsers = [...users];

  //   //remove current user from list (possibly include this in function that screens out "seen")
  //   potUsers.splice(
  //     potUsers.findIndex((user) => user === currentUser),
  //     1
  //   );

  //   return potUsers.filter(ageFilter).filter(genderFilter).filter(heightFilter);
  // };

  //seen
  const seenFilter = (user) => {
    return currentUser.seen.includes(currentUser.userId) === false;
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

  //existing children
  const existingKidsFilter = (user) => {
    return (
      (currentUser.personalDetails.kids === user.preferences.kidsAccepted &&
        user.personalDetails.kids === currentUser.preferences.kidsAccepted) ||
      currentUser.personalDetails.kids === undefined ||
      user.personalDetails.kids === undefined
    );
  };

  // filters out users that want kids from users that Don't want kids.
  const openToKidsFilter = (user) => {
    console.log(
      "cUser: " +
        currentUser.personalDetails.name.firstName +
        " (" +
        currentUser.preferences.lifeStyle.openToKids +
        ") " +
        " , user: " +
        user.personalDetails.name.firstName +
        " (" +
        user.preferences.lifeStyle.openToKids +
        ")"
    );

    if (
      currentUser.preferences.lifeStyle.openToKids === 4 &&
      user.preferences.lifeStyle.openToKids === 1
    ) {
      console.log("cUser wants kids, user don't");
      return false;
    } else if (
      user.preferences.lifeStyle.openToKids === 4 &&
      currentUser.preferences.lifeStyle.openToKids === 1
    ) {
      console.log("cUser doesn't want kids, user does");
      return false;
    } else {
      console.log("kid want compatible");
      return true;
    }
  };

  const potentialMatchFilter = (user) => {
    return (
      seenFilter(user) &&
      genderFilter(user) &&
      ageFilter(user) &&
      heightFilter(user) &&
      // existingKidsFilter(user) &&
      openToKidsFilter(user)
    );
  };

  // potentialMatchDisplayer = DISPLAY oUSER PROFILE -> btnLike / btnPass

  // btnLike = PUSH oUSER to USER'S MATCH LIST -> !IF (USER is also on oUSER'S match list) START CONVO, seen Fn.
  // btnDislike = seen Fn.
  // seen Fn = ADDS oUSER TO USER'S "seen", SHOW NEXT oUSER.

  // recieves array of filtered users
  const potentialMatchSorter = (userA, userB) => {
    //want kids?
    const kidsPointer = (user) => {
      const cUserPref = currentUser.preferences.lifeStyle.openToKids;
      const userPref = user.preferences.lifeStyle.openToKids;
      if (cUserPref === 0 || userPref === 0) {
        // cUser or User don't state preference
        return 0;
      } else if (cUserPref === 1) {
        // cUser doesn't want kids
        if (userPref === 1) {
          // & user doesn't want kids
          return 10;
        } else if (userPref === 2) {
          // & user not sure
          return 0;
        } else {
          // & user open to kids
          return -5;
        }
      } else if (cUserPref === 2) {
        // cUser not sure
        if (userPref === 1) {
          // & user doesnt want kids
          return -5;
        } else if (userPref === 2) {
          // & user not sure
          return 5;
        } else if (userPref === 3) {
          // & user open to kids
          return 0;
        } else {
          // & user wants kids
          return -5;
        }
      } else if (cUserPref === 3) {
        // cUser open to kids
        if (userPref === 1) {
          // & user doesnt want kids
          return -5;
        } else if (userPref === 2) {
          // & user not sure
          return 0;
        } else if (userPref === 3) {
          // & user open to kids
          return 10;
        } else {
          // & user wants kids
          return 5;
        }
      } else {
        // cUser wants kids
        if (userPref === 2) {
          // user not sure
          return 0;
        } else if (userPref === 3) {
          // user open to kids
          return 5;
        } else {
          // user wants kids
          return 10;
        }
      }
    };
    // console.log(
    //   currentUser.personalDetails.name.firstName +
    //     " opentoKids: " +
    //     currentUser.preferences.lifeStyle.openToKids
    // );

    // console.log(
    //   userA.personalDetails.name.firstName +
    //     " opentoKids: " +
    //     userA.preferences.lifeStyle.openToKids +
    //     " points: " +
    //     kidsPointer(userA)
    // );
    // console.log(
    //   userB.personalDetails.name.firstName +
    //     " opentoKids: " +
    //     userB.preferences.lifeStyle.openToKids +
    //     " points: " +
    //     kidsPointer(userB)
    // );
    return kidsPointer(userB) === kidsPointer(userA)
      ? 0
      : kidsPointer(userB) < kidsPointer(userA)
      ? -1
      : 1;
  };

  return (
    <div className="userCardContainer">
      {users
        .filter(potentialMatchFilter)
        // .splice(
        //   users.findIndex((user) => user === currentUser),
        //   1
        // )
        .sort(potentialMatchSorter)
        .map((user, i) => {
          return (
            <>
              <div className="userCard" key={i}>
                <MatchedUser user={user} />
              </div>

              <button
                key={`pass${i}`}
                onClick={() => props.onLikeUpdate(user, false)}
              >
                Pass
              </button>

              <button
                key={`like${i}`}
                onClick={() => props.onLikeUpdate(user, true)}
              >
                Like
              </button>
            </>
          );
        })}
      {/* {Controls} */}
    </div>
  );
};

export default Matches;
