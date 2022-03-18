import MatchedUser from "./matching/MatchedUser";
import "./matching/matching.scss";
import {
  getUserById,
  distanceFilter,
  ageFilter,
  genderFilter,
  heightFilter,
  existingKidsFilter,
  openToKidsFilter,
} from "../utils/matching";
import Search from "./Search";
import { useState } from "react";

const Matches = (props) => {
  const [filterOptions, setFilterOptions] = useState({
    // seenFilter: true,
    genderFilter: true,
    heightFilter: true,
    existingKidsFilter: true,
    openToKidsFilter: true,
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
  const seenFilter = (currentUser, user) => {
    return currentUser.seen.includes(currentUser.userId) === false;
  };

  const potentialMatchFilter = (user) => {
    // if (filterOptions.seenFilter) filteredUser = seenFilter(filteredUser)
    return filterOptions.distanceFilter && !distanceFilter(currentUser, user)
      ? false
      : filterOptions.ageFilter && !ageFilter(currentUser, user)
      ? false
      : filterOptions.genderFilter && !genderFilter(currentUser, user)
      ? false
      : filterOptions.heightFilter && !heightFilter(currentUser, user)
      ? false
      : filterOptions.existingKidsFilter &&
        !existingKidsFilter(currentUser, user)
      ? false
      : filterOptions.openToKidsFilter && !openToKidsFilter(currentUser, user)
      ? false
      : true;
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

  let filteredUsers = [...users];
  filteredUsers.splice(
    filteredUsers.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers
    .filter(potentialMatchFilter)
    .sort(potentialMatchSorter);

  return (
    <>
      <Search
        setFilterOptions={setFilterOptions}
        filterOptions={filterOptions}
      />

      <div className="userCardContainer">
        {filteredUsers
          // .filter(potentialMatchFilter)
          // .sort(potentialMatchSorter)
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
    </>
  );
};

export default Matches;
