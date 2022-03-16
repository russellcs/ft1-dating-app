import Onboarding from "./Onboarding";
import Matches from "./Matches";
import Search from "./Search";
import Messages from "./messages/Messages";
import { useState } from "react";

const Interface = (props) => {
  const [screen, setScreen] = useState(0);

  const onLogin = (payload) => {
    setScreen(1);
    //save the new user data
  };

  const onMessageUpdate = (payload) => {
    //do something useful
  };

  const onLikeUpdate = (payload) => {
    //update the like
  };
  
  return (
    <>
      <nav>
        <button onClick={() => setScreen(0)}>Onboarding</button>
        <button onClick={() => setScreen(1)}>Matches</button>
        <button onClick={() => setScreen(2)}>Search</button>
        <button onClick={() => setScreen(3)}>Messages</button>
      </nav>
      {screen === 0 && <Onboarding onLogin={onLogin} users={props.users} />}

      {screen === 1 && (
        <Matches onLikeUpdate={onLikeUpdate} users={props.users} />
      )}

      {screen === 2 && <Search users={props.users} />}

      {screen === 3 && (
        <Messages
          users={props.users}
          messages={props.messages}
          onMessageUpdate={onMessageUpdate}
        />
      )}
    </>
  );
};

export default Interface;
