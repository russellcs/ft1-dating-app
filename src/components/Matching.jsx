import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import {
  getAge,
  getUserById,
  distanceFilter,
  ageFilter,
} from "../utils/matching";
import Search from "./Search";
import { useState } from "react";

const Matching = (props) => {
  const [filterOptions, setFilterOptions] = useState({
    // seenFilter: true,
    // genderFilter: true,
    // heightFilter: true,
    // existingKidsFilter: true,
    // openToKidsFilter: true,
    distanceFilter: true,
    ageFilter: true,
  });

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
    // if (filterOptions.seenFilter) {
    //   filteredUser = seenFilter(filteredUser);
    // }
    // if (filterOptions.genderFilter) {
    //   filteredUser = genderFilter(filteredUser);
    // }
    // if (filterOptions.heightFilter) {
    //   filteredUser = heightFilter(filteredUser);
    // }
    // if (filterOptions.existingKidsFilter) {
    //   filteredUser = existingKidsFilter(filteredUser);
    // }
    // if (filterOptions.openToKidsFilter) {
    //   filteredUser = openToKidsFilter(filteredUser);
    // }
    console.log("matchFilter activated");
    return filterOptions.distanceFilter && !distanceFilter(currentUser, user)
      ? false
      : filterOptions.ageFilter && !ageFilter(currentUser, user)
      ? false
      : true;
  };

  // potentialMatchDisplayer = DISPLAY oUSER PROFILE -> btnLike / btnPass

  // btnLike = PUSH oUSER to USER'S MATCH LIST -> !IF (USER is also on oUSER'S match list) START CONVO, seen Fn.
  // btnDislike = seen Fn.
  // seen Fn = ADDS oUSER TO USER'S "seen", SHOW NEXT oUSER.

  // recieves array of filtered users
  const potentialMatchSorter = (userA, userB) => {
    console.log("matchSort activated");

    const kidsPointer = (user) => {
      const cUserPref = currentUser.preferences.lifeStyle.openToKids;
      const userPref = user.preferences.lifeStyle.openToKids;

      if (cUserPref === 0 || userPref === 0) {
        // cUser or User don't state preference
        return 0;
      } else if (cUserPref === 1) {
        // cUser doesn't want kids
        return userPref === 1
          ? // & user doesn't want kids
            10
          : userPref === 2
          ? // & user not sure
            0
          : // & user open to kids
            -5;
      } else if (cUserPref === 2) {
        // cUser not sure
        return userPref === 1
          ? // & user doesnt want kids
            -5
          : userPref === 2
          ? // & user not sure
            5
          : userPref === 3
          ? // & user open to kids
            0
          : // & user wants kids
            -5;
      } else if (cUserPref === 3) {
        // cUser open to kids
        return userPref === 1
          ? // & user doesnt want kids
            -5
          : userPref === 2
          ? // & user not sure
            0
          : userPref === 3
          ? // & user open to kids
            10
          : // & user wants kids
            5;
      } else {
        // cUser wants kids
        return userPref === 2
          ? // user not sure
            0
          : userPref === 3
          ? // user open to kids
            5
          : // user wants kids
            10;
      }
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
    };

    const marriageCasualPointer = (user) => {
      const cUserPref = {
        marriage: currentUser.preferences.lifeStyle.marriage,
        casual: currentUser.preferences.lifeStyle.casual,
      };
      const userPref = {
        marriage: user.preferences.lifeStyle.marriage,
        casual: user.preferences.lifeStyle.casual,
      };

      // mcPointCalc is designed to take cUser and user in different orders, so that the values are easily changed inside.
      const mcPointCalc = (userA, userB) => {
        console.log(userA, userB);
        // if (
        //   (userA.marriage && userA.casual) ||
        //   (userB.marriage && userB.casual)
        // ) {
        //   return 10;
        // }
        if (userA.marriage && userA.casual) {
          // userA wants marriage and casual
          return userB.marraige && userB.casual
            ? // & userB also wants both
              10
            : userB.marraige && !userB.casual
            ? // & user B only wants marraige
              5
            : // & user B only wants casual
              5;
        } else if (userA.marriage && !userA.casual) {
          // userA only wants marriage
          return userB.marriage && !userB.casual
            ? // & userB only wants marriage
              10
            : // & userB only wants casual
              -10;
        } else {
          // userA and user B only wants casual
          return 10;
        }
      };

      console.log(
        currentUser.personalDetails.name.firstName +
          " " +
          cUserPref.marriage +
          " " +
          cUserPref.casual +
          ", " +
          user.personalDetails.name.firstName +
          " " +
          userPref.marriage +
          " " +
          userPref.casual
      );

      console.log(cUserPref.marriage && cUserPref.casual);
      console.log(userPref.marriage && userPref.casual);

      // in order to accomodate mcPointCalc's design, a ternary is neccesary to select which order cUser and user are entered.
      return cUserPref.marriage && cUserPref.casual
        ? mcPointCalc(cUserPref, userPref)
        : userPref.marraige && userPref.casual
        ? mcPointCalc(userPref, cUserPref)
        : cUserPref.marriage && !cUserPref.casual
        ? mcPointCalc(cUserPref, userPref)
        : mcPointCalc(userPref, cUserPref);
    };

    let totalPointsUserA = marriageCasualPointer(userA);
    // kidsPointer(userA);
    let totalPointsUserB = marriageCasualPointer(userB);
    // kidsPointer(userB);
    console.log("userA: " + totalPointsUserA + ", userB: " + totalPointsUserB);

    return totalPointsUserA === totalPointsUserB
      ? 0
      : totalPointsUserA < totalPointsUserB
      ? -1
      : 1;
  };

  let filteredUsers = [...users];
  filteredUsers.splice(
    users.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers.sort(potentialMatchSorter);
  // .filter(potentialMatchFilter)
  // .sort(potentialMatchSorter);

  return (
    <>
      <Search
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
      />

      <div className="userCardContainer">
        {filteredUsers.map((user, i) => {
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
    </>
  );
};

export default Matching;
