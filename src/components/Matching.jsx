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

const Matching = (props) => {
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
    const kidsPointer = (user) => {
      const cUserPref = currentUser.preferences.lifeStyle.openToKids;
      const userPref = user.preferences.lifeStyle.openToKids;

      // NB: want/don't want is filtered out in potentialMatchFilter
      return cUserPref > 0 && cUserPref === userPref // neither "dont say" and both are same
        ? 10
        : (cUserPref === 3 && userPref === 4) ||
          (cUserPref === 4 && userPref === 3) || // want + open
          (cUserPref === 3 && userPref === 2) ||
          (cUserPref === 2 && userPref === 3) // not sure + open
        ? 5
        : (cUserPref === 1 && userPref === 3) ||
          (cUserPref === 3 && userPref === 1) // dont want + open
        ? -5
        : 0; // either doesn't say, not sure + dont want, not sure + want
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

      return cUserPref.marriage === userPref.marriage &&
        cUserPref.casual === userPref.casual // MC MC, Mc Mc, mC mC
        ? 10
        : (!cUserPref.marriage &&
            cUserPref.casual &&
            userPref.marriage &&
            !userPref.casual) || // mC Mc
          (cUserPref.marriage &&
            !cUserPref.casual &&
            !userPref.marriage &&
            userPref.casual) // Mc mC
        ? -10
        : 5; // MC mC, MC Mc
    };
    
    const religionPointer = (user) => {
      const cUser = {
        religion: currentUser.personalDetails.religion,
        pref: currentUser.preferences.acceptedReligions,
      };
      const user = {
        religion: user.personalDetails.religion,
        pref: user.preferences.acceptedReligions,
      };

      // cUser pref not say (0) + any = 0
      // cUser 1+ & user 1+ (same) = 10
      // cUser/user no pref (0) & user/cUser no pref (0) &
    };

    let totalPointsUserA = marriageCasualPointer(userA);
    // + kidsPointer(userA);
    let totalPointsUserB = marriageCasualPointer(userB);
    // + kidsPointer(userB);

    return totalPointsUserA < totalPointsUserB
      ? 1
      : totalPointsUserA > totalPointsUserB
      ? -1
      : 0;
  };

  let filteredUsers = [...users];
  filteredUsers.splice(
    filteredUsers.findIndex((user) => user === currentUser),
    1
  );
  filteredUsers = filteredUsers.sort(potentialMatchSorter);
  // .filter(potentialMatchFilter)
  // .sort(potentialMatchSorter);
  console.log(
    currentUser.preferences.lifeStyle.marriage,
    currentUser.preferences.lifeStyle.casual
  );

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

export default Matching;
