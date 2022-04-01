let currentUser = null;

export function sortingUsers(users, currentUserArgument) {
  currentUser = currentUserArgument;
  return users.sort(potentialMatchSorter);
}

// Sorts array of potential matches to display most compatible matches first. Always displays last seen user first.
const potentialMatchSorter = (userA, userB) => {
  // console.log(userA, userB)
  let totalPointsUserA =
    marriageCasualPointer(
      {
        marriage: currentUser.preferences.lifeStyle.marriage,
        casual: currentUser.preferences.lifeStyle.casual,
      },
      {
        marriage: userA.preferences.lifeStyle.marriage,
        casual: userA.preferences.lifeStyle.casual,
      }
    ) +
    kidsPointer(
      currentUser.preferences.lifeStyle.openToKids,
      userA.preferences.lifeStyle.openToKids
    ) +
    religionPointer(
      currentUser.personalDetails.religion,
      userA.personalDetails.religion
    ) +
    smokersPointer(
      currentUser.personalDetails.smokers,
      userA.personalDetails.smokers
    ) +
    lastSeenPointer(currentUser.seen, userA.userId);

  let totalPointsUserB =
    marriageCasualPointer(
      {
        marriage: currentUser.preferences.lifeStyle.marriage,
        casual: currentUser.preferences.lifeStyle.casual,
      },
      {
        marriage: userB.preferences.lifeStyle.marriage,
        casual: userB.preferences.lifeStyle.casual,
      }
    ) +
    kidsPointer(
      currentUser.preferences.lifeStyle.openToKids,
      userB.preferences.lifeStyle.openToKids
    ) +
    religionPointer(
      currentUser.personalDetails.religion,
      userB.personalDetails.religion
    ) +
    smokersPointer(
      currentUser.personalDetails.smokers,
      userB.personalDetails.smokers
    ) +
    lastSeenPointer(currentUser.seen, userB.userId);

  return totalPointsUserA < totalPointsUserB
    ? 1
    : totalPointsUserA > totalPointsUserB
    ? -1
    : 0;
};

// POINTER functions determine which users are displayed first (i.e. match the most) for the current user to review.
export const kidsPointer = (cUserPref, userPref) => {
  // 0: don't want kids, 1: not sure, 2: open, 3: want
  return cUserPref === userPref // both are same
    ? 10
    : (cUserPref === 2 && userPref === 3) || // want + open
      (cUserPref === 3 && userPref === 2) ||
      (cUserPref === 2 && userPref === 1) || // not sure + open
      (cUserPref === 1 && userPref === 2)
    ? 5
    : (cUserPref === 0 && userPref === 2) || (cUserPref === 2 && userPref === 0) // dont want + open
    ? -5
    : 0; // not sure + dont want, not sure + want
  // NB: "want/don't want" combo is filtered out in openToKidsFilter
};

export const marriageCasualPointer = (cUserPref, userPref) => {
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

export const religionPointer = (cUserRelig, userRelig) => {
  return cUserRelig === 0 || userRelig === 0 // cUser or user doesn't say
    ? 0
    : cUserRelig === userRelig // both share same religion
    ? 10
    : cUserRelig !== 3 && userRelig !== 3 // both are non-atheist
    ? 5
    : -5; // athiest and religion
};

export const smokersPointer = (cUserPref, userPref) => {
  return cUserPref !== 0 && cUserPref === userPref // users have same pref
    ? 5
    : (cUserPref === 1 && userPref === 3) || (userPref === 1 && cUserPref === 3) // smoke & don't smoke
    ? -5
    : 0; // don't say, sometimes & smoke, sometimes & don't smoke
};

// ensures last seen user is always first displayed
export const lastSeenPointer = (currentUserSeen, userId) => {
  if (!currentUserSeen) return 0;
  return currentUserSeen[currentUserSeen.length - 1] === userId ? 999 : 0;
};
