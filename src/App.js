

import { messages2 } from "./mock/messages-info";

import { users, messages as mockMessages, currentUserId } from "./mock";

import Interface from "./components/Interface";
import { useState } from "react";
import { getUserById } from "./utils/matchingUtil";

const App = () => {

  const [messages, setMessages] = useState(messages2);
	// Adds the current user ID to the blocked array in the data
	const blockUserId = () => {
		users[0].blocked.push(currentUserId);
	};

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
        blockUserId={blockUserId}
      />
    </>
  );
};

export default App;
