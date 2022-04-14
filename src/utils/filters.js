import { findDistanceFromLongsAndLats } from "./generic";
import { getAge } from "../utils/general";
let matchingFilterGlobal = null;
let currentUser = null;
// Filters out incompatible users (including seen) from array of potencial matches. Check's if each user is a viable potential match for current user through a series of filters. 


// Due to filter-options, filter must be called as this function, which in turn applies the filter.
export function filteringUsers(users, currentUserArgument, matchingFilter) {
  matchingFilterGlobal = matchingFilter;
  currentUser = currentUserArgument;
  return users.filter(potentialMatchFilter);
}

// This "master filter" only applies filters that are enabled in filter-options
export const potentialMatchFilter = (user) => {
  return matchingFilterGlobal.distanceFilter &&
    !distanceFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.ageFilter && !ageFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.genderFilter && !genderFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.heightFilter && !heightFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.existingKidsFilter &&
      !existingKidsFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.openToKidsFilter &&
      !openToKidsFilter(currentUser, user)
    ? false
    : matchingFilterGlobal.seenFilter && !seenFilter(currentUser, user)
    ? false
    : true;
};

// checks if both users are within eachother's accepted distance.
const distanceFilter = (currentUser, user) => {
  return distanceCheck(currentUser, user) && distanceCheck(user, currentUser);
};

export const distanceCheck = (user1, user2) => {
  const user1Location = user1.personalDetails.location;
  const user1AcceptedDistance = user1.preferences.acceptedDistance;
  const user2Location = user2.personalDetails.location;
  return (
    findDistanceFromLongsAndLats(user1Location, user2Location) <
    user1AcceptedDistance
  );
};

// checks if both users' ages are within eachothers accepted age range.
const ageFilter = (currentUser, user) => {
  return ageCheck(currentUser, user) && ageCheck(user, currentUser);
};

const ageCheck = (user1, user2) => {
  return getAge(user1.personalDetails.dob) >= user2.preferences.age.min &&
    getAge(user1.personalDetails.dob) <= user2.preferences.age.max
    ? true
    : false;
};

// checks if boths users' genders meet eachothers accepted genders.
const genderFilter = (currentUser, user) => {
  return (
    currentUser.preferences.gender.includes(user.personalDetails.gender) &&
    user.preferences.gender.includes(currentUser.personalDetails.gender)
  );
};

// checks if both users' height are within eachothers accepted height range.
export const heightFilter = (currentUser, user) => {
  return heightCheck(currentUser, user) && heightCheck(user, currentUser);
};

export const heightCheck = (user1, user2) => {
  return user1.personalDetails.height >= user2.preferences.height.min &&
    user1.personalDetails.height <= user2.preferences.height.max
    ? true
    : false;
};

// filters out users that are parents from users that don't want parents.
export const existingKidsFilter = (currentUser, user) => {
  // have kids?  0: not saying, 1: don't have kids, 2: have kids
  // kids accepted? 0: not sure, 1: no, 2: yes
  return (
    (currentUser.personalDetails.kids === 2 && // user1 has kids, user2 doesn't mind..
      user.preferences.kidsAccepted !== 1 &&
      (user.personalDetails.kids !== 2 || // & user2 doesn't have kids.
        (user.personalDetails.kids === 2 && // or: & user2 also has kids and user1 doesn't mind.
          currentUser.preferences.kidsAccepted !== 1))) ||
    (user.personalDetails.kids === 2 && // same as above, but swap user1 and user2
      currentUser.preferences.kidsAccepted !== 1 &&
      (currentUser.personalDetails.kids !== 2 ||
        (currentUser.personalDetails.kids === 2 &&
          user.preferences.kidsAccepted !== 1))) ||
    (currentUser.personalDetails.kids !== 2 && user.personalDetails.kids !== 2) // neither users have kids
  );
};

// filters out users that want kids from users that don't.
export const openToKidsFilter = (currentUser, user) => {
  return (currentUser.preferences.lifeStyle.openToKids === 3 &&
    user.preferences.lifeStyle.openToKids === 0) || // cUser wants kids & user doesn't
    (user.preferences.lifeStyle.openToKids === 3 &&
      currentUser.preferences.lifeStyle.openToKids === 0) // cUser doesn't want kids & user does
    ? false
    : true;
};

// filters out users already seen, except for the most recently seen user.
export const seenFilter = (currentUser, user) => {
  if (currentUser.seen && currentUser.seen.length > 0) {
    return (
      currentUser.seen.includes(user.userId) === false ||
      currentUser.seen[currentUser.seen.length - 1] === user.userId 
    );
  }
  return true;
};
