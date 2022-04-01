import { findDistanceFromLongsAndLats } from "./generic";

export const distanceFilter = (currentUser, user) => {
  // checks if users location is more less than accepted distance
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

export const ageFilter = (currentUser, user) => {
  // checks if user1's age is more/less than user2's prefered min/max age

  return ageCheck(currentUser, user) && ageCheck(user, currentUser);
};

export const ageCheck = (user1, user2) => {
  return getAge(user1.personalDetails.dob) >= user2.preferences.age.min &&
    getAge(user1.personalDetails.dob) <= user2.preferences.age.max
    ? true
    : false;
};

export const genderFilter = (currentUser, user) => {
  // console.log(currentUser, user);
  return (
    currentUser.preferences.gender.includes(user.personalDetails.gender) &&
    user.preferences.gender.includes(currentUser.personalDetails.gender)
  );
};

export const heightFilter = (currentUser, user) => {
  // checks if user1's height is more/less than user2's prefered min/max height
  return heightCheck(currentUser, user) && heightCheck(user, currentUser);
};

export const heightCheck = (user1, user2) => {
  return user1.personalDetails.height >= user2.preferences.height.min &&
    user1.personalDetails.height <= user2.preferences.height.max
    ? true
    : false;
};

// filters out users that are parents from users that don't want parents
export const existingKidsFilter = (currentUser, user) => {
  // have kids?  0: not saying, 1: don't have kids, 2: have kids
  // kids accepted? 0: not sure, 1: no, 2: yes
  return (
    (currentUser.personalDetails.kids === 2 && // user1 has kids, user2 don't mind..
      user.preferences.kidsAccepted !== 1 &&
      (user.personalDetails.kids !== 2 || // & user2 don't have kids.
        (user.personalDetails.kids === 2 && // or: & user2 also has kids and user1 don't mind.
          currentUser.preferences.kidsAccepted !== 1))) ||
    (user.personalDetails.kids === 2 && // same as above, but swap user1 and user2
      currentUser.preferences.kidsAccepted !== 1 &&
      (currentUser.personalDetails.kids !== 2 ||
        (currentUser.personalDetails.kids === 2 &&
          user.preferences.kidsAccepted !== 1))) ||
    (currentUser.personalDetails.kids !== 2 && user.personalDetails.kids !== 2) // neither users have kids
  );
};

export const openToKidsFilter = (currentUser, user) => {
  return (currentUser.preferences.lifeStyle.openToKids === 3 &&
    user.preferences.lifeStyle.openToKids === 0) || // cUser wants kids & user doesn't
    (user.preferences.lifeStyle.openToKids === 3 &&
      currentUser.preferences.lifeStyle.openToKids === 0) // cUser doesn't want kids & user does
    ? false
    : true;
};

export const seenFilter = (currentUser, user) => {
  if (currentUser.seen && currentUser.seen.length > 0) {
    return currentUser.seen.includes(user.userId) === false;
  }
  return true;
};
