export const getAge = (dob) => {
  const dateString = `${dob.year}-${dob.months}-${dob.day}`;
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

export const getIndexByEmailAndPassword = (emailTest, passwordTest, users) => {
  console.log(emailTest, passwordTest);
  return users.findIndex(
    (user) =>
      user.login.email === emailTest && user.login.password === passwordTest
  );
};

export const getIndexById = (id, users) => {
  // console.log(users, id);
  return users.findIndex(({ userId }) => userId === id);
};

export const getMessageIndexById = (id, messages) => {
  return messages.findIndex(({ messageId }) => messageId === id);
};
