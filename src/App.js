import { users, messages as mockMessages, currentUserId } from "./mock";
import Interface from "./components/Interface";
import { useState } from "react";
import { getUserById } from "./utils/matchingUtil";

const App = () => {
  const [messages, setMessages] = useState(mockMessages);

  const addMessage = (payload) => {
    const copy = [...messages];
    console.log(copy);
    copy.push(payload);
    setMessages(copy);
  };

  const currentUser = getUserById(currentUserId, users);

  const onLikeUpdate = (user, boolean) => {
    const usersCopy = [...users];
    if (boolean) {
      usersCopy.currentUser.likes.push(user.userId);
      usersCopy.currentUser.seen.push(user.userId);
    }
  };

  return (
    <>
      <Interface
        users={users}
        messages={messages}
        addMessage={addMessage}
        onLikeUpdate={onLikeUpdate}
      />
    </>
  );
};

export default App;
