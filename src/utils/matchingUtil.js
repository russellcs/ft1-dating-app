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
