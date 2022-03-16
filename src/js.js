let currentUser = 1;
let targetUser = 2;

messages.forEach((message) => {
  let existingConvo = [];
  if (
    (message.toUserId === currentUser && message.fromUserId === targetUser) ||
    (message.toUserId === targetUser && message.fromUserId === currentUser)
  ) {
    existingConvo.push(message);
  }
  message.sort(byTime);
});
