import { findDistanceFromLongsAndLats } from "./general";

export const getAge = (user) => {
  const dateString = `${user.personalDetails.dob.year}-${user.personalDetails.dob.months}-${user.personalDetails.dob.day}`;
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

export const getUserById = (id, users) => {
  return users.find(({ userId }) => userId === id);
};

export const getIndexById = (id, users) => {
  return users.findIndex(({ userId }) => userId === id);
};
export const getMessageIndexById = (id, messages) => {
  return messages.findIndex(({ messageId }) => messageId === id);
};

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
  return getAge(user1) >= user2.preferences.age.min &&
    getAge(user1) <= user2.preferences.age.max
    ? true
    : false;
};

export const genderFilter = (currentUser, user) => {
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

export const existingKidsFilter = (currentUser, user) => {
  return (
    (currentUser.personalDetails.kids === user.preferences.kidsAccepted &&
      user.personalDetails.kids === currentUser.preferences.kidsAccepted) ||
    currentUser.personalDetails.kids === undefined ||
    user.personalDetails.kids === undefined
  );
};

export const openToKidsFilter = (currentUser, user) => {
  return (currentUser.preferences.lifeStyle.openToKids === 4 &&
    user.preferences.lifeStyle.openToKids === 1) || // cUser wants kids & user doesn't
    (user.preferences.lifeStyle.openToKids === 4 &&
      currentUser.preferences.lifeStyle.openToKids === 1) // cUser doesn't want kids & user does
    ? false
    : true;
};
