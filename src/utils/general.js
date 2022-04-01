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
