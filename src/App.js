import { messages as mockMessages } from "./mock/mockMessages";
import { users as mockUsers, currentUserId } from "./mock";
import Interface from "./components/Interface";
import { useEffect, useState } from "react";
import { getIndexById, getMessageIndexById } from "./utils/matching";
import { storeData, getData } from "./storage";
import { getUniqueId } from "./utils/general";

const App = () => {
  const [users, setUsers] = useState(mockUsers);
  const [messages, setMessages] = useState(mockMessages);
  const [userId, setUserId] = useState(getUniqueId(16));

  //  set the state from the disk
  useEffect(() => {
    const data = getData();
    if (data.users && data.messages) {
      setUsers(data.users);
      setMessages(data.messages);
    }
  }, []);
  // when the state changes, save the changes to the disk
  useEffect(() => {
    storeData("users", users);
  }, [users]);
  useEffect(() => {
    storeData("messages", messages);
  }, [messages]);

  // Adds the current user ID to the blocked array in the data
  const blockUserId = (fId) => {
    const foreignUserId = Number(fId);
    const usersCopy = [...users];
    usersCopy[getIndexById(currentUserId, users)].blocked.push(foreignUserId);
    setUsers(usersCopy);
  };

  const addMessage = (payload) => {
    const copy = [...messages];
    copy.push(payload);
    setMessages(copy);
    console.log(copy);
  };

  const deleteMessage = (messageId) => {
    const messagesCopy = [...messages];
    const index = getMessageIndexById(messageId, messagesCopy);
    messagesCopy.splice(index, 1);
    setMessages(messagesCopy);
  };

  const addUser = async (newUser) => {
    const usersCopy = [...users];
    // const coords = await getLngLat(newUser.personalDetails.location.postCode);
    // newUser.personalDetails.location.longitude = coords.longitude;
    // newUser.personalDetails.location.latitude = coords.latitude;
    usersCopy.push(newUser);
    // console.log(usersCopy);
    setUsers(usersCopy);
  };

  const addToLikes = (user, currentUserId) => {
    const usersCopy = [...users];
    const currentUser = usersCopy[getIndexById(currentUserId, usersCopy)];

    currentUser.likes.push(user.userId); // push liked userId into currentUser's [liked]
    console.log(currentUser.likes);
    if (user.likes.includes(currentUserId)) {
      // if current user is also liked by user..
      const userCopy = usersCopy[getIndexById(user.userId, usersCopy)];
      userCopy.matches.push(currentUserId);
      currentUser.matches.push(user.userId); // push eachother's id's into their respective [matches]
      addMessage({
        toUserId: user.userId,
        fromUserId: userId,
        messageId: getUniqueId(16),
        content: "",
        sendTimestamp: 0,
        read: false,
        blocked: false, // & start convo.
      });
      //insert notification function if desired
    }
    setUsers(usersCopy);
    console.log(users[0].likes);
  };

  const addToSeen = (seenUserId, currentUserId) => {
    // const usersCopy = [...users];
    // const currentUser = usersCopy[getIndexById(currentUserId, usersCopy)];
    // if (!currentUser.seen.includes(seenUserId)) {
    //   currentUser.seen.push(seenUserId);
    // }
    // console.log(usersCopy);
    // setUsers(usersCopy);
  };

  return (
    <>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear localStorage
      </button>
      <Interface
        users={users}
        messages={messages}
        addMessage={addMessage}
        addToLikes={addToLikes}
        addToSeen={addToSeen}
        blockUserId={blockUserId}
        addUser={addUser}
        newUserId={userId}
        deleteMessage={deleteMessage}
      />
    </>
  );
};

export default App;
