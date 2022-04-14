// Converts user's DoB data into age.
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

// Find user's data through their userId.
export const getUserById = (id, users) => {
  return users.find(({ userId }) => userId === id);
};

// Get index of particular user in users (object with all users data) through their email and password.
export const getIndexByEmailAndPassword = (emailTest, passwordTest, users) => {
  console.log(emailTest, passwordTest);
  return users.findIndex(
    (user) =>
      user.login.email === emailTest && user.login.password === passwordTest
  );
};

// Get index of particular user in users throught their userId

export const getIndexById = (id, users) => {
  // console.log(users, id);
  return users.findIndex(({ userId }) => userId == id);
};

// Get index of particular message in messages (object with all messages data) through messageId.
export const getMessageIndexById = (id, messages) => {
  return messages.findIndex(({ messageId }) => messageId === id);
};
