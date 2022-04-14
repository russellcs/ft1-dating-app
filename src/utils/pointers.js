// Due to sorter being stored in utils, it requires more arguments than a normal .sort function. So sortingUsers is called, which in turn sorts the users.
let currentUser = null;
export function sortingUsers(users, currentUserArgument) {
  currentUser = currentUserArgument;
  return users.sort(potentialMatchSorter);
}

// potentialMatchSorter determine which users are displayed first (i.e. match the most) for the current user to review.
// It applies points to each user, in reference to their compatability with the current user.
// Then returns 1, 0 or -1 (ie. sort function returns), based on who has most points.
const potentialMatchSorter = (userA, userB) => {
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

// Ensures last seen user is always displayed first
const lastSeenPointer = (currentUserSeen, userId) => {
  if (!currentUserSeen) return 0;
  return currentUserSeen[currentUserSeen.length - 1] === userId ? 999 : 0;
};

// Returns points based on desire-for-children compatability.
const kidsPointer = (cUserPref, userPref) => {
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

// Returns points based on casual/mariage goals compatability.
const marriageCasualPointer = (cUserPref, userPref) => {
  // M = wants marriage, m = doesn't want marriage, C = wants casual, c= doesn't want casual.
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

// Returns points based on religion compatablity
const religionPointer = (cUserRelig, userRelig) => {
  return cUserRelig === 0 || userRelig === 0 // cUser or user doesn't say
    ? 0
    : cUserRelig === userRelig // both share same religion
    ? 10
    : cUserRelig !== 3 && userRelig !== 3 // both are non-atheist
    ? 5
    : -5; // athiest and religion
};

// Returns points based on smoking compatability
const smokersPointer = (cUserPref, userPref) => {
  return cUserPref !== 0 && cUserPref === userPref // users have same pref
    ? 5
    : (cUserPref === 1 && userPref === 3) || (userPref === 1 && cUserPref === 3) // smoke & don't smoke
    ? -5
    : 0; // don't say, sometimes & smoke, sometimes & don't smoke
};


